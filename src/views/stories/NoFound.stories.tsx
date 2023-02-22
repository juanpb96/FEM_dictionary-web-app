import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NoFoundView } from '../NoFoundView';

export default {
  title: 'Views/NoFoundView',
  component: NoFoundView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NoFoundView>;

const Template: ComponentStory<typeof NoFoundView> = () => <NoFoundView />;

export const NoDefinitionFound = Template.bind({});