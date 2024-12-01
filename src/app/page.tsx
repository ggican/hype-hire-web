import Icon from '@import/app/components/Icon';
import Tag from '@import/app/components/Tag';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full block h-full">
      <div className="w-full fixed top-0 left-0 right-0 z-[1110] py-[12px] flex flex-row" id="header-layout">
        <div className="container">
          <Icon color="#fff" name="caret-right"></Icon>
          <Icon color="#fff" name="call"></Icon>
          <Icon color="#fff" size="lg" name="box"></Icon>
          <Icon color="#fff" size="lg" name="image"></Icon>
          <Icon color="#fff" name="dollar"></Icon>
          <Icon color="#fff" name="logo-original"></Icon>
          <Icon color="#fff" name="logo"></Icon>
          <Tag>마케팅 콘텐츠 제작</Tag>
        </div>
      </div>
      <div className="w-full block">
        <section className="w-full block min-h-screen relative">
          <Image
            className="w-full min-h-screen"
            alt="landing-page-back-ground"
            width={1000}
            height={1000}
            src="/images/images-bg-home-full.png"></Image>
        </section>
        <div className="container"></div>
      </div>
    </div>
  );
}
