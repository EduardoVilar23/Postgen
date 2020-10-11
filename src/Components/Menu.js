import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import IconLogoBlack from '../assets/icon-logo-black.png';
import IconText from '../assets/logo-text-black.png';

export default function Menu() {

  const history = useHistory()
  useEffect(() => {

    setTimeout(() => {
      const text = document.getElementById('text');
      text.style.marginLeft = '-10em'
      text.style.opacity = '0'
    }, 3000);
  }, [])

  return(
    <div className="menu">
          <img src={IconLogoBlack} className="logoImg" alt="logo" onClick={() => history.push('/')} />
          <img src={IconText} id="text" className="logoText" alt="logo" onClick={() => history.push('/')} />
          <div class="pages">
            <Link to="/">
            <span>
              Início
            </span>
            </Link>
            <Link to="/pricing">
            <span>
              Preços
            </span>
            </Link>
            <Link>
            <span>
              Render
            </span>
            </Link>
          </div>
        </div>
  )
}