import Icon from '@import/components/Icon';
import type { FC } from 'react';

const CheckBox: FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex w-full flex-row">
      <span className="bg-[#E8ECFF] mr-[10px] justify-center items-center inline-flex w-[20px] h-[20px] rounded-md">
        <Icon color="#2c599b" size="xxs" name="check" />
      </span>
      <span className="text-white font-extrabold text-[16px]">{label}</span>
    </div>
  );
};

export default CheckBox;
