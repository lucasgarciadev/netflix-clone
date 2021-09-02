import React from 'react';

import { HeaderArea } from './styled';

export default ({black}) => {
    return(
        <HeaderArea className={black ? 'black' : ''} >
            <div className="header--logo" >
                <a href="/" >
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
                </a>
                
            </div>
            <div className="header--user" >
                <a href="/" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo" />
                </a>
                
            </div>
        </HeaderArea>
    );
}