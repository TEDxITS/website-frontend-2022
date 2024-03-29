import * as React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import DynamicCarousel from '@/container/about/DynamicCarousel';
import PastEventsSection from '@/container/about/PastEventsSection';
import TextSection from '@/container/about/TextSection';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main className='bg-[length:100vw_40rem] bg-blob-2 bg-cdark text-clight pt-8 bg-top bg-no-repeat md:pt-16'>
        <Header />
        <section className='flex relative flex-col'>
          <TextSection />

          <div className='grid my-16'>
            <DynamicCarousel className='min-h-[50vh] overflow-x-hidden overflow-y-visible z-10 h-full' />
          </div>
          <ArrowDownButton
            className='absolute bottom-0 left-1/2 z-20 -translate-x-1/2'
            href={'#events'}
          />
          <NextImage
            src='/images/background/bg-bottom-2.png'
            width={1276}
            height={234}
            alt='bottom'
            priority={true}
            className='translate-y-[99%] absolute bottom-0 z-10 w-full'
          />
        </section>
        <section
          className='bg-cgray text-cdark overflow-hidden relative pb-32 bg-top bg-no-repeat'
          id='events'
        >
          <PastEventsSection />
        </section>
      </main>
    </Layout>
  );
}
