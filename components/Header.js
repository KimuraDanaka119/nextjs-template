import React from 'react';
import path from 'path';
import Link from 'next/link';

import config from '../configs/config';

const Header = () => (
  <div className="header">
    <div className="container">
      <Link href="/index" as="/">
        <a><img src={path.join(config.paths.images, 'favicon.png')} /></a>
      </Link>
      <span>Batman TV Programs</span>
    </div>
  </div>
);

export default Header;
