import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchResultView } from '../SearchResultView';

export default {
  title: 'Views/SearchResultView',
  component: SearchResultView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResultView>;

const Template: ComponentStory<typeof SearchResultView> = () => <SearchResultView />;

export const SearchResult = Template.bind({});