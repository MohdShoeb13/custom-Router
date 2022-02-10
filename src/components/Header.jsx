import React from 'react';
import Link from '../Router/Link';

const Header = () => {
  return (
<div className="w3-top">
  <div className="w3-bar w3-black w3-card">
    <Link href="/photo" className="w3-bar-item w3-button w3-padding-large w3-hide-small">photo</Link>
    <Link href="/scroll" className="w3-bar-item w3-button w3-padding-large w3-hide-small">scroll</Link>
    <Link href="/cssbox" className="w3-bar-item w3-button w3-padding-large w3-hide-small">cssbox</Link>
  </div>
</div>
  );
}

export default Header;