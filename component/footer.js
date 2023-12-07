import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookIcon from '@mui/icons-material/Book';
import { Box, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            marginTop: '2vh',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%', // You can adjust the width as needed
            // Add other styles as needed
        }}>
            <Box sx={{ marginLeft: '5vh' }}>
                <h5>© 2020 MYID
                    <a href="" rel="noopener noreferrer" target=""> -By LynkWave Tech & Design</a></h5>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                </span>
            </Box  >
            <Box sx={{ marginRight: '5vh' }}>
                <a href="https://twitter.com/MYID2022" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon size={25} style={{ color: 'white' }} />
                </a>
                <a href="http://t.me/MYIDweb3" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon size={25} style={{ color: 'white' }} />
                </a>
                <a href="https://myid-1.gitbook.io/web3/" target="_blank" rel="noopener noreferrer">
                    <BookIcon size={25} style={{ color: 'white' }} />
                </a>
                <a href="https://gitbook.com/@your-gitbook" target="_blank" rel="noopener noreferrer">
                    <faMediumM />
                </a>
            </Box>

        </Box>
    )
}

export default Footer

