import React from 'react';
import type { Preview } from '@storybook/react';
import { Poppins } from 'next/font/google';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/app/globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});

export const globalTypes = {};

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <main className={`block w-full text-black ${poppins.className}`}>
          <div id="portal-root"></div>
          <Story />
        </main>
      );
    },
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
