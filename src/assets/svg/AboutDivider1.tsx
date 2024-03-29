import React from 'react';

export default function AboutDivider1({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1619.01 64.59'
      {...rest}
    >
      <path
        fill='none'
        stroke='#212121'
        strokeWidth='1'
        strokeDasharray='1600'
        className='animate-[draw_50s_linear_infinite]'
        d='M-502.13 409.65c38.23-31.48 90.24-37.22 137.91-31.29 55.76 6.93 108.45 28.4 163.88 37.13A428.51 428.51 0 0 0-39 410.12C15 397.84 66.55 375.66 122.33 372c103.07-6.89 200.67 36 300.31 54.7 50.08 9.38 99.85 11.08 150.23 2.93 55.36-8.95 109.23-25.78 165-32.39 112.59-13.33 223.93 18.21 336.36 18.08q20.67 0 41.3-1.61c.63 0 .64-1 0-1-113.86 8.8-225.86-23.53-339.61-19.37-55.21 2-108.32 15.91-162.06 27.43-28.26 6.06-56.81 11.26-85.71 13-26.47 1.59-53 0-79.24-3.73-100.78-14.21-196.57-58-299.25-59.73-54.16-.9-104.06 15.3-155.5 30.1-55.5 16-112.45 22.92-170.1 17.21-57.06-5.62-110.67-26.35-166.77-36.86-43.91-8.23-91.76-9-132.89 10.7A134.17 134.17 0 0 0-502.84 409c-.49.41.22 1.11.71.7Z'
        transform='translate(503.01 -370.26)'
      />
    </svg>
  );
}
