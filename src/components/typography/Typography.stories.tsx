import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '~/components/typography';

type TypographyType = typeof Typography;

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    variant: {
      defaultValue: 'body',
      table: {
        defaultValue: { summary: 'body' },
      },
    },
    as: {
      table: {
        defaultValue: { summary: 'p' },
      },
      control: {
        type: 'none',
      },
    },
  },
} as ComponentMeta<TypographyType>;

const Template: ComponentStory<TypographyType> = (args) => (
  <Typography {...args}>Typography</Typography>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: 'subtitle',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
};
