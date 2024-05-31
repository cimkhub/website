import Link from 'next/link';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, className, children, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  step: number;
  image: string;
}

const FeatureSection: React.FC<FeatureProps> = ({ title, description, step, image }) => {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${step % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className={`relative mx-auto border border-black ${step % 2 === 0 ? 'order-last lg:order-first' : ''}`}>
          <Image
            alt={title}
            className="max-h-full max-w-full object-contain"
            src={image}
            width={500}
            height={500}
          />
        </div>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Step {step}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo.png" alt="APIarist Logo" width={100} height={40} />
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <a className="text-sm font-medium text-black hover:underline" href="#features">Features</a>
            <a className="text-sm font-medium text-black hover:underline" href="#pricing">Pricing</a>
            <a className="text-sm font-medium text-black hover:underline" href="#contact">Contact</a>
          </nav>
          <Link href="/signup">
            <CustomButton>Try for Free</CustomButton>
          </Link>
        </div>
      </header>
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Harness the Power of APIs</h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                APIarist empowers everyone to easily access and integrate data from any API. No coding required.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/signup">
                  <CustomButton>Try for Free</CustomButton>
                </Link>
                <CustomButton className="bg-gray-800 text-white border-none">Learn More</CustomButton>
              </div>
            </div>
            <Image
              alt="APIarist"
              className="mx-auto w-full aspect-square overflow-hidden rounded-xl object-cover"
              height={500}
              src="/placeholder1.png"
              width={500}
            />
          </div>
        </section>
        <FeatureSection
          title="Share the API Documentation Link"
          description="Provide the API documentation link, and APIarist will automatically fetch the API schema and parameters."
          step={1}
          image="/placeholder2.png"
        />
        <FeatureSection
          title="Choose Parameters in the Intuitive Interface"
          description="Select the parameters you need, and APIarist will generate the API request for you."
          step={2}
          image="/placeholder3.png"
        />
        <FeatureSection
          title="Receive Data in a Spreadsheet"
          description="APIarist will fetch the data from the API and deliver it to you in a spreadsheet, ready for analysis."
          step={3}
          image="/placeholder4.png"
        />
        <FeatureSection
          title="Choose ready to use APIs from our Library"
          description="Our library contains hundreds of data APPs, all of which are already set up and ready for you to use. Just search for the right one."
          step={4}
          image="/placeholder3.png"
        />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="pricing">
          <div className="container mx-auto text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that fits your needs.
              </p>
            </div>
            <div className="mt-8 mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              <div className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="text-4xl font-bold">$0</div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span>10 API calls per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Save API outputs in the cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Set up new APIs</span>
                  </div>
                </div>
                <Link href="/signup">
                  <CustomButton className="mt-6" variant="outline">
                    Get Started
                  </CustomButton>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Premium Users</h3>
                  <div className="text-4xl font-bold">$49</div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span>Unlimited API calls per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Save API outputs in the cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Set up new APIs</span>
                  </div>
                </div>
                <Link href="/signup">
                  <CustomButton className="mt-6" variant="outline">
                    Get Started
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="contact">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
                Ready to Streamline Your API Integration?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Sign up for a free trial and experience the power of APIarist today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/signup">
                <CustomButton type="submit">Sign Up</CustomButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black p-6 md:py-12 w-full text-white text-center">
        © APIarist 2024
      </footer>
    </>
  );
}
