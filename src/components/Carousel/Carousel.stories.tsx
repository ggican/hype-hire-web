// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel'; // Adjust the import path based on your file structure
import CardProfile from '@import/components/CardProfile';

// Define the metadata for the story
const meta: Meta<typeof Carousel> = {
  title: 'Molecules/Carousel', // This is the category and name for the story
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const CarouselDefault: Story = {
  args: {},
  render: () => {
    return (
      <Carousel arrowColor="#000">
        <CardProfile
          {...{
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
          }}></CardProfile>
        <CardProfile
          {...{
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
          }}></CardProfile>
        <CardProfile
          {...{
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
          }}></CardProfile>
      </Carousel>
    );
  },
};

export const CarouselArrowColor: Story = {
  args: {},
  render: () => {
    return (
      <Carousel arrowColor="#c2c">
        <CardProfile
          {...{
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
          }}></CardProfile>
        <CardProfile
          {...{
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
          }}></CardProfile>
        <CardProfile
          {...{
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
          }}></CardProfile>
      </Carousel>
    );
  },
};

export const CarouselAutoPlayInterval: Story = {
  args: {},
  render: () => {
    return (
      <Carousel arrowColor="#c2c" autoPlayInterval={6000}>
        <CardProfile
          {...{
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
          }}></CardProfile>
        <CardProfile
          {...{
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
          }}></CardProfile>
        <CardProfile
          {...{
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
          }}></CardProfile>
      </Carousel>
    );
  },
};
