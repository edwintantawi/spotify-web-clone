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
  },
} as ComponentMeta<ButtonType>;

const Template: ComponentStory<ButtonType> = (args) => <Logo {...args}>Button</Logo>;

export const Default = Template.bind({});
Default.args = {
  invert: false,
};

export const Invert = Template.bind({});
Invert.args = {
  invert: true,
};
