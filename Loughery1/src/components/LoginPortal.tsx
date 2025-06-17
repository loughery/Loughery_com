import React, { useState } from 'react';
import { Building2, ChevronLeft, Mail, Lock, LogIn, CheckCircle } from 'lucide-react';

interface Environment {
  id: string;
  name: string;
  domain: string;
  description: string;
  color: string;
}

const environments: Environment[] = [
  {
    id: 'prod',
    name: 'Production Environment',
    domain: 'lougheryg-prod.onmicrosoft.com',
    description: 'Main business operations and daily workflows',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'dev',
    name: 'Development Environment',
    domain: 'lougheryg-dev.onmicrosoft.com',
    description: 'Testing and development workspace',
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'staging',
    name: 'Staging Environment',
    domain: 'lougheryg-staging.onmicrosoft.com',
    description: 'Pre-production testing and validation',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'partners',
    name: 'Partners Environment',
    domain: 'lougheryg-partners.onmicrosoft.com',
    description: 'External partner collaboration space',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function LoginPortal() {
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
    
    // Reset after success animation
    setTimeout(() => {
      setIsSuccess(false);
      // In real implementation, redirect to M365 or handle authentication
      console.log(`Logging into ${selectedEnvironment?.name} with email: ${email}`);
    }, 2000);
  };

  const resetFlow = () => {
    setSelectedEnvironment(null);
    setEmail('');
    setPassword('');
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="animate-bounce mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
          <p className="text-gray-600 mb-4">
            Redirecting you to {selectedEnvironment?.name}...
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-full">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">georges.app</h1>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Loughery.com</h1>
          <p className="text-xl text-gray-600">Microsoft 365 Business Portal</p>
        </div>

        {!selectedEnvironment ? (
          /* Environment Selection */
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Environment</h2>
              <p className="text-gray-600">Choose the Microsoft 365 environment you'd like to access</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {environments.map((env) => (
                <div
                  key={env.id}
                  onClick={() => setSelectedEnvironment(env)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    <div className={`w-full h-2 bg-gradient-to-r ${env.color} rounded-full mb-4`}></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {env.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{env.domain}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{env.description}</p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Sign in to this environment</span>
                      <LogIn className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <div className="flex items-center mb-6">
              <button
                onClick={resetFlow}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-3"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{selectedEnvironment.name}</h2>
                <p className="text-sm text-gray-600">{selectedEnvironment.domain}</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="Enter your email address"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : `bg-gradient-to-r ${selectedEnvironment.color} hover:shadow-lg transform hover:scale-105`
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign In to Microsoft 365
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Having trouble signing in?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>© 2025 Loughery.com - Secure Microsoft 365 Business Portal</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPortal