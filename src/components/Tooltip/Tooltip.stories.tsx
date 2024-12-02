import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip', // This is the category and name for the story
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

// Define the default story for the Tooltip component
type Story = StoryObj<typeof meta>;

// Basic Tooltip Usage
export const DefaultTooltip: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'This is a default tooltip.',
  },
};

// Tooltip with custom placement
export const TopTooltip: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip placed at the top.',
    placement: 'top',
    arrowPlacement: 'bottom-center',
  },
};

export const BottomTooltip: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip placed at the bottom.',
    placement: 'bottom',
    arrowPlacement: 'top-center',
  },
};

export const LeftTooltip: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip placed on the left.',
    placement: 'left',
    arrowPlacement: 'right',
  },
};

export const RightTooltip: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip placed on the right.',
    placement: 'right',
    arrowPlacement: 'left',
  },
};

// Tooltip with custom arrow placements
export const ArrowTopLeft: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip with arrow placed at top-left.',
    placement: 'top',
    arrowPlacement: 'bottom-left',
  },
};

export const ArrowTopCenter: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip with arrow placed at top-center.',
    placement: 'top',
    arrowPlacement: 'bottom-center',
  },
};

export const ArrowTopRight: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip with arrow placed at top-right.',
    placement: 'top',
    arrowPlacement: 'bottom-right',
  },
};

export const ArrowBottomLeft: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip with arrow placed at bottom-left.',
    placement: 'bottom',
    arrowPlacement: 'top-left',
  },
};

export const ArrowBottomCenter: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip with arrow placed at bottom-center.',
    placement: 'bottom',
    arrowPlacement: 'top-center',
  },
};

export const ArrowBottomRight: Story = {
  args: {
    children: 'Hover over me!',
    tooltip: 'Tooltip with arrow placed at bottom-right.',
    placement: 'bottom',
    arrowPlacement: 'top-right',
  },
};
