import type { Meta, StoryObj } from '@storybook/react';
import Advantages, { TAdvantagesProps } from './Advantages'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Advantages> = {
  title: 'Molecules/Advantages', // This is the category and name for the story
  component: Advantages,
  tags: ['autodocs'],
} satisfies Meta<typeof Advantages>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const AdvantagesDefault: Story = {
  args: { title: '평균 3일, 최대 10일', desc: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.' },
  render: (args: TAdvantagesProps) => {
    return (
      <div className="bg-blue-300">
        <Advantages {...args}></Advantages>
      </div>
    );
  },
};
