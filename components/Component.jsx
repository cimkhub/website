// components/Component.jsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CardContent, Card, CardTitle, CardDescription, CardHeader, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export default function Component() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <img src="/logo.png" alt="APIarist Logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <a className="text-sm font-medium text-black hover:underline" href="#features">Features</a>
            <a className="text-sm font-medium text-black hover:underline" href="#testimonials">Testimonials</a>
            <a className="text-sm font-medium text-black hover:underline" href="#pricing">Pricing</a>
            <a className="text-sm font-medium text-black hover:underline" href="#contact">Contact</a>
          </nav>
          <Button>Try for Free</Button>
        </div>
      </header>
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Harness the Power of APIs</h1>
              <p className="text-gray-500 md:text-xl">
                APIarist empowers everyone to easily access and integrate data from any API. No coding required.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button>Try for Free</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <img
              alt="APIarist"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              height="500"
              src="/placeholder1.png"
              width="500"
            />
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="bg-white p-4 rounded-xl">
              <img
                alt="Share API"
                className="mx-auto overflow-hidden rounded-xl object-contain w-full h-full"
                src="/placeholder2.png"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-black">Step 1</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">Share the API Documentation Link</h2>
              <p className="text-gray-500 md:text-xl">
                Provide the API documentation link, and APIarist will automatically fetch the API schema and parameters.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-black">Step 2</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
                Choose Parameters in the Intuitive Interface
              </h2>
              <p className="text-gray-500 md:text-xl">
                Select the parameters you need, and APIarist will generate the API request for you.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <img
                alt="Choose Parameters"
                className="mx-auto overflow-hidden rounded-xl object-contain w-full h-full"
                src="/placeholder3.png"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="bg-white p-4 rounded-xl">
              <img
                alt="Receive Data"
                className="mx-auto overflow-hidden rounded-xl object-contain w-full h-full"
                src="/placeholder4.png"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-black">Step 3</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">Receive Data in a Spreadsheet</h2>
              <p className="text-gray-500 md:text-xl">
                APIarist will fetch the data from the API and deliver it to you in a spreadsheet, ready for analysis.
              </p>
            </div>
          </div>
        </section>
        <section id="contact-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto text-center px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="text-gray-500 md:text-xl">
                For more information or partnership inquiries, please reach out to our co-founders:
              </p>
              <p className="text-gray-500 md:text-xl">
                Lukas Tatge: <a href="mailto:lukas.tatge@long-ai.com" className="text-blue-500">lukas.tatge@long-ai.com</a>
              </p>
              <p className="text-gray-500 md:text-xl">
                Eilyahu Kainyah Yalley: <a href="mailto:eliyahu.yalley@long-ai.com" className="text-blue-500">eliyahu.yalley@long-ai.com</a>
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
                Ready to Streamline Your API Integration?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Sign up for a free trial and experience the power of APIarist today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Get Started</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
