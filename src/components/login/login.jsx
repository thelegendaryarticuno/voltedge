import { useState } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import { Mail, User, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [signupStep, setSignupStep] = useState('details') // details, otp
  const [showDuplicateDialog, setShowDuplicateDialog] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: ''
  })
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
    setSignupStep('details')
  }
  const togglePassword = () => setShowPassword(!showPassword)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://voltedge-backend.onrender.com/auth/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      })
      const data = await response.json()
      
      if (data.error === "User not found") {
        setErrorMessage("You aren't registered or maybe check your email")
        setShowErrorDialog(true)
      } else if (data.error === "Invalid password") {
        setErrorMessage("Incorrect password please type again")
        setShowErrorDialog(true)
      } else if (data.message === "User logged in successfully") {
        navigate(`/dashboard/${data.userId}`)
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://voltedge-backend.onrender.com/auth/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      })
      
      if (response.ok) {
        setSignupStep('otp')
      }
    } catch (error) {
      console.error('Error creating account:', error)
    }
  }

  const handleSendOTP = async () => {
    try {
      await fetch('https://voltedge-backend.onrender.com/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email
        })
      })
    } catch (error) {
      console.error('Error sending OTP:', error)
    }
  }
  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://voltedge-backend.onrender.com/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp
        })
      })
      const data = await response.json()
      
      if (response.ok) {
        navigate(`/dashboard/${data.userId}`)
      } else if (data.error === "Duplicate email") {
        setShowDuplicateDialog(true)
      }
    } catch (error) {
      console.error('Error verifying OTP:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <Dialog
        open={showDuplicateDialog}
        onClose={() => setShowDuplicateDialog(false)}
      >
        <DialogContent>
          <DialogContentText>
            You are already registered. Click here to login.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate('/')} color="primary">
            Click Here
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
      >
        <DialogContent>
          <DialogContentText>
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowErrorDialog(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Card className="w-full max-w-[800px] h-[500px] flex overflow-hidden relative bg-white dark:bg-gray-800">
        <div className={`w-1/2 p-8 transition-all duration-700 ease-in-out flex items-center ${isSignUp ? 'translate-x-full' : ''}`}>
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              {isSignUp ? (signupStep === 'details' ? 'Create Account' : 'Verify OTP') : 'Sign in'}
            </h1>
            {isSignUp ? (
              signupStep === 'details' ? (
                <form className="space-y-4" onSubmit={handleCreateAccount}>
                  <div className="relative">
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name" 
                      className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                    <User className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="relative">
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                    <Mail className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
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
                  <Button 
                    type="submit"
                    variant="contained"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
                  >
                    Create Account
                  </Button>
                </form>
              ) : (
                <form className="space-y-4" onSubmit={handleVerifyOTP}>
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                    Verify your email: {formData.email}
                  </p>
                  <div className="relative">
                    <Input 
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleInputChange}
                      placeholder="Enter OTP"
                      className="w-full pl-3 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                  </div>
                  <Button 
                    type="button"
                    variant="outlined"
                    onClick={handleSendOTP}
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mb-2"
                  >
                    Send OTP
                  </Button>
                  <Button 
                    type="submit"
                    variant="contained"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
                  >
                    Verify OTP
                  </Button>
                </form>
              )
            ) : (
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="relative">
                  <Input 
                    type="email" 
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginInputChange}
                    placeholder="Email"
                    className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                  <Mail className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginInputChange}
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
                <a href="#" className="block text-right text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot your password?
                </a>
                <Button 
                  type="submit"
                  variant="contained"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
                >
                  Sign In
                </Button>
              </form>
            )}
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