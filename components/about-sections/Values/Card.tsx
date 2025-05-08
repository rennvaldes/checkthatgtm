'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ComponentProps, useRef } from 'react';

type Props = ComponentProps<typeof motion.article>;

export default function Card({ children, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.7, 1], [0, 1, 1, 1]);

  return (
    <motion.article ref={ref} style={{ opacity: opacity }} {...props}>
      {children}
    </motion.article>
  );
}
