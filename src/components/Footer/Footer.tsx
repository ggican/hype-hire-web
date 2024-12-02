import Card from '@import/components/Card';
import CardService from '@import/components/CardService';
import Icon from '@import/components/Icon';
import classNames from 'classnames';
import type { FC } from 'react';

const Footer: FC<{ fixed?: boolean }> = ({ fixed }) => {
  return (
    <footer className={classNames('flex w-full py-[80px] bg-[#FBFBFB]', { 'top-0 left-0 right-0': fixed })}>
      <nav className="container">
        <div date-testid="footer-top" className="lg:grid lg:grid-cols-10 gap-2 w-full mb-[20px]">
          <div className="col-span-4">
            <Icon name="logo-original" />
            <p className="font-extrabold text-[14px] leading-[21px] text-[#343741] mb-[18px] mt-[16px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className="text-[#5E626F] text-[13px] font-extrabold leading-[20px] mb-[8x]">010-0000-0000</p>
            <p className="text-[#5E626F] text-[13px] font-extrabold leading-[20px]">aaaaa@naver.com</p>
          </div>
          <div className="col-span-6">
            <div className="grid md:w-full lg:grid-rows-1  mt-[18px] lg:mt-0 lg:grid-cols-4  xs:grid-cols-2 md:grid-cols-2 md:grid-rows-2 grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 lg:gap-x-[15px] md:gap-[8px] gap-[8px] ">
              <CardService padding="p-[16px]" icon="code" title="해외 개발자 원격 채용"></CardService>
              <CardService padding="p-[16px]" icon="avatar" title="외국인 원격 채용 (비개발)"></CardService>
              <CardService padding="p-[16px]" icon="kor" title="한국어 가능 외국인 채용"></CardService>
              <CardService padding="p-[16px]" icon="gear" title="해외 개발자 활용 서비스"></CardService>
            </div>
          </div>
        </div>

        <div date-testid="footer-bottom" className="grid lg:grid-cols-10 grid-cols-2 lg:gap-2 gap-y-[36px] gap-x-2 w-full">
          <div className="lg:col-span-2 ">
            <p className="font-extrabold text-[12px] leading-[21px] text-[#343741] mb-[18px] mt-[16px]">상호명</p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px] mb-[8x]">하이퍼하이어</p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px]">Hyperhire India Private Limited</p>
          </div>
          <div className="col-span-2 ">
            <p className="font-extrabold text-[12px] leading-[21px] text-[#343741] mb-[18px] mt-[16px]">대표 CEO</p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px] mb-[8x]">김주현</p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px]">Juhyun Kim</p>
          </div>
          <div className="col-span-2 ">
            <p className="font-extrabold text-[12px] leading-[21px] text-[#343741] mb-[18px] mt-[16px]">
              사업자등록번호 CIN
            </p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px] mb-[8x]">427-86-01187</p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px]">U74110DL2016PTC290812</p>
          </div>
          <div className="col-span-4">
            <p className="font-extrabold text-[12px] leading-[21px] text-[#343741] mb-[18px] mt-[16px]">주소 ADDRESS</p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px] mb-[8x]">
              서울특별시 강남대로 479, 지하 1층 238호
            </p>
            <p className="text-[#5E626F] font-extrabold text-[13px] leading-[20px]">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
            </p>
          </div>
        </div>
        <p className="block w-full text-[#5E626F] font-extrabold text-[13px] mt-[48px]">ⓒ 2023 Hyperhire</p>
      </nav>
    </footer>
  );
};

export default Footer;
