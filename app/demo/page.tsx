'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';
import styles from './page.module.css';

export default function DemoPage() {
  return (
    <main className='relative flex min-h-screen flex-col items-center'>
      <div className='w-full min-h-screen flex flex-col lg:flex-row'>
        {/* Form Section */}
        <div className='w-full lg:w-[45%] bg-[#F8F7FF] flex flex-col items-center justify-center p-8 lg:p-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[480px]"
          >
            <h1 className='text-[28px] font-medium leading-[34px] mb-8 text-[#20233A]'>
              Speak to a strategist
            </h1>

            <div id="form-container" className={styles.formContainer}></div>

            <Script id="default-form-init" strategy="afterInteractive">
              {`
                DefaultSDK.insertForm({
                  formId: "639407",
                  teamId: "432",
                  container: "#form-container",
                  submitText: "Submit",
                  onSuccess: (response) => {
                    console.log("Form submitted successfully:", response);
                  },
                  onError: (error) => {
                    console.error("Form submission failed:", error);
                  }
                });
              `}
            </Script>
          </motion.div>
        </div>

        {/* Media Section */}
        <div className='w-full lg:w-[55%] bg-[#21233B] flex flex-col items-center justify-center p-8 lg:p-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[640px]"
          >
            <div className="mb-4">
              <Image
                src="/ramp-logo.svg"
                alt="Ramp Logo"
                width={140}
                height={32}
              />
            </div>
            <div className="text-white">
              <p className="text-[18px] leading-[27px] mb-4">
                "We've tried other partners, but GrowthX blew us away. Insanely responsive and fast, they deliver top-notch quality every time. Finally found a team that actually gets it."
              </p>
              <div className="flex items-center">
                <Image
                  src="/luke-profile.webp"
                  alt="Luke Tubinis"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-[20px] font-semibold">Luke Tubinis</p>
                  <p className="text-[14px] text-white/80">Director of Growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 