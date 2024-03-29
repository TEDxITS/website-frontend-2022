import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';

//#region  //*=========== Type ===========
export type LinkType = {
  href: string;
  label: React.ReactNode;
};

type SoialMediaLinkType = LinkType & {
  logo: React.ReactNode;
};
//#endregion  //*======== Type ===========

//#region  //*=========== Link Data ===========
export const pageLinks: LinkType[] = [{ href: '/', label: 'Home' }];

export const eventLinks: LinkType[] = [
  { href: '/main-event', label: 'Main Event' },
  { href: '/pre-events', label: 'Pre Events' },
  { href: '/black-elephant-mail', label: 'Black Elephant Mail' },
  { href: '/call-for-local-speaker', label: 'Call for Local Speakers' },
];

export const aboutLinks: LinkType[] = [
  {
    href: '/about',
    label: 'TEDxITS Journey',
  },
  {
    href: '/grand-theme',
    label: 'Grand Theme',
  },
  {
    href: '/meet-the-team',
    label: 'Meet The Team',
  },
  { href: '/sponsor', label: 'Sponsorships' },
];

export const merchLinks: LinkType[] = [
  {
    href: '/merch',
    label: 'Merch 2.0',
  },
  {
    href: '/merch-1.0',
    label: 'Merch 1.0',
  },
  {
    href: '/ticket',
    label: 'Ticket',
  },
  {
    href: '/faq',
    label: 'FAQ',
  },
];

export const socialMediaLinks: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='h-8 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='h-8 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='h-8 md:h-7 hover:cursor-pointer'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
];

export const socialMediaLinksDark: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='h-8 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='h-8 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='h-8 md:h-7 hover:cursor-pointer'
        pathClassName='fill-cdark duration-150 transition-all'
      />
    ),
  },
];
//#endregion  //*======== Link Data ===========
