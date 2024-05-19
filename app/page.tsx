import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo.png" alt="APIarist Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <a className="text-sm font-medium text-black hover:underline" href="#features">Features</a>
            <a className="text-sm font-medium text-black hover:underline" href="#testimonials">Testimonials</a>
            <a className="text-sm font-medium text-black hover:underline" href="#pricing">Pricing</a>
            <a className="text-sm font-medium text-black hover:underline" href="#contact">Contact</a>
          </nav>
          <Link href="/signup">
            <Button>Try for Free</Button>
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
                  <Button>Try for Free</Button>
                </Link>
                <Button className="bg-gray-800 text-white border-none">Learn More</Button>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="relative mx-auto border border-black">
              <Image
                alt="Share API"
                className="max-h-full max-w-full object-contain"
                src="/placeholder2.png"
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Step 1</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">Share the API Documentation Link</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Provide the API documentation link, and APIarist will automatically fetch the API schema and parameters.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="testimonials">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Step 2</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
                Choose Parameters in the Intuitive Interface
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Select the parameters you need, and APIarist will generate the API request for you.
              </p>
            </div>
            <div className="relative mx-auto border border-black">
              <Image
                alt="Choose Parameters"
                className="max-h-full max-w-full object-contain"
                src="/placeholder3.png"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="pricing">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="relative mx-auto border border-black">
              <Image
                alt="Receive Data"
                className="max-h-full max-w-full object-contain"
                src="/placeholder4.png"
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Step 3</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">Receive Data in a Spreadsheet</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                APIarist will fetch the data from the API and deliver it to you in a spreadsheet, ready for analysis.
              </p>
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
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 text-black" placeholder="Enter your email" type="email" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
