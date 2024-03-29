/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { big_sponsor_logo, small_sponsor_logo } from '@/data/sponsor';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Logo from '@/components/tabs/Logo';

export default function SponsorPage() {
  return (
    <Layout className='bg-[#EAEAE2]'>
      <Seo templateTitle='Our Sponsor' />

      <main className='bg-paper bg-no-repeat bg-cover'>
        <section className='flex relative z-10 flex-col gap-8 pt-8 md:pt-16'>
          <Header isDark={true} />

          <div className='layout min-h-[calc(100vh-64px-64px)] text-cdark flex z-30 flex-col gap-16 justify-center items-center py-8 md:py-20 lg:min-h-[calc(100vh-64px-96px)]'>
            <div className='flex flex-col justify-between items-start w-full md:flex-row'>
              <div className='flex relative flex-col'>
                <h1 className='font-sympath origin-bottomn text-cred font-normal -rotate-3'>
                  here are
                </h1>
                <h1 className='text-cdark font-bold'>Our</h1>
                <h1 className='text-cdark font-bold'>Sponsors</h1>
              </div>
              <div className='max-w-sm'>
                <p className='w-full text-justify'>
                  Thankyou, it&apos;s been a roller coaster journey to host 3
                  Pre-Events and a Main Event in ± 4 months
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-y-8 justify-center items-center w-4/5 md:gap-y-2'>
              <div className='grid gap-x-4 gap-y-8 place-items-center md:grid-cols-2'>
                {big_sponsor_logo.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt='logo sponsor'
                    className={clsxm(i == 1 && 'w-1/3')}
                  />
                ))}
              </div>
              <div className='grid grid-cols-3 gap-x-8 place-items-center md:grid-cols-5'>
                {small_sponsor_logo.map((image, i) => (
                  <img key={i} src={image} alt='logo sponsor' />
                ))}
              </div>
            </div>

            <div className='flex justify-between items-start w-full'>
              <Logo isDark className='w-20' />
              <p className='text-cdark text-sm'>@2022</p>
            </div>
          </div>
          <div className='overflow-hidden absolute inset-0 pointer-events-none'>
            <NextImage
              src='/images/forgot-password/float.png'
              width={365}
              height={402}
              alt='float'
              className='absolute right-0 bottom-0 w-full translate-x-1/4 translate-y-1/4 md:w-1/2'
            />
            <NextImage
              src='/images/forgot-password/float.png'
              width={365}
              height={402}
              alt='float'
              className='absolute top-0 left-0 w-full -translate-x-1/3 -translate-y-1/4 md:w-1/2 md:-translate-x-1/2'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
