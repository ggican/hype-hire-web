// Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Landing from '.'; // Adjust the import path based on your file structure
import { TCardJobProps } from '@import/components/CardJob/CardJob';
import { TCardProfileProps } from '@import/components/CardProfile/CardProfile';

// Define the metadata for the story
const meta: Meta<typeof Landing> = {
  title: 'Organisms/Landing', // This is the category and name for the story
  component: Landing,
  tags: ['autodocs'],
} satisfies Meta<typeof Landing>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

const userList: TCardProfileProps[] = [
  {
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
  {
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
  {
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
];

const advantages = [
  {
    title: '평균 월 120만원',
    desc: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    title: '최대 3회 인력교체',
    desc: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
  },
  {
    title: '평균 3일, 최대 10일',
    desc: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

const cardJob: TCardJobProps[] = [
  {
    icon: 'marketing',
    title: '해외 마케팅',
  },
  {
    icon: 'image',
    title: '퍼블리셔',
  },
  {
    icon: 'box',
    title: '캐드원(제도사)',
  },
  {
    icon: 'target',
    title: '해외 세일즈',
  },
  {
    icon: 'call',
    title: '해외 CS',
  },
];

export const LandingDefault: Story = {
  args: {
    data: {
      userList,
      advantages,
      cardJob,
    },
  },
  render: (args) => {
    return <Landing {...args}></Landing>;
  },
};
