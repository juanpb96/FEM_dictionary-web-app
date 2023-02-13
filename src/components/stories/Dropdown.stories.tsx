import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const FontList = Template.bind({});