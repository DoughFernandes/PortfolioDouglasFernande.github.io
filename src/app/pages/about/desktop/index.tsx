'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';

export default function AboutDesktop() {
  const { profile } = useProfile();

  return (
    <>
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <h1>Desktop Sobre Mim</h1>
      </motion.main>
    </>
  );
}