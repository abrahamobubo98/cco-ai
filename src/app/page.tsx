import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient">CCO</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a>
            <Link href="/login" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 transition-colors">
              Get Started
            </Link>
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient">AI-Powered</span> Meeting Assistant
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            CCO listens to your video calls and provides real-time insights from your second brain, making every meeting more productive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-center transition-colors font-medium text-lg">
              Try for Free
            </Link>
            <a href="#demo" className="rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 px-8 py-3 text-center transition-colors font-medium text-lg">
              Watch Demo
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm z-10 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-5/6 max-w-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">CCO Assistant</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Just now</p>
                  </div>
                </div>
                <p className="text-sm mb-2">I noticed in your second brain that you've discussed pricing strategy with this client before. Here's the relevant information:</p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <p className="font-medium">Previous agreement: $15,000 for initial phase</p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">From meeting with John on March 15th</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CCO?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI-powered assistant transforms your meetings with intelligent insights from your personal knowledge base.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Your Second Brain</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Store important information and let CCO recall it exactly when you need it during meetings.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Meeting Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                CCO listens to your video calls in real-time, identifying key moments when your stored knowledge is relevant.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Private and Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data stays private. CCO processes information locally and securely, giving you peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CCO Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Three simple steps to enhance your meeting experience with your own cognitive assistant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Line connector (visible on md screens and up) */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-600 text-purple-600 flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Build Your Second Brain</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Upload documents, notes, or previous meeting summaries to create your knowledge base.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-600 text-purple-600 flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Connect to Your Meetings</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Install our browser extension or desktop app to integrate with your video conferencing tools.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-600 text-purple-600 flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Receive Smart Insights</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Let CCO listen and provide relevant information from your second brain exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professionals across industries are transforming their meetings with CCO.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "CCO has transformed our client meetings. Having access to previous pricing discussions and commitments in real-time has prevented so many misunderstandings."
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sales Director</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "I used to struggle remembering details from previous client interactions. Now CCO pulls up the exact information I need during calls. It's like having a perfect memory."
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Consultant</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "As someone who handles multiple clients daily, CCO has been a game-changer. It surfaces the right information at the right time, making me look prepared and thorough."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Meetings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use CCO to make every meeting more productive and informed.
          </p>
          <Link href="/signup" className="rounded-full bg-white text-purple-600 hover:bg-gray-100 px-10 py-3 text-lg font-medium inline-block transition-colors">
            Get Started for Free
          </Link>
          <p className="mt-4 text-sm text-white/80">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">CCO</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your AI-powered meeting assistant that makes every conversation more productive.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#features" className="hover:text-purple-600">Features</a></li>
                <li><a href="#pricing" className="hover:text-purple-600">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-purple-600">Integrations</a></li>
                <li><a href="#roadmap" className="hover:text-purple-600">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#blog" className="hover:text-purple-600">Blog</a></li>
                <li><a href="#docs" className="hover:text-purple-600">Documentation</a></li>
                <li><a href="#guides" className="hover:text-purple-600">Guides</a></li>
                <li><a href="#support" className="hover:text-purple-600">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#about" className="hover:text-purple-600">About Us</a></li>
                <li><a href="#careers" className="hover:text-purple-600">Careers</a></li>
                <li><a href="#privacy" className="hover:text-purple-600">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-purple-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} CCO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#twitter" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#linkedin" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#github" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
