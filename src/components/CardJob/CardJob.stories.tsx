// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CardJob from './CardJob'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof CardJob> = {
  title: 'Molecules/Card Job', // This is the category and name for the story
  component: CardJob,
  tags: ['autodocs'],
} satisfies Meta<typeof CardJob>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const CardJobCode: Story = {
  args: {
    icon: 'code',
    title: '외국인 원격 채용 (비개발)',
  },
  render: (args) => {
    return (
      <div className="bg-blue-300 p-[10px]">
        <CardJob {...args}></CardJob>
      </div>
    );
  },
};
