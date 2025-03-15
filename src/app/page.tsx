import Button from './components/Button';
import ThemeToggle from './components/ThemeToggle';
import AppPreview from './components/AppPreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Find Your Perfect
                <span className="text-orange-600 dark:text-orange-400"> Roommate Match</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Swipe right to find your ideal roommate and rent an apartment together. 
                CoHaven makes group living simple and fun!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary">Download Now</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <AppPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-900/5 dark:to-amber-900/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose CoHaven?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Experience the future of roommate matching with our innovative features</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-xl dark:from-orange-500/5 dark:to-amber-500/5"></div>
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                <div className="mb-6 relative">
                  <div className="hover:animate-spin w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center transform -rotate-6">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Smart Matching</h3>
                <p className="text-gray-600 dark:text-gray-300">Our AI-powered algorithm matches you with compatible roommates based on lifestyle, preferences, and budget.</p>
                <div className="mt-6 flex items-center text-orange-600 dark:text-orange-400">
                  <span className="font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-12">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-xl dark:from-orange-500/5 dark:to-amber-500/5"></div>
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                <div className="mb-6 relative">
                  <div className="hover:animate-spin w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center transform rotate-6">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quick & Easy</h3>
                <p className="text-gray-600 dark:text-gray-300">Swipe through potential matches and connect instantly. Find your perfect roommate in minutes, not days.</p>
                <div className="mt-6 flex items-center text-orange-600 dark:text-orange-400">
                  <span className="font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative mt-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-xl dark:from-orange-500/5 dark:to-amber-500/5"></div>
              <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                <div className="mb-6 relative">
                  <div className="hover:animate-spin w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center transform -rotate-3">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Safe & Secure</h3>
                <p className="text-gray-600 dark:text-gray-300">Verified profiles and secure messaging ensure you&apos;re connecting with real, trustworthy people.</p>
                <div className="mt-6 flex items-center text-orange-600 dark:text-orange-400">
                  <span className="font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">What Our Users Say</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">JD</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New York City</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">"Found my perfect roommate match in just 2 days! The app made the whole process so much easier than traditional roommate searches."</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">AS</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Alex Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">San Francisco</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">"The matching algorithm is spot-on! Found someone with similar lifestyle and interests. We're now great friends and perfect roommates."</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">MJ</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Maria Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chicago</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">"CoHaven made finding a roommate so much less stressful. The verification process gave me peace of mind, and the chat feature was super convenient!"</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">MJ</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Maria Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chicago</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">"CoHaven made finding a roommate so much less stressful. The verification process gave me peace of mind, and the chat feature was super convenient!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30 dark:from-orange-900/5 dark:to-amber-900/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Get the latest updates about new features, roommate finding tips, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                />
              </div>
              <Button variant="primary">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 dark:bg-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Find Your Perfect Roommate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of people who found their ideal living situation with CoHaven.
            Download the app today and start swiping!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">Download on App Store</Button>
            <Button variant="secondary">Get it on Google Play</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
