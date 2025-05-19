'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

type TextProps = PropsWithChildren;

export default function Text({ children }: TextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], [0, 1, 1, 1]);

  return (
    <motion.span ref={ref} style={{ opacity: textOpacity }}>
      {children}
    </motion.span>
  );
}
