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
            <a className="text-sm font-medium text-black hover:underline" href="/">Home</a>
            <a className="text-sm font-medium text-black hover:underline" href="/#features-section">Features</a>
            <a className="text-sm font-medium text-black hover:underline" href="/#pricing-section">Pricing</a>
            <a className="text-sm font-medium text-black hover:underline" href="/#contact-section">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-[#f3f4f6]">
        {!submitted ? (
          <>
            <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
              <div className="container px-4 md:px-6 space-y-8 text-center">
                <div className="mx-auto max-w-md space-y-4">
                  <div id="mc_embed_shell">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                    <style type="text/css">
                      {`
                      #mc_embed_signup {
                        background: #fff;
                        clear: left;
                        font: 14px Helvetica, Arial, sans-serif;
                        width: 800px;
                        padding: 20px;
                      }
                      #mc_embed_signup h2 {
                        margin-top: 20px;
                      }
                      #mc-embedded-subscribe {
                        background-color: #0073e6;
                        color: white;
                      }
                      `}
                    </style>
                    <div id="mc_embed_signup">
                      <form action="https://cimk.us1.list-manage.com/subscribe/post?u=59238c959adf4c9271a216a49&amp;id=db1377afed&amp;f_id=0039f8e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                          <h2 style={{ margin: '20px 0' }}>Sign Up for APIarist</h2>
                          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                          <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value="" /></div>
                          <div className="mc-field-group"><label htmlFor="mce-FNAME">First Name </label><input type="text" name="FNAME" className="text" id="mce-FNAME" value="" /></div>
                          <div className="mc-field-group"><label htmlFor="mce-LNAME">Last Name </label><input type="text" name="LNAME" className="text" id="mce-LNAME" value="" /></div>
                          <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                          </div>
                          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text" name="b_59238c959adf4c9271a216a49_db1377afed" tabIndex="-1" value="" />
                          </div>
                          <div className="optionalParent">
                            <div className="clear foot">
                              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Sign Up" style={{ backgroundColor: '#3b82f6', color: 'white' }} />
                              <p style={{ margin: '0px auto' }}>
                                <a href="http://eepurl.com/iQYWWA" title="Mailchimp - email marketing made easy and fun">
                                  <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                                    <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} />
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                    <script type="text/javascript">
                      {`
                      (function($) {
                        window.fnames = new Array();
                        window.ftypes = new Array();
                        fnames[0]='EMAIL';
                        ftypes[0]='email';
                        fnames[1]='FNAME';
                        ftypes[1]='text';
                        fnames[2]='LNAME';
                        ftypes[2]='text';
                        fnames[3]='ADDRESS';
                        ftypes[3]='address';
                        fnames[4]='PHONE';
                        ftypes[4]='phone';
                        fnames[5]='BIRTHDAY';
                        ftypes[5]='birthday';
                      }(jQuery));
                      var $mcj = jQuery.noConflict(true);
                      `}
                    </script>
                  </div>
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
      <footer className="bg-white p-6 md:py-12 w-full text-black text-center">
        © APIarist 2024
      </footer>
    </div>
  );
}
