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

const Landing = () => {
  const cardJob: TCardJobProps[] = [
    {
      icon: 'marketing',
      title: '해외 마케팅',
    },
    {
      icon: 'image',
      title: '퍼블리셔',
    },
    {
      icon: 'box',
      title: '캐드원(제도사)',
    },
    {
      icon: 'target',
      title: '해외 세일즈',
    },
    {
      icon: 'call',
      title: '해외 CS',
    },
  ];
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
                    <div className="inline-flex flex-col">
                      <Advantages title="평균 월 120만원" desc="임금을 해당 국가를 기준으로 계산합니다." />
                    </div>
                    <div className="inline-flex flex-col">
                      <Advantages title="최대 3회 인력교체" desc="막상 채용해보니 맞지 않아도 걱정하지 마세요." />
                    </div>
                    <div className="inline-flex flex-col">
                      <Advantages
                        title="평균 3일, 최대 10일"
                        desc="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
                      />
                    </div>
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
                      <CardProfile
                        key={0}
                        {...{
                          padding: 'p-[32px]',
                          avatar: {
                            flag: 'flag-colombia',
                            image: 'https://via.placeholder.com/150',
                            alt: 'Abhishek Gupta',
                          },
                          name: 'Abhishek Gupta',
                          experience: {
                            year: '2',
                            name: '마케팅',
                          },
                          skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
                        }}></CardProfile>
                      <CardProfile
                        key={1}
                        {...{
                          padding: 'p-[32px]',
                          avatar: {
                            flag: 'flag-colombia',
                            image: 'https://via.placeholder.com/150',
                            alt: 'Abhishek Gupta',
                          },
                          name: 'Abhishek Gupta',
                          experience: {
                            year: '2',
                            name: '마케팅',
                          },
                          skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
                        }}></CardProfile>
                      <CardProfile
                        key={2}
                        {...{
                          padding: 'p-[32px]',
                          avatar: {
                            flag: 'flag-colombia',
                            image: 'https://via.placeholder.com/150',
                            alt: 'Abhishek Gupta',
                          },
                          name: 'Abhishek Gupta',
                          experience: {
                            year: '2',
                            name: '마케팅',
                          },
                          skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
                        }}></CardProfile>
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
