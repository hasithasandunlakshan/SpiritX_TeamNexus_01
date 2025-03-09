import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to SecureConnect</CardTitle>
          <CardDescription>
            A secure and user-friendly authentication system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/login">
            <Button className="w-full" variant="default">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="w-full" variant="outline">
              Sign Up
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}