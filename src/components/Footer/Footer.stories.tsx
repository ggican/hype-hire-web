// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer', // This is the category and name for the story
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const FooterDefault: Story = {
  args: {},
  render: () => {
    return (
      <div className="bg-black">
        <Footer></Footer>
      </div>
    );
  },
};
