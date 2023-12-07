import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookIcon from '@mui/icons-material/Book';
import { Box, Container } from '@mui/material';
import { Navigation } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box >
            <Box>
                <Box sx={{}}>
                    <h5>© 2020 MYID
                        <a href="" rel="noopener noreferrer" target=""> -By LynkWave Tech & Design</a></h5>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    </span>
                </Box>
                <Container style={{ display: 'inline-flex', marginLeft: '20rem', justifyItems: 'right' }}>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon size={25} style={{ color: 'white' }} />
                    </a>
                    <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon size={25} style={{ color: 'white' }} />
                    </a>
                    <a href="https://medium.com/@your-medium" target="_blank" rel="noopener noreferrer">
                        <BookIcon size={25} style={{ color: 'white' }} />
                    </a>
                    {/* <a href="https://gitbook.com/@your-gitbook" target="_blank" rel="noopener noreferrer">
                    <FaGitBook size={32} />
                </a> */}
                </Container>

            </Box>
        </Box>
    )
}

export default Footer

