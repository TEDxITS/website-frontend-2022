import * as React from 'react';

export default function LoaderIllustration({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 55 20'
      xmlSpace='preserve'
      {...rest}
    >
      <circle fill='#212121' cx={6} cy={10} r={6}>
        <animate
          attributeName='opacity'
          dur='1s'
          values='0;1;0'
          repeatCount='indefinite'
          begin={0.1}
        />
      </circle>
      <circle fill='#212121' cx={26} cy={10} r={6}>
        <animate
          attributeName='opacity'
          dur='1s'
          values='0;1;0'
          repeatCount='indefinite'
          begin={0.2}
        />
      </circle>
      <circle fill='#212121' cx={46} cy={10} r={6}>
        <animate
          attributeName='opacity'
          dur='1s'
          values='0;1;0'
          repeatCount='indefinite'
          begin={0.3}
        />
      </circle>
    </svg>
  );
}
