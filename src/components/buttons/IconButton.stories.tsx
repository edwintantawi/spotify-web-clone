import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from '~/components/buttons';
import { HomeIconFilled } from '~/components/icons';

type IconButtonType = typeof IconButton;

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      defaultValue: 'secondary',
      table: {
        defaultValue: { summary: 'secondary' },
      },
    },
    size: {
      defaultValue: 'medium',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
} as ComponentMeta<IconButtonType>;

const Template: ComponentStory<IconButtonType> = (args) => (
  <IconButton {...args}>
    <HomeIconFilled invert />
  </IconButton>
);

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  variant: 'primary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  variant: 'secondary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: 'primary',
  size: 'small',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  size: 'small',
};
