import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Response } from '../../utils/interfaces';
import { SearchResultView } from '../SearchResultView';
import { VALID_RESPONSE_1_RESULT } from '../tests/fixtures/SearchResult.fixture';

export default {
  title: 'Views/SearchResultView',
  component: SearchResultView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResultView>;

const Template: ComponentStory<typeof SearchResultView> = (args) => <SearchResultView {...args} />;

export const SearchResultOneResult = Template.bind({});
SearchResultOneResult.args = {
  data: VALID_RESPONSE_1_RESULT as Response[]
};