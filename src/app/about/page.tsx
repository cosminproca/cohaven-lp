import Header from '../components/Header';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About CoHaven</h1>
            
            <div className="text-gray-800 dark:text-gray-200">
              <p className="text-lg mb-6">
                CoHaven is revolutionizing the way people find their perfect roommate match. Our mission is to make the roommate search process simple, efficient, and enjoyable.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Our Story</h2>
              <p className="mb-6">
                Founded in 2024, CoHaven emerged from a simple observation: finding the right roommate shouldn&apos;t be a stressful experience. We combined cutting-edge technology with human-centered design to create a platform that makes roommate matching feel natural and fun.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mb-6">
                We&apos;re on a mission to transform the roommate search experience by:
              </p>
              <ul className="list-disc pl-6 mb-6 marker:text-gray-800 dark:marker:text-gray-200">
                <li>Making the process quick and efficient</li>
                <li>Ensuring safety and security for all users</li>
                <li>Creating meaningful connections between compatible roommates</li>
                <li>Simplifying the apartment search and rental process</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Our Values</h2>
              <p className="mb-6">
                At CoHaven, we believe in:
              </p>
              <ul className="list-disc pl-6 mb-6 marker:text-gray-800 dark:marker:text-gray-200">
                <li>Transparency and honesty</li>
                <li>User privacy and security</li>
                <li>Creating positive living environments</li>
                <li>Continuous innovation and improvement</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Contact Us</h2>
              <p className="mb-6">
                Have questions or suggestions? We&apos;d love to hear from you! Reach out to us at:
              </p>
              <p className="text-orange-600 dark:text-orange-400">
                support@cohaven.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 