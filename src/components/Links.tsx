import React, { FC } from 'react';
import { LinksProps } from '../types/interfaces';

const Links: FC<LinksProps> = ({ tabIndex, text, dropdown }: LinksProps) => {
  return (
    <li>
      <a
        tab-index={tabIndex}
        href='#'
        className={
          dropdown
            ? 'block px-4 py-2 hover:bg-gray-100 '
            : 'block py-2 pl-3 capitalize  pr-4 hover:bg-gray-100  rounded md:bg-transparent text-gray-700 md:p-0 '
        }
        aria-current='page'
      >
        {text}
      </a>
    </li>
  );
};

export default Links;
