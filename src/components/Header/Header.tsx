'use client';

import Button from '@import/components/Button';
import Dropdown from '@import/components/Dropdown';
import Icon from '@import/components/Icon';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, useState, useEffect } from 'react';

const Header: FC<{ fixed?: boolean }> = ({ fixed }) => {
  const [scrolling, setScrolling] = useState(false);

  // Set scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is greater than 100px, set scrolling state to true
      setScrolling(window.scrollY > 100);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames('flex w-full py-[13px] transition-all duration-300 ease-in-out', {
        'top-0 left-0 right-0 fixed z-50': fixed,
        'bg-[#00000033] shadow-md opacity-100 transform translate-y-0': scrolling, // Background becomes darker and shadow when scrolling
        'bg-transparent opacity-1': !scrolling, // Initially transparent and hidden
      })}>
      <nav className="container">
        <div className="flex w-full items-center flex-row justify-between">
          <div className="inline-flex">
            <Link href="/">
              <Icon name="logo" />
            </Link>
          </div>
          <div className="lg:inline-flex items-center gap-x-[60px] hidden">
            <Dropdown
              {...{
                trigger: (
                  <button className="cursor-pointer text-white text-[16px] font-extrabold" color="link-secondary">
                    채용
                  </button>
                ),
                options: [
                  { label: '채용', strong: true },
                  { label: '해외 개발자 원격 채용' },
                  { label: '외국인 원격 채용 (비개발 직군)' },
                  { label: '한국어 가능 외국인 채용' },
                ],
                position: 'bottom', // Dropdown positioned at the top
              }}
            />
            <Link href="/" className="text-white text-[16px] font-extrabold">
              해외 개발자 활용 서비스
            </Link>
          </div>

          <div className="lg:inline-flex hidden">
            <Button className="font-extrabold" onClick={() => {}} color="secondary">
              문의하기
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
