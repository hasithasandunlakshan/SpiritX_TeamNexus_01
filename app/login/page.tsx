'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
type FormData = {
  username: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const result = await signIn('credentials', {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      toast.success('Logged in successfully!');
      router.push('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Login Form */}
    
      <div className="min-h-screen bg-background flex items-center w-[50%] justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Login to your SecureConnect account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Username"
                {...register('username', {
                  required: 'Username is required',
                })}
                className="w-full"
              />
              {errors.username && (
                <p className="text-sm text-destructive">{errors.username.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
  
      </div>

      {/* Right side - Illustration */}
      <div className="hidden md:block md:w-1/2 bg-pink-100 p-8">
        <div className="h-full flex items-center justify-center relative">
          <div className="max-w-md text-center">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-600 mb-4">
            SpritX
            </h2>
            
            {/* Product card example */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 mx-auto max-w-xs">
              <div className="w-24 h-24 mx-auto mb-3 bg-blue-200 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-300 rounded-full"></div>
              </div>
              <h3 className="font-bold mb-2">Empowering University Sports in Sri Lanka</h3>
              <p className="text-sm text-gray-600 mb-3">MoraSpirit, the leading light of university sports is in its way to create a full of pride, highly passionate sporting culture at university level in Sri Lanka.</p>
             
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-200 rounded-full opacity-50"></div>
            <div className="absolute right-0 top-1/4 w-48 h-48 bg-pink-300 rounded-full opacity-50"></div>
            
            {/* Dot indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              <span className="w-2 h-2 rounded-full bg-pink-300"></span>
              <span className="w-2 h-2 rounded-full bg-pink-300"></span>
              <span className="w-2 h-2 rounded-full bg-pink-300"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}