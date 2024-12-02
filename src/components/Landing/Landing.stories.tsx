// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Landing from '.'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Landing> = {
  title: 'Organisms/Landing', // This is the category and name for the story
  component: Landing,
  tags: ['autodocs'],
} satisfies Meta<typeof Landing>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const LandingDefault: Story = {
  args: {},
  render: () => {
    return <Landing></Landing>;
  },
};
