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
  render: () => {
    return (
      <div className="bg-blue-400 px-[10px]">
        <Slider>
          <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>
          <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>
          <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>
        </Slider>
      </div>
    );
  },
};

export const SliderWithInterval: Story = {
  render: () => {
    return (
      <div className="bg-blue-400 px-[10px]">
        <Slider>
          <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>
          <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>
          <CardJob key={0} icon="gear" title="외국인 원격 채용 (비개발)"></CardJob>
        </Slider>
      </div>
    );
  },
};
