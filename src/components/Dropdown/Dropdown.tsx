'use client';

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '@import/components/Icon';

type TDropdownOptions = {
  label: string;
  strong?: boolean;
  divider?: boolean;
};

type DropdownProps = {
  trigger: React.ReactNode; // The trigger element (e.g., a button)
  position?: 'top' | 'bottom'; // Position of the dropdown
  className?: string; // Custom class for styling
  options: TDropdownOptions[];
};

const Dropdown: React.FC<DropdownProps> = ({ options, trigger, position = 'bottom', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference for the dropdown menu
  const buttonRef = useRef<HTMLDivElement | null>(null); // Reference for the dropdown menu

  const toggleDropdown = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div
        ref={buttonRef}
        onClick={toggleDropdown}
        className="inline-flex flex-row items-center cursor-pointer hover:bg-[#FFFFFF33]  transition-all ease-in-out duration-300 rounded-md py-[5px] px-[10px]">
        {trigger}
        <Icon
          className={classNames('ml-[6px] transition-all ease-in-out duration-300', { 'rotate-180': isOpen })}
          name="caret-down"
          size="xs"
          color="#fff"></Icon>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef} // Attach the ref to the dropdown container
          className={classNames(
            'shadow-lg min-w-[240px] absolute mt-2 z-10 bg-white rounded-[8px] border border-[#F2F4F7]',
            position === 'top' ? 'bottom-full' : 'top-full',
            className,
          )}>
          {options?.map((item: TDropdownOptions, key: number) => (
            <div
              key={key}
              onClick={() => {
                setIsOpen(false);
              }}
              className={classNames(
                'cursor-pointer text-[14px] hover:opacity-70  leading-[20px] text-[#344054] px-[16px] py-[10px]',
                {
                  'font-bold': item?.strong,
                  'border-[#F2F4F7] border-t': item?.divider,
                },
              )}>
              {item?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
