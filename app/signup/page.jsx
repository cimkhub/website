"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Button from '@/components/ui/button';
import Image from 'next/image';

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('/');
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo.png" alt="APIarist Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <a className="text-sm font-medium text-black hover:underline" href="/#features">Features</a>
            <a className="text-sm font-medium text-black hover:underline" href="/#testimonials">Testimonials</a>
            <a className="text-sm font-medium text-black hover:underline" href="/#pricing">Pricing</a>
            <a className="text-sm font-medium text-black hover:underline" href="/#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {!submitted ? (
          <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center">
              <div className="container px-4 md:px-6 space-y-8 text-center">
                <div className="mx-auto max-w-md space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-black">Sign Up</h1>
                    <p className="text-gray-500">Enter your information to create an account</p>
                  </div>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required className="text-black" />
                    </div>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="m@example.com" required type="email" className="text-black" />
                    </div>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" required type="password" className="text-black" />
                    </div>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input id="company" placeholder="Acme Inc" className="text-black" />
                    </div>
                    <div className="space-y-2 text-left">
                      <Label htmlFor="title">Title (optional)</Label>
                      <Input id="title" placeholder="Software Engineer" className="text-black" />
                    </div>
                    <Button className="w-full" type="submit">
                      Sign Up
                    </Button>
                  </form>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full space-y-4 text-center shadow-lg">
              <h2 className="text-2xl font-bold">Thank You!</h2>
              <p className="text-gray-500">We&apos;ve received your sign up request. We&apos;ll be in touch soon.</p>
              <Button onClick={() => router.push('/')}>Close</Button>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-black p-6 md:py-12 w-full text-white text-center">
        © APIarist 2024
      </footer>
    </div>
  );
}
