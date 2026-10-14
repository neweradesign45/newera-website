import { NextRequest, NextResponse } from 'next/server';

const VERIFY_TOKEN = 'newera_secret_token_2026';
const N8N_TARGET = 'https://newera-n8n.onrender.com/webhook/whatsapp';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Forward to n8n asynchronously
    fetch(N8N_TARGET, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).catch((err) => {
      console.error('[WhatsApp Webhook] Forwarding to n8n failed:', err);
    });

    // Acknowledge Meta immediately
    return new NextResponse('EVENT_RECEIVED', { status: 200 });
  } catch (error) {
    console.error('[WhatsApp Webhook] Error:', error);
    return new NextResponse('EVENT_RECEIVED', { status: 200 });
  }
}