// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag', // This is the category and name for the story
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const TagDefault: Story = {
  args: { children: 'Default Tag' },
};
