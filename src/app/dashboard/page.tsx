import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient">CCO</span>
            </Link>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/dashboard" className="font-medium text-purple-600">Dashboard</Link>
                <Link href="/meetings" className="font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Meetings</Link>
                <Link href="/second-brain" className="font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Second Brain</Link>
                <Link href="/settings" className="font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Settings</Link>
              </nav>
              <div className="flex items-center gap-4">
                <button className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white cursor-pointer">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Welcome to your CCO Dashboard, John!</h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Your second brain is now set up and ready to assist you in your meetings.
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 p-4 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Schedule a Meeting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Connect CCO to your next video call to get real-time insights.
              </p>
              <Link href="/meetings/new" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                Schedule now →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Add to Second Brain</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Enhance your knowledge base by adding more information.
              </p>
              <Link href="/second-brain/new" className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline">
                Add knowledge →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Configure Settings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Customize CCO to match your preferences and workflow.
              </p>
              <Link href="/settings" className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline">
                Open settings →
              </Link>
            </div>
          </div>
          
          {/* Onboarding Complete */}
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-500/10 dark:from-purple-600/20 dark:to-blue-500/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
            <div className="flex items-center gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Onboarding Complete!</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Your CCO is now ready to assist you in your meetings. Install our browser extension to connect CCO to your video calls.
                </p>
                <div className="mt-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-2 font-medium transition-colors">
                    Install Browser Extension
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 