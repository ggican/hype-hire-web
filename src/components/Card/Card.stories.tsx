// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Card> = {
  title: 'Atoms/Card', // This is the category and name for the story
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const TagDefault: Story = {
  args: { children: 'Default Tag' },
};
