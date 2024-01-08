import React from 'react';
import styles from './logo.module.scss';

import { MenuLinesIco, MenuCrossIco } from '../../Assets/Svg/Menu';
import { Link } from 'react-router-dom';

const Logo = ({ handleMenu, ico ,color = 'black'}) => {
    return (
        <div id="logo" className={ico.type === 'open' ? styles.logo : styles.logo + " " + styles.logo_side_main}>
            {ico.side === 'left'
                ? <>
                  {ico.type === 'open' 
                    ? <MenuLinesIco onClick={handleMenu} />
                    : <MenuCrossIco onClick={handleMenu} /> 
                  }
                  <Link to={"/"}><h2 style={{color: color}}>MANGAFLIX</h2></Link>
                  </>
                : <>
                  <Link to={"/"}><h2 style={{color: color}}>MANGAFLIX</h2></Link>
                  { ico.type === 'close'
                    ? <MenuCrossIco onClick={handleMenu} />
                    : <MenuLinesIco onClick={handleMenu} /> 
                  }
                  </>
            }
        </div>
    );
};

export default Logo;