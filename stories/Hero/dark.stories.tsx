// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { heroCommonProps } from './heroCommons';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero/Dark',
  component: Hero,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

const ctaButtons: HeroProps['ctaButtons'] = [
  {
    text: 'Button 1',
    variant: 'contained',
    disableRipple: false,
  },
  {
    text: 'Button 2',
    variant: 'outlined',
    disableRipple: false,
  },
];

const defaults: Partial<HeroProps> = {
  ...heroCommonProps,
  theme: 'dark',
};

export const DarkHeroBigWithBackground = Template.bind({});
DarkHeroBigWithBackground.args = {
  ...defaults,
  ctaButtons,
  size: 'big',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const DarkHeroBigWithBackgroundNoButtons = Template.bind({});
DarkHeroBigWithBackgroundNoButtons.args = {
  ...defaults,
  ctaButtons: [],
  size: 'big',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const DarkHeroBigWithBackgroundInverted = Template.bind({});
DarkHeroBigWithBackgroundInverted.args = {
  ...defaults,
  ctaButtons,
  size: 'big',
  inverse: true,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const DarkHeroMediumWithBackground = Template.bind({});
DarkHeroMediumWithBackground.args = {
  ...defaults,
  ctaButtons,
  size: 'medium',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const DarkHeroMediumWithBackgroundNoButtons = Template.bind({});
DarkHeroMediumWithBackgroundNoButtons.args = {
  ...defaults,
  ctaButtons: [],
  size: 'medium',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const DarkHeroMediumWithBackgroundInverted = Template.bind({});
DarkHeroMediumWithBackgroundInverted.args = {
  ...defaults,
  ctaButtons,
  size: 'medium',
  inverse: true,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const DarkHeroSmallWithBackground = Template.bind({});
DarkHeroSmallWithBackground.args = {
  ...defaults,
  subtitle: '',
  size: 'small',
  useHoverlay: false,
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};