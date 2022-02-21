/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CoverSection from '@/container/home/CoverSection';
import MissionSection from '@/container/home/MissionSection';
import RegisterSection from '@/container/home/RegisterSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-cgray flex flex-col'>
        <section className='bg-blob-1 bg-cdark text-clight relative z-20 pt-8 h-full bg-bottom bg-no-repeat bg-cover md:pt-16'>
          <Header />
          <CoverSection />
          <NextImage
            priority={true}
            src='/images/background/bg-bottom-1.png'
            width={1276}
            height={178}
            alt='bottom'
            className='translate-y-[98%] absolute bottom-0 w-full drop-shadow-md'
          />
        </section>
        <section className={clsxm('flex relative z-10 flex-col')}>
          <MissionSection />
        </section>
        <section className='bg-blob-green flex overflow-hidden relative flex-col justify-center items-center pt-80 pb-32 bg-bottom bg-no-repeat bg-cover'>
          <RegisterSection />
        </section>
      </main>
    </Layout>
  );
}
