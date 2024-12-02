import type { Meta, StoryObj } from '@storybook/react';
import Slider from '.';
import CardJob from '@import/components/CardJob';

// Define the metadata for the story
const meta: Meta<typeof Slider> = {
  title: 'Molecules/Slider', // This is the category and name for the story
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;

// Define the default story for the Tag component
type Story = StoryObj<typeof meta>;

export const SliderDefault: Story = {
  args: {
    children: [
      <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={2} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={3} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={1} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={4} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={5} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={5} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
    ],
  },
};

export const SliderInterval: Story = {
  args: {
    duration: 1000,
    children: [
      <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={2} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={3} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={1} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={4} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={5} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
      <CardJob key={5} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>,
    ],
  },
};
