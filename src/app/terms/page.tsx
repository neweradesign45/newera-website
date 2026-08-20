import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | NewEra Automations',
  description: 'Terms of Service for NewEra Automations.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">Terms of Service</h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Last Updated: August 2026
          </p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">1. Services Description</h2>
            <p>
              NewEra Automations provides specialized digital services including AI automation, workflow design, chatbots, and lead generation. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">2. User Responsibilities</h2>
            <p>
              By engaging with our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide accurate and complete information when communicating with us or using our services.</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms.</li>
              <li>Not engage in any activity that interferes with or disrupts our services or website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">3. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by NewEra Automations and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Custom workflows, chatbots, and systems built for clients are subject to individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">4. Limitation of Liability</h2>
            <p>
              In no event shall NewEra Automations, its founders, directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">6. Contact</h2>
            <p>
              If you have any questions or concerns regarding these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Founder:</strong> Krishna Prajapati</li>
              <li><strong>Email:</strong> <a href="mailto:neweraagents45@gmail.com" className="text-primary hover:underline">neweraagents45@gmail.com</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/917078994915" className="text-primary hover:underline">+91 70789 94915</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
