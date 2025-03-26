import Header from '../components/Header';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms & Conditions</h1>
            
            <div className="text-gray-800 dark:text-gray-200">
              <p className="text-lg mb-6">
                Welcome to CoHaven. By using our platform, you agree to these terms and conditions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using CoHaven, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. User Accounts</h2>
              <p className="mb-6">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. User Conduct</h2>
              <p className="mb-6">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 marker:text-gray-800 dark:marker:text-gray-200">
                <li>Provide false or misleading information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use the service for any illegal purposes</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Interfere with the proper working of the service</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Privacy Policy</h2>
              <p className="mb-6">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">5. Disclaimer</h2>
              <p className="mb-6">
                CoHaven is provided &quot;as is&quot; without any warranties, either express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on the service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">6. Limitation of Liability</h2>
              <p className="mb-6">
                CoHaven shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">7. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">8. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-orange-600 dark:text-orange-400">
                legal@cohaven.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 