import React from 'react';
import Tilt from 'react-tilt'; 
import logo from './icon.png';
import './logo.css';

const Logo = () => {
    return (
      <div className='ma4 mt0'>
          <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 80, width: 80, borderRadius:'100px' }} >
            <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}}src={logo} alt='logo'/></div>
          </Tilt>
      </div>
    )
}

export default Logo
