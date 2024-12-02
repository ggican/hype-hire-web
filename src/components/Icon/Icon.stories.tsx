import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';

import { ColorsKeys, IconKeys, IconProps, IconSize, tailwindConfigColors } from './Icon.types';
import { iconsList } from './IconList';

import Icon from '.';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Retrieve all icon names and colors
const allIcon: IconKeys[] = Object.keys(iconsList) as IconKeys[];
const allColor: ColorsKeys[] = Object.keys({ ...tailwindConfigColors }) as ColorsKeys[];

const GetElementIcon = ({ iconName, args }: { iconName: IconKeys; args: IconProps }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      key={iconName}
      className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded relative"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(`<Icon name="${iconName}" />`);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        } catch (error) {
          console.error('Clipboard copy failed', error);
        }
      }}>
      <Icon {...args} name={iconName} />
      {copied && (
        <span className="bg-gray-300 p-[5px] rounded-lg absolute top-0 left-0 flex justify-center items-center text-blue-700 mt-2 ml-8 text-blue text-sm font-medium animate-fadeIn">
          Copied!
        </span>
      )}
      <span className="text-gray-600">{iconName}</span>
    </div>
  );
};

export const IconsList: Story = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchKeyword, setSearchKeyword] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const filteredIcons = useMemo(() => {
      return allIcon.filter((iconName) => iconName.toLowerCase().includes(searchKeyword.toLowerCase()));
    }, [searchKeyword]);

    return (
      <div>
        <div>
          <input
            style={{ width: 250, border: '1px solid #ddd', padding: '8px 12px', borderRadius: 8 }}
            type="text"
            placeholder="Search icons"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
        </div>

        <div className="mt-8 grid gap-8 grid-cols-[repeat(auto-fill,minmax(25%,1fr))]">
          {filteredIcons.map((iconName, key: number) => (
            <GetElementIcon key={key} iconName={iconName} args={args}></GetElementIcon>
          ))}
        </div>
      </div>
    );
  },
};

export const IconVariantSize: Story = {
  args: {
    name: 'default',
  },
  render: (args) => {
    const sizeList: IconSize[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

    return (
      <div className="mt-8 grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {sizeList.map((size: IconSize) => (
          <div
            key={size}
            className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => navigator.clipboard.writeText(`<Icon name="${args.name}" size="${size}" />`)}>
            <Icon {...args} size={size} />
            <span className="text-gray-600">{size}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const IconVariantColor: Story = {
  args: {
    name: 'default',
  },
  render: (args) => {
    return (
      <div className="mt-8 grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {allColor.map((color: ColorsKeys) => (
          <div
            key={color}
            className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => navigator.clipboard.writeText(`<Icon name="${args.name}" color="${color}" size="md" />`)}>
            <Icon {...args} color={color} size="md" />
            <span className="text-gray-600">{color}</span>
          </div>
        ))}
      </div>
    );
  },
};
