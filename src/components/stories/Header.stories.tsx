import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const LightTheme = Template.bind({});
LightTheme.parameters = {
  theme: 'light'
};

export const DarkTheme = Template.bind({});
DarkTheme.parameters = {
  theme: 'dark'
};