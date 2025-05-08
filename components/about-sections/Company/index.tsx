'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

const TEXTS = [
  {
    text: 'At GrowthX, we believe the future isn’t just building better tools—it’s treating services like software.',
    inputRange: [0.1, 0.2],
  },
  {
    text: ' We structure knowledge work as living code: versioned, observed, and continuously improved through AI-driven workflows with expert refinement at the core.',
    inputRange: [0.2, 0.3],
  },
  {
    text: '\n',
    inputRange: [0, 1],
  },
  {
    text: '\n',
    inputRange: [0, 1],
  },
  {
    text: 'Our services aren’t static deliverables—they are dynamic, scalable workflows that learn, adapt, and compound value over time.',
    inputRange: [0.3, 0.4],
  },
  {
    text: ' We aren’t here to sell hours or software licenses.',
    inputRange: [0.4, 0.5],
  },
  {
    text: ' We build engines for growth that operate like the best software platforms: fast, flexible, and relentlessly outcome-focused.',
    inputRange: [0.5, 0.6],
  },
];

type TextProps = PropsWithChildren<{
  inputRange: number[];
  scrollYProgress: MotionValue<number>;
}>;

const Text = ({ inputRange, scrollYProgress, children }: TextProps) => {
  const textOpacity = useTransform(scrollYProgress, inputRange, [0, 1]);

  return <motion.span style={{ opacity: textOpacity }}>{children}</motion.span>;
};

export default function Company() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section className='px-[22px] py-20 lg:py-[120px] lg:pl-[240px] lg:pr-[178px]'>
      <p className='whitespace-pre-line text-[20px] lg:text-[32px] font-[500] font-clash-display lg:font-elza leading-[114%] lg:leading-[150%] text-center max-w-[1022px]'>
        {TEXTS.map(({ text, inputRange }, index) => (
          <Text key={`line-${index.toString()}`} inputRange={inputRange} scrollYProgress={scrollYProgress}>
            {text}
          </Text>
        ))}
      </p>
    </section>
  );
}
