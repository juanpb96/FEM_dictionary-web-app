import { ComponentStory, ComponentMeta } from '@storybook/react';
import { decorators } from '../../stories/StylesDecorator';
import { ThemeSwitcher } from '../ThemeSwitcher';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  decorators
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const ThemeSwitchButton = Template.bind({});