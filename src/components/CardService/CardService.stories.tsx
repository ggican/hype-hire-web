// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CardService from './CardService'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof CardService> = {
  title: 'Molecules/CardService', // This is the category and name for the story
  component: CardService,
  tags: ['autodocs'],
} satisfies Meta<typeof CardService>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const CardGear: Story = {
  args: {
    padding: 'p-[32px]',
    icon: 'gear',
    title: '해외 개발자 활용 서비스',
  },
};

export const CardCode: Story = {
  args: {
    padding: 'p-[16px]',
    icon: 'code',
    title: '외국인 원격 채용 (비개발)',
  },
};
