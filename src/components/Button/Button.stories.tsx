// Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button', // Category name in Storybook
  component: Button, // The component being documented
  tags: ['autodocs'], // Optional auto-docs for Storybook to use
} satisfies Meta<typeof Button>;

export default meta;

// Define the default story for the Button component
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me', // Default text for the button
    onClick: () => alert('Button Clicked!'), // Default click handler
  },
};

// Define additional variations for the Button component

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm', // Set size to small
    onClick: () => alert('Small Button Clicked!'),
  },
};

export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small Button',
    size: 'xs', // Set size to extra-small
    onClick: () => alert('Extra Small Button Clicked!'),
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg', // Set size to large
    onClick: () => alert('Large Button Clicked!'),
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    color: 'danger', // Set color to danger
    onClick: () => alert('Danger Button Clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'secondary', // Set color to secondary
    onClick: () => alert('Secondary Button Clicked!'),
  },
};

export const Link: Story = {
  args: {
    children: 'lin Button',
    color: 'link', // Set color to secondary
    onClick: () => alert('link Button Clicked!'),
  },
};
