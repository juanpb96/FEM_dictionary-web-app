import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Response } from '../../utils/interfaces';
import { SearchResultView } from '../SearchResultView';
import {
  VALID_RESPONSE_1_RESULT,
  VALID_RESPONSE_WITH_ANTONYMS,
  VALID_RESPONSE_MULTIPLE_SOURCES,
  VALID_RESPONSE_MULTIPLE_RESULTS
} from '../tests/fixtures/SearchResult.fixture';

export default {
  title: 'Views/SearchResultView',
  component: SearchResultView,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResultView>;

const Template: ComponentStory<typeof SearchResultView> = (args) => <SearchResultView {...args} />;

export const DefaultResult = Template.bind({});
DefaultResult.args = {
  data: VALID_RESPONSE_1_RESULT as Response[]
};

export const MultipleAntonymsResult = Template.bind({});
MultipleAntonymsResult.args = {
  data: VALID_RESPONSE_WITH_ANTONYMS as Response[]
};

export const MultipleSourcesResult = Template.bind({});
MultipleSourcesResult.args = {
  data: VALID_RESPONSE_MULTIPLE_SOURCES as Response[]
};

export const MultipleResults = Template.bind({});
MultipleResults.args = {
  data: VALID_RESPONSE_MULTIPLE_RESULTS as Response[]
};