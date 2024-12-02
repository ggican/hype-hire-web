// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CardProfile from './CardProfile'; // Adjust the import path based on your file structure

// Define the metadata for the story
const meta: Meta<typeof CardProfile> = {
  title: 'Molecules/CardProfile', // This is the category and name for the story
  component: CardProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof CardProfile>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const CardProfileDefault: Story = {
  args: {
    padding: 'p-[32px]',
    avatar: {
      flag: 'flag-colombia',
      image: 'https://via.placeholder.com/150',
      alt: 'Abhishek Gupta',
    },
    name: 'Abhishek Gupta',
    experience: {
      year: '2',
      name: '마케팅',
    },
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
};
