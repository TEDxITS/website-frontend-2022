import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';

//#region  //*=========== Type ===========
type LinkType = {
  href: string;
  label: string;
};

type SoialMediaLinkType = LinkType & {
  logo: React.ReactNode;
};
//#endregion  //*======== Type ===========

//#region  //*=========== Link Data ===========
export const pageLinks: LinkType[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/committee', label: 'Be Part of Us!' },
];

export const socialMediaLinks: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='/ h-10 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
];
//#endregion  //*======== Link Data ===========
