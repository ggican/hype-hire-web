import Avatar from '@import/components/Avatar';
import Card from '@import/components/Card';
import Icon from '@import/components/Icon';
import { IconKeys } from '@import/components/Icon/Icon.types';
import Tag from '@import/components/Tag';
import type { FC } from 'react';

export type TCardProfileProps = {
  padding?: string;
  avatar: {
    flag: IconKeys;
    image: string;
    alt: string;
  };
  name: string;
  experience: {
    year: string;
    name: string;
  };
  skills: string[];
};

const CardProfile: FC<TCardProfileProps> = ({ padding = 'p-[16px]', avatar, name, experience, skills }) => {
  return (
    <Card data-testid="card-profile-test-id" className="lg:p-[36px] !p-[16px] h-full w-full" padding={padding}>
      <div className="relative flex w-full flex-col justify-center items-center">
        <Avatar
          src={avatar?.image}
          className="relative lg:w-[120px] w-[64px] lg:h-[120px] h-[64px]"
          alt={avatar?.alt}
          width={120}
          height={120}>
          <div className="absolute lg:bottom-[5px] lg:right-[10px] bottom-0 right-0">
            <Icon name={avatar?.flag} />
          </div>
        </Avatar>
      </div>

      {/* Card Body */}
      <div className="w-full flex flex-col mt-[16px] lg:mb-[36px] mb-[16px]">
        <p className="font-extrabold text-black lg:text-[24px] text-[18px] leading-[36px] text-center">{name}</p>
        <span className="font-extrabold font-poppins lg:text-[16px] text-[14px] text-[#4A77FF] leading-6 text-center underline-position skip-ink">
          {experience?.name} · {experience?.year}y+
        </span>
      </div>

      {/* Card Footer */}
      <div className="flex-wrap flex justify-center items-center w-full gap-x-4 gap-y-1 p-[8px]">
        {skills?.map((item, key: number) => {
          return <Tag key={key}>{item}</Tag>;
        })}
      </div>
    </Card>
  );
};

export default CardProfile;
