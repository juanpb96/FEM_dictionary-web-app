import { ComponentStory, ComponentMeta } from '@storybook/react';
import { decorators } from '../../stories/StylesDecorator';
import { Dropdown } from '../Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  decorators
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const FontList = Template.bind({});