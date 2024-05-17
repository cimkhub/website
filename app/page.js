// app/page.js
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-gray-950/90">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
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
        <!-- Hier können Sie den restlichen Content der Startseite einfügen -->
      </main>
    </>
  );
}
