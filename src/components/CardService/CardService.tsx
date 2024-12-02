import Card from '@import/components/Card';
import Icon from '@import/components/Icon';
import { IconKeys } from '@import/components/Icon/Icon.types';
import Link from 'next/link';
import type { FC } from 'react';

export type TCardProfileProps = {
  icon: IconKeys;
  title: string;
  padding?: string;
  shadow?: boolean;
};

const CardService: FC<TCardProfileProps> = ({ icon, padding = 'p-[16px]', shadow = false }) => {
  return (
    <Card data-testid="card-service" shadow={shadow} padding={padding}>
      <div className="w-[40px] inline-flex bg-[#EFF1F6] rounded-[8px] h-[40px] items-center justify-center">
        <Icon name={icon} color="#7A8FAD"></Icon>
      </div>
      <p className="font-extrabold text-[#343741] text-[14px] leading-[21px] mt-[12px]">해외 개발자 원격 채용</p>
      <Link
        href="/"
        className="flex justify-start mt-[16px] hover:opacity-75 transition-all duration-300 items-center w-full text-[#5E626F] text-[14px] font-extraboldƒ">
        <span className="mr-[5px] text-[#]">바로가기</span>
        <Icon size="xs" color="#5E626F" name="right-square"></Icon>
      </Link>
    </Card>
  );
};

export default CardService;
