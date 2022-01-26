import React from 'react';
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from '@docusaurus/BrowserOnly';
import { appUrl } from '../utils';

export default function LiveCodes(props: {
  src: string;
  style?: Record<string, string>;
}): JSX.Element {
  return (
    <BrowserOnly>
      {() => (
        <iframe
          src={appUrl + props.src}
          style={{
            width: '95%',
            height: '70vh',
            borderRadius: '5px',
            border: '1px solid black',
            backgroundColor: '#fff',
            ...props.style,
          }}
          seamless
        ></iframe>
      )}
    </BrowserOnly>
  );
}
