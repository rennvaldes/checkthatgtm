'use client';

import KitButton from '@/components/ui/KitButton';
import { cn } from '@/lib/litebox-lib/utils/cn';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TitleAndButtons() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The Default form handler will take care of the submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Static Title */}
      <h1 className='font-clash-display mx-auto max-w-[90%] text-center text-[36px] font-medium leading-[40px] lg:text-[70px] lg:leading-[77px]'>
        Expert-Led, AI&#8209;Powered&nbsp;
        <span className='font-kepler-std text-ui-blue text-[42px] italic lg:text-[80px]'>Growth</span>
      </h1>

      {/* Static Subtitle */}
      <h2 className='font-elza mx-auto mt-[8px] max-w-[90%] text-center text-[16px] font-normal leading-[24px] text-[#5F5D78] lg:mt-[4px] lg:mb-[10px] lg:text-[20px] lg:leading-[26px] lg:text-[#20233A]'>
        We build growth engines that blend AI workflows with experts. From content to distribution to conversion.
      </h2>

      {/* Email Form */}
      <div className='relative z-50 mt-[20px] flex w-full flex-col items-center justify-center px-4 lg:mt-[30px]'>
        <form 
          onSubmit={handleSubmit}
          data-default-form-id="828228"
          className="relative w-full max-w-[500px]"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="What's your work email?"
            className="w-full h-[52px] lg:h-[64px] rounded-full border border-[#E5E7F0] bg-white pl-8 pr-8 lg:pr-[200px] font-elza text-[16px] text-ui-black outline-none placeholder:text-[#5F5D78] shadow-sm text-center lg:text-left"
            required
          />
          <div className="mt-2 lg:mt-0 lg:absolute lg:right-3 lg:top-1/2 lg:-translate-y-1/2">
            <KitButton
              type="submit"
              size="large"
              variant="primary"
              className="w-full lg:w-auto h-[52px] !px-8 flex justify-center items-center text-center"
              withAnimatedArrow="to-right"
            >
              Work with us
            </KitButton>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default TitleAndButtons;
