import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from '~/components/logo';

type ButtonType = typeof Logo;

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    invert: {
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    variant: {
      defaultValue: 'icon',
      table: {
        defaultValue: { summary: 'icon' },
      },
    },
  },
} as ComponentMeta<ButtonType>;

const Template: ComponentStory<ButtonType> = (args) => <Logo {...args}>Button</Logo>;

export const IconLogo = Template.bind({});
IconLogo.args = {
  invert: false,
  variant: 'icon',
};

export const IconLogoInvert = Template.bind({});
IconLogoInvert.args = {
  invert: true,
  variant: 'icon',
};

export const TextLogo = Template.bind({});
TextLogo.args = {
  invert: false,
  variant: 'text',
};

export const TextLogoInvert = Template.bind({});
TextLogoInvert.args = {
  invert: true,
  variant: 'text',
};
