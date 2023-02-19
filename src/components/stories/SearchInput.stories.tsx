import { ComponentStory, ComponentMeta } from '@storybook/react';
import { decorators } from '../../stories/StylesDecorator';
import { SearchInput } from '../SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  decorators
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = () => <SearchInput />;

export const SearchInputField = Template.bind({});