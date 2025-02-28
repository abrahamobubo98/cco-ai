import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Onboarding() {
  async function handleImport(formData: FormData) {
    'use server'
    // In a real app, you would process the import here
    // For now, we'll just redirect to the dashboard
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient">CCO</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Welcome, John Doe</span>
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Your Second Brain</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Import your data or start from scratch to build your knowledge base for CCO.
            </p>
          </div>
          
          {/* Onboarding Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">1</div>
              <div className="ml-4 mr-8">
                <p className="font-medium text-gray-900 dark:text-white">Create Account</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              </div>
            </div>
            <div className="w-12 h-0.5 bg-purple-600"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">2</div>
              <div className="ml-4 mr-8">
                <p className="font-medium text-gray-900 dark:text-white">Build Second Brain</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Current step</p>
              </div>
            </div>
            <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center font-semibold">3</div>
              <div className="ml-4">
                <p className="font-medium text-gray-900 dark:text-white">Connect to Meetings</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Next step</p>
              </div>
            </div>
          </div>
          
          {/* Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Import from Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">
              <h2 className="text-2xl font-bold mb-4">Import from Social Media</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Import your existing content and knowledge from your social media accounts to kickstart your second brain.
              </p>
              
              <form action={handleImport} className="space-y-4">
                <div className="space-y-4">
                  <button 
                    type="button"
                    className="w-full flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">Twitter</span>
                    </div>
                    <span className="text-purple-600">Connect</span>
                  </button>
                  
                  <button 
                    type="button"
                    className="w-full flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">LinkedIn</span>
                    </div>
                    <span className="text-purple-600">Connect</span>
                  </button>
                  
                  <button 
                    type="button"
                    className="w-full flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">GitHub</span>
                    </div>
                    <span className="text-purple-600">Connect</span>
                  </button>
                  
                  <button 
                    type="button"
                    className="w-full flex items-center justify-between p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <span className="ml-3 font-medium">Email</span>
                    </div>
                    <span className="text-purple-600">Connect</span>
                  </button>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                >
                  Continue with Selected Sources
                </button>
              </form>
            </div>
            
            {/* Start From Scratch */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">
              <h2 className="text-2xl font-bold mb-4">Start From Scratch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Begin with a blank slate and build your second brain by adding information manually or uploading documents.
              </p>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <div className="mx-auto w-16 h-16 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">Drag and drop files here</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">or click to browse</p>
                  <input type="file" multiple className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="inline-block py-2 px-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors">
                    Upload Documents
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Supports PDF, DOCX, TXT, MD (max 50MB)
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Or start with a template</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <p className="font-medium">Work Notes</p>
                    </button>
                    <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <p className="font-medium">Personal Projects</p>
                    </button>
                  </div>
                </div>
                
                <form action={handleImport}>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Start Building
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Need help? <a href="#" className="text-purple-600 hover:text-purple-500">Check our guide</a> or <a href="#" className="text-purple-600 hover:text-purple-500">contact support</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 