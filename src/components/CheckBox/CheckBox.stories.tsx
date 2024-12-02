// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof CheckBox> = {
  title: 'Atoms/CheckBox', // This is the category and name for the story
  component: CheckBox,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const TagDefault: Story = {
  args: { label: 'Default Tag' },
};
