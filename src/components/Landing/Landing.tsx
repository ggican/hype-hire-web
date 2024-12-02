import Advantages from '@import/components/Advantages';
import CardJob from '@import/components/CardJob';
import { TCardJobProps } from '@import/components/CardJob/CardJob';
import CardProfile from '@import/components/CardProfile';
import Carousel from '@import/components/Carousel';
import CheckBox from '@import/components/CheckBox';
import Icon from '@import/components/Icon';
import Slider from '@import/components/Slider';
import Tooltip from '@import/components/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import { TCardProfileProps } from '@import/components/CardProfile/CardProfile';
import { TAdvantagesProps } from '@import/components/Advantages/Advantages';

const Landing = async () => {
  const headersList = headers();
  const domain = headersList.get('x-forwarded-host') || '';
  const protocol = headersList.get('x-forwarded-proto') || '';
  const res = await fetch(`${protocol}://${domain}/api/content`);
  const data = await res.json();

  const { userList, advantages, cardJob } = data;

  return (
    <section className="w-full">
      <div className="w-full block h-full">
        <div className="w-full block">
          <section className="w-full block lg:min-h-screen h-full relative pt-[200px] pb-[60px]">
            <div className="top-0 left-0 right-0 bottom-0 absolute">
              <Image
                className="w-full lg:min-h-screen h-full"
                alt="landing-page-back-ground"
                width={1000}
                height={1000}
                src="/images/images-bg-home-full.png"></Image>
            </div>
            <div className="container relative z-10">
              <div className="grid lg:grid-cols-2 lg:flex-row flex-col">
                <div className="inline-flex flex-col w-[auto]">
                  <div className="flex w-full flex-col mb-[16px]">
                    <Tooltip
                      className="lg:!bg-white !bg-[#8BC4FF] animate-fade-in-delay"
                      tooltip={
                        <span className="lg:!text-[#40E2E8] text-white text-[18px] font-extrabold leading-[27px]">
                          풀타임, 파트타임
                        </span>
                      }
                      noHover
                      arrowPlacement="bottom-left">
                      <h1 className="text-[#FFFFFFE5] leading-[62px] font-extrabold lg:text-[48px] text-[36px] animate-fade-in-up">
                        최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                      </h1>
                    </Tooltip>
                    <div className="flex lg:flex-col animate-fade-in-up mt-[16px]">
                      <p className="text-[#FFFFFFE5]  leading-[34px] font-extrabold  lg:text-[24px] text-[18px] ">
                        법률 및 인사관리 부담없이
                      </p>
                      <p className="text-[#FFFFFFE5]leading-[34px] font-extrabold  lg:text-[24px] text-[18px]">
                        1주일 이내에 원격으로 채용해보세요.
                      </p>
                    </div>
                    <p className="hidden lg:block font-extrabold text-[#FFFFFFE5] animate-fade-in-up leading-[27px] text-[18px] mt-[24px] underline">
                      개발자가 필요하신가요?
                    </p>
                  </div>
                  <div className="hidden grid-cols-3 gap-x-[43px] mt-[60px] animate-fade-in lg:grid ">
                    {advantages?.map((item: TAdvantagesProps, key: number) => {
                      return (
                        <div key={key} className="inline-flex flex-col">
                          <Advantages {...item} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="animate-fade-in inline-flex  lg:w-[calc(100%-581px) w-full lg:mt-0 mt-[60px]">
                  <Tooltip
                    tooltip={
                      <div className="inline-flex items-center">
                        <span className="w-[26px] h-[26px] bg-[#BBF3D2] mr-[10px] rounded-full inline-flex justify-center items-center">
                          <Icon size="xs" name="dollar" color="#00C696"></Icon>
                        </span>
                        <span className="text-[#00C696] text-[18px] font-extrabold leading-[27px]">월 100만원</span>
                      </div>
                    }
                    noHover
                    placement="top-center"
                    arrowPlacement="bottom-center">
                    <></>

                    <Carousel arrowColor="#fff">
                      {userList?.map((item: TCardProfileProps, key: number) => {
                        return <CardProfile key={key} padding="p-[32px]" {...item} />;
                      })}
                    </Carousel>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="w-full mt-[60px] relative z-10 animate-fade-in lg:flex hidden">
              <Slider>
                {cardJob?.map(({ title, icon }: TCardJobProps, key: number) => {
                  return <CardJob key={key} title={title} icon={icon}></CardJob>;
                })}
              </Slider>
            </div>

            <div className="container relative lg:hidden">
              <div className="grid grid-cols-2  grid-flow-col grid-rows-2 gap-[8px]">
                <CheckBox label="한국어 능력" />
                <CheckBox label="업무 수행 능력" />
                <CheckBox label="겸업 여부" />
                <CheckBox label="평판 조회" />
              </div>
              <div className="flex w-full mt-[16px] pb-[60px] lg:hidden relative">
                <Link className="text-[#FBFF23] hover:opacity-85" href="/">
                  개발자가 필요하신가요?
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Landing;
