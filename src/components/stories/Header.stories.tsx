import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../Header';
import { decorators } from '../../stories/StylesDecorator';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const LightMode = Template.bind({});