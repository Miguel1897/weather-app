import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Tu Empresa - Todos los derechos reservados</p>
            <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/images/avatar/1.png" />
            <Avatar alt="Travis Howard" src="/images/avatar/3.png" />
            <Avatar alt="Cindy Baker" src="/images/avatar/2.png" />
            <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" />
            </AvatarGroup>
        </footer>
    );
}

export default Footer;
