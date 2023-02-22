import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSwitcher } from '../ThemeSwitcher';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const ThemeSwitchButton = Template.bind({});