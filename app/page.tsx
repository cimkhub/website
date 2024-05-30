import Link from 'next/link';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">Step 4</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
                Choose ready to use APIs from our Library
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Our library contains hundreds of data APPs, all of which are already set up and ready for you to use. Just search for the right one.
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
                    <CheckIcon className="h-5 w-5 fill-green-500" />
                    <span>10 API calls per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-5 w-5 fill-red-500" />
                    <span>Save API outputs in the cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-5 w-5 fill-red-500" />
                    <span>Set up new APIs</span>
                  </div>
                </div>
                <Link href="/signup">
                  <Button className="mt-6" variant="outline">
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Premium Users</h3>
                  <div className="text-4xl font-bold">$49</div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 fill-green-500" />
                    <span>Unlimited API calls per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-5 w-5 fill-red-500" />
                    <span>Save API outputs in the cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XIcon className="h-5 w-5 fill-red-500" />
                    <span>Set up new APIs</span>
                  </div>
                </div>
                <Link href="/signup">
                  <Button className="mt-6" variant="outline">
                    Get Started
                  </Button>
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
                <Button type="submit">Sign Up</Button>
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

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
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

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
