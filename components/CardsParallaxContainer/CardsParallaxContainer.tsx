'use client';
import styles from './cardsParallaxContainer.module.scss';
import { projects } from '@/data';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'; 
import CardsParallax from '@/components/CardsParallax/CardsParallax';

export default function CardsParallaxContainer() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup to avoid performance issues
    };
  }, []);

  return (
    <main ref={container} className={styles.main}>
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <CardsParallax key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })
      }
    </main>
  );
}
