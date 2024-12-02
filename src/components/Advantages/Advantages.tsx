import type { FC } from 'react';

export type TAdvantagesProps = { title: string; desc: string };

const Advantages: FC<TAdvantagesProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col">
      <div className="h-[1px] w-[70%] bg-[#fff]"></div>
      <p className="font-extrabold text-[18px] py-[8px] text-white">{title}</p>
      <span className="font-extrabold text-[16px] text-[#FFFFFFCC] ">{desc}</span>
    </div>
  );
};

export default Advantages;
