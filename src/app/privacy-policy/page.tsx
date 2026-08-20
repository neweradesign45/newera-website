import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NewEra Automations',
  description: 'Privacy Policy for NewEra Automations. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">Privacy Policy</h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Last Updated: August 2026
          </p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">1. Information Collection</h2>
            <p>
              NewEra Automations ("we", "our", or "us") collects information when you interact with our website, neweraautomations.com. The information we collect may include personal data such as your name, email address, phone number (including WhatsApp), and any details you provide when contacting us for AI automation, workflow design, chatbots, or lead generation services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">2. Use of Data</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Communicate with you regarding inquiries, project updates, and support.</li>
              <li>Analyze website usage to enhance user experience.</li>
              <li>Send emails and notifications related to your requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">3. Cookies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to track activity and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">4. Third Party Services</h2>
            <p className="mb-4">
              We may employ third party companies and individuals to facilitate our services. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics (G-VQX946LPH0):</strong> Used to monitor and analyze the use of our website.</li>
              <li><strong>Resend:</strong> Used to manage and send emails.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">5. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">6. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Founder:</strong> Krishna Prajapati</li>
              <li><strong>Email:</strong> <a href="mailto:neweraagents45@gmail.com" className="text-primary hover:underline">neweraagents45@gmail.com</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/917078994915" className="text-primary hover:underline">+91 70789 94915</a></li>
              <li><strong>Location:</strong> India</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-mono font-semibold text-primary mb-4 uppercase tracking-wider">7. Changes to Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
