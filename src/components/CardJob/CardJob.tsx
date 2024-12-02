import Icon from '@import/components/Icon';
import { IconKeys } from '@import/components/Icon/Icon.types';
import type { FC } from 'react';

export type TCardJobProps = {
  icon: IconKeys;
  title: string;
};

const CardJob: FC<TCardJobProps> = ({ icon = 'image', title }) => {
  return (
    <div className="bg-[#FFFFFF33] p-[16px] rounded-[12px] flex w-full flex-row items-center">
      <span className="bg-[#FFFFFF66] p-[12px] rounded-[8px]">
        <Icon color="#fff" name={icon}></Icon>
      </span>
      <span className="text-white ml-[24px]">{title}</span>
    </div>
  );
};

export default CardJob;
