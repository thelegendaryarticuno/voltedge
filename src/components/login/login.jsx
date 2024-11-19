import { useState } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import { Mail, User, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const toggleForm = () => setIsSignUp(!isSignUp)
  const togglePassword = () => setShowPassword(!showPassword)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-[800px] h-[500px] flex overflow-hidden relative bg-white dark:bg-gray-800">
        <div className={`w-1/2 p-8 transition-all duration-700 ease-in-out flex items-center ${isSignUp ? 'translate-x-full' : ''}`}>
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">{isSignUp ? 'Create Account' : 'Sign in'}</h1>
            <form className="space-y-4">
              {isSignUp && (
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                  <User className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                </div>
              )}
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <Mail className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <Lock className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <button 
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
                >
                  {showPassword ? 
                    <EyeOff className="w-5 h-5" /> : 
                    <Eye className="w-5 h-5" />
                  }
                </button>
              </div>
              {!isSignUp && (
                <a href="#" className="block text-right text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot your password?
                </a>
              )}
              <Button 
                variant="contained"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </form>
          </div>
        </div>
        <div className={`w-1/2 bg-gradient-to-r from-[#141E30] to-[#243B55] dark:from-[#1a1a1a] dark:to-[#2d2d2d] text-white p-8 absolute right-0 top-0 h-full transition-transform duration-700 ease-in-out ${isSignUp ? '-translate-x-full' : ''}`}>
          <div className="h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-bold mb-4">{isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
            <p className="mb-8 text-gray-200 dark:text-gray-300">
              {isSignUp
                ? 'To keep connected with us please login with your personal info'
                : 'Enter your personal details and start journey with us'}
            </p>
            <Button 
              variant="outlined"
              className="border-2 border-white dark:border-gray-300 text-white hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={toggleForm}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}