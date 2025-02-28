import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Login() {
  // In a real app, this would be a server action or API call
  async function handleLogin(formData: FormData) {
    'use server'
    // For development, we'll accept any credentials and redirect to onboarding
    // In a real app, you would validate credentials here
    
    // Simulate a delay to make it feel like an actual login
    await new Promise(resolve => setTimeout(resolve, 500));
    
    redirect('/onboarding');
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <div className="text-3xl font-bold tracking-tight mb-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient">CCO</span>
            </div>
          </Link>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">Sign in to your account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Or <Link href="/signup" className="text-purple-600 hover:text-purple-500">create a new account</Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue="john.doe@example.com" // Pre-fill for development
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                defaultValue="password" // Pre-fill for development
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-purple-600 hover:text-purple-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 font-medium text-lg animate-gradient transition-all"
            >
              Sign in
            </button>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Development note: Use any credentials to log in</p>
            <p className="mt-1">Default: john.doe@example.com / password</p>
          </div>
        </form>
      </div>
    </div>
  );
} 