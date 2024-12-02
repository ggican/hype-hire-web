// Dropdown.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

// Define metadata for the story
const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown', // Story category and name
  component: Dropdown, // The component to be documented
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

// Define default story for Dropdown component
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-blue-500 text-white rounded">Open Dropdown</button>,
    options: [
      {
        label: '채용',
        strong: true,
      },
      {
        label: '해외 개발자 원격 채용',
      },
      {
        label: '외국인 원격 채용 (비개발 직군)',
      },
      {
        divider: true,
        label: '한국어 가능 외국인 채용',
      },
    ],
    position: 'bottom', // Default dropdown position is bottom
  },
};

// Define story for Dropdown with top position
export const TopPosition: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-green-500 text-white rounded">Open Top Dropdown</button>,
    options: [
      {
        label: '채용',
        strong: true,
      },
      {
        label: '해외 개발자 원격 채용',
      },
      {
        label: '외국인 원격 채용 (비개발 직군)',
      },
      {
        label: '한국어 가능 외국인 채용',
      },
    ],
    position: 'top', // Dropdown positioned at the top
  },
};
