import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const FontList = Template.bind({});