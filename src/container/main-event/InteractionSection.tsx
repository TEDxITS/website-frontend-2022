import React from 'react';
import { Reveal, Tween } from 'react-gsap';

import clsxm from '@/lib/clsxm';

import { INTERACTION_DATA } from '@/data/main_event';

import NextImage from '@/components/NextImage';

export default function InteractionSection() {
  const [active, setActive] = React.useState<number>(0);

  const updateActive = (id: number) => {
    setActive(id);
  };

  return (
    <>
      {/* Desktop Version */}
      <Reveal
        trigger={
          <div className='text-cdark hidden relative py-8 min-h-screen md:flex md:py-16' />
        }
      >
        <div className='layout flex z-10 flex-col gap-8 justify-between'>
          {/* header section */}

          <div className='pr-[calc(38%+2rem)] flex flex-col w-full'>
            <div className='flex gap-6 w-full'>
              <div className='max-w-[8rem]'>
                <p className='font-fivo text-[10px] leading-none select-none'>
                  Elephant in The Room
                </p>
              </div>
              <div className='max-w-[8rem]'>
                <p className='font-fivo text-[10px] leading-none select-none'>
                  The Unseen of Great Importance
                </p>
              </div>

              <h2 className='font-pilow text-cdark ml-auto 2xl:text-5xl'>
                0{active + 1}
              </h2>
            </div>
            <div className={clsxm('ease transition-all duration-300')}>
              <Tween
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                }}
                duration={1}
                stagger={0.5}
                ease='power2.out'
              >
                <div>
                  <h2 className='font-fivo text-cdark font-medium 2xl:text-5xl'>
                    {INTERACTION_DATA[active].name}
                  </h2>
                </div>
                <div>
                  <h4 className='font-fivo text-cdark 2xl:text-2xl'>
                    {INTERACTION_DATA[active].title}
                  </h4>
                </div>
              </Tween>
            </div>
          </div>

          {/* content section */}
          <div className='flex gap-4 justify-between'>
            <div className='flex relative justify-center w-full'>
              {/* Photo Section */}
              <div className='max-w-[60%] flex gap-4 w-full 2xl:max-w-[70%]'>
                <Tween
                  from={{
                    y: '50px',
                    opacity: 0,
                  }}
                  to={{
                    y: 0,
                    opacity: 1,
                  }}
                  duration={1}
                  stagger={1}
                  ease='power2.out'
                >
                  {INTERACTION_DATA[active].photo.map((photo, i) => (
                    <div key={i} className='w-full'>
                      <NextImage
                        width={730}
                        height={932}
                        src={photo}
                        alt='Images'
                        className={clsxm(
                          'relative w-full drop-shadow-lg',
                          'ease transition-all duration-300',
                          'hover:-translate-y-2',

                          [i === 1 && 'delay-100', i === 2 && 'delay-200']
                        )}
                        useSkeleton
                      />
                    </div>
                  ))}
                </Tween>
              </div>
              {/* Navigation Section */}
              <div className='absolute left-0 top-1/2 flex-shrink-0 -translate-y-1/2'>
                <div className='min-w-[2rem] flex relative flex-col gap-4 justify-center items-center'>
                  {[...Array(INTERACTION_DATA.length)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => updateActive(i)}
                      className={clsxm(
                        'overflow-hidden relative z-10 flex-shrink-0 rounded-full cursor-pointer',
                        'ease transition-all duration-150 ',
                        'inline-flex justify-center items-center',
                        active === i
                          ? 'bg-clight text-cdark  font-bold w-8 h-8 '
                          : 'hover:text-cred h-6 w-6 bg-clight  text-cdark border-0'
                      )}
                      style={{
                        filter:
                          active === i
                            ? 'drop-shadow(0 0 1px rgba(235,93,55)) drop-shadow(0 0 15px rgba(235,93,55,0.8)) drop-shadow(0 0 1px rgba(235,93,55,0.3))'
                            : 'none',
                      }}
                    >
                      <p className='mt-1 text-xs leading-none 2xl:text-sm'>
                        0{i + 1}
                      </p>
                      <div className='bg-paper absolute inset-0 bg-cover pointer-events-none'></div>
                    </button>
                  ))}
                  <div className='bg-cdark w-[1px] absolute inset-y-0 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
            </div>
          </div>
          {/* footer section */}
          <div className='w-full'>
            <div className='flex gap-6'>
              <div className='flex flex-col w-full'>
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656669327/merch/main-event/speaker-section/arrow-down_ex3weg.svg'
                  width={5}
                  height={5}
                  alt='arrow'
                  className='w-2'
                />
                <div className='flex gap-6 pb-2 mt-2'>
                  <Tween
                    from={{
                      y: '-50px',
                      opacity: 0,
                    }}
                    to={{
                      y: '0px',
                      opacity: 1,
                    }}
                    duration={1}
                    stagger={0.5}
                    ease='power2.out'
                  >
                    <div className='max-w-[12rem]'>
                      <p className='font-fivo text-[10px] leading-tight select-none 2xl:text-sm'>
                        {INTERACTION_DATA[active].title_1}
                      </p>
                    </div>
                    <div className='max-w-[12rem]'>
                      <p className='font-fivo text-[10px] leading-tight select-none 2xl:text-sm'>
                        {INTERACTION_DATA[active].title_2}
                      </p>
                    </div>
                  </Tween>
                </div>
              </div>
              <div className='w-[38%] flex flex-col flex-shrink-0 items-end drop-shadow-2xl'>
                <h3 className='drop-shadow-solid-sm font-fivo leading-none'>
                  The
                </h3>
                <h2 className='drop-shadow-solid-sm font-pilow text-4xl font-medium text-right'>
                  INTERACTION.
                </h2>
              </div>
            </div>

            <div className='flex gap-4 items-end w-full'>
              <p className='text-[10px] leading-none'>Listen.See.Speak</p>
              <div className='relative w-full'>
                <hr className='border-cdark w-full' />
                <hr className='w-[38%] absolute top-0 right-0' />
              </div>
            </div>
          </div>
        </div>
        {/* background section */}
        <div
          style={{
            backgroundImage: `url(${INTERACTION_DATA[active].backgroundImage})`,
          }}
          className={clsxm(
            'w-[40%] absolute inset-y-0 right-0 bg-cover',
            'ease transition-all duration-100'
          )}
        />
      </Reveal>
      {/* Mobile Version */}
      <Reveal
        trigger={
          <div className='text-cdark flex relative py-8 min-h-screen md:hidden' />
        }
      >
        <div className='layout flex z-10 flex-col gap-8 justify-between'>
          {/* header section */}
          <div className='flex gap-4 w-full'>
            <div className='flex-shrink-0 w-1/2'>
              <h3 className='font-fivo text-cdark leading-none'>The</h3>
              <h2 className='font-fivo text-cdark mt-2 text-4xl font-bold'>
                <span className='font-pilow'>I</span>NTERACTION.
              </h2>
            </div>

            <div className='flex gap-2 w-full'>
              <p className='font-fivo max-w-[8rem] text-[10px] leading-none select-none'>
                Elephant in The Room
              </p>
              <p className='font-fivo max-w-[8rem] text-[10px] leading-none select-none'>
                The Unseen of Great Importance
              </p>
            </div>
          </div>
          {/* content section */}
          <div className='flex relative flex-col gap-8 justify-center w-full'>
            {/* name section */}
            <div className='flex gap-4 w-full'>
              <h2 className='font-pilow text-cdark'>0{active + 1}</h2>

              <div className={clsxm('ease transition-all duration-300')}>
                <Tween
                  from={{
                    opacity: 0,
                  }}
                  to={{
                    opacity: 1,
                  }}
                  duration={1}
                  stagger={0.5}
                  ease='power2.out'
                >
                  <div>
                    <h3 className='font-fivo text-cdark font-medium'>
                      {INTERACTION_DATA[active].name}
                    </h3>
                  </div>
                  <div>
                    <p className='font-fivo text-sm'>
                      {INTERACTION_DATA[active].title}
                    </p>
                  </div>
                </Tween>
              </div>
            </div>
            {/* Photo Section */}
            <div className='hidden-scrollbar snap-x flex overflow-scroll gap-4 w-full max-w-full'>
              <Tween
                from={{
                  y: '20px',
                  opacity: 0,
                }}
                to={{
                  y: '0px',
                  opacity: 1,
                }}
                duration={1}
                stagger={0.5}
                ease='power2.out'
              >
                {INTERACTION_DATA[active].photo.map((photo, i) => (
                  <div key={i} className='min-w-[55%] w-full'>
                    <NextImage
                      width={730}
                      height={932}
                      src={photo}
                      alt='Images'
                      className={clsxm(
                        'min-w-[55%] relative w-full drop-shadow-lg',
                        'ease transition-all duration-300',
                        [i === 1 && 'delay-100', i === 2 && 'delay-200']
                      )}
                      useSkeleton
                    />
                  </div>
                ))}
              </Tween>
            </div>
            {/* description section */}
            <div className='flex flex-col w-full'>
              <NextImage
                src='https://res.cloudinary.com/tedxits/image/upload/v1656669327/merch/main-event/speaker-section/arrow-down_ex3weg.svg'
                width={5}
                height={5}
                alt='arrow'
                className='w-2'
              />
              <div className='flex gap-6 mt-2'>
                <p className='font-fivo text-[10px] w-full leading-tight select-none'>
                  {INTERACTION_DATA[active].title_1}.{' '}
                  {INTERACTION_DATA[active].title_2}
                </p>
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className='flex flex-col gap-4 w-full'>
            {/* Navigation Section */}
            <div className='min-h-[2rem] flex relative gap-3 justify-evenly items-center w-full'>
              {[...Array(INTERACTION_DATA.length)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => updateActive(i)}
                  className={clsxm(
                    'overflow-hidden relative z-10 flex-shrink-0 rounded-full cursor-pointer',
                    'ease transition-all duration-150 ',
                    'inline-flex justify-center items-center',
                    active === i
                      ? 'bg-clight text-cdark  font-bold w-8 h-8 '
                      : 'hover:text-cred h-6 w-6 bg-clight  text-cdark border-0'
                  )}
                  style={{
                    filter:
                      active === i
                        ? 'drop-shadow(0 0 1px rgba(235,93,55)) drop-shadow(0 0 15px rgba(235,93,55,0.8)) drop-shadow(0 0 1px rgba(235,93,55,0.3))'
                        : 'none',
                  }}
                >
                  <p className='mt-1 text-xs leading-none 2xl:text-sm'>
                    0{i + 1}
                  </p>
                  <div className='bg-paper absolute inset-0 bg-cover pointer-events-none'></div>
                </button>
              ))}
              <div className='bg-cdark h-[1px] absolute inset-x-0 top-1/2 w-full -translate-y-1/2'></div>
            </div>

            <div className='flex justify-end w-full'>
              <p className='text-[10px] leading-none'>Listen.See.Speak</p>
            </div>
          </div>
        </div>
        {/* background section */}
        <div
          className={clsxm(
            'w-[50%] absolute inset-y-0 right-0',
            'ease transition-all duration-100'
          )}
        >
          <div
            style={{
              backgroundImage: `url(${INTERACTION_DATA[active].backgroundImage})`,
            }}
            className='absolute inset-0 bg-fixed bg-center bg-cover'
          />
          <div className='bg-clight/60 absolute inset-0 backdrop-blur-sm'></div>
        </div>
      </Reveal>
    </>
  );
}
