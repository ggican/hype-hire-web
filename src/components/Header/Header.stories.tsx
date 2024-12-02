// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Header> = {
  title: 'Organisms/Header', // This is the category and name for the story
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const HeaderDefault: Story = {
  args: {},
  render: () => {
    return (
      <div className="bg-black">
        <Header></Header>
      </div>
    );
  },
};
