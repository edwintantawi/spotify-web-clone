import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '~/components/buttons';

type ButtonType = typeof Button;

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'contained',
      table: {
        defaultValue: { summary: 'contained' },
      },
    },
    pill: {
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    as: {
      table: {
        defaultValue: { summary: 'button' },
      },
      control: {
        type: 'none',
      },
    },
  },
} as ComponentMeta<ButtonType>;

const Template: ComponentStory<ButtonType> = (args) => <Button {...args}>Button</Button>;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  pill: false,
};

export const ContainedPill = Template.bind({});
ContainedPill.args = {
  variant: 'contained',
  pill: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  pill: false,
};

export const OutlinedPill = Template.bind({});
OutlinedPill.args = {
  variant: 'outlined',
  pill: true,
};
