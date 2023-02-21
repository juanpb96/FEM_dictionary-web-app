import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from '../SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = () => <SearchInput />;

export const SearchInputField = Template.bind({});