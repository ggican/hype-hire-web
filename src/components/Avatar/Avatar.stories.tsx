import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar'; // Adjust path as necessary

// Define metadata for the Tag component story
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar', // The name and category in Storybook
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

// Define the type for the Story object
type Story = StoryObj<typeof meta>;

// Default story for the Tag component
export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150', // Placeholder image URL
    width: 50,
    height: 50,
    alt: 'avatar',
  },
};

// Customizable story
export const Custom: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    rounded: false,
    width: 80,
    height: 80,
    alt: 'user-avatar',
    children: 'Custom User',
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    width: 120,
    height: 120,
    alt: 'user-avatar',
    rounded: true,
  },
};
