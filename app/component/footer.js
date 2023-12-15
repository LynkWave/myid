import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookIcon from '@mui/icons-material/Book';
import { Box, Container, Typography, Grid } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Grid container sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // height: '200px',
                width: '100%',
                bgcolor: '#001428',
                paddingX: "20px"
            }}>
                <Grid item
                    sx={{ display: 'flex', flexDirection: 'column', marginX: '50px', textAlign: "center", justifyContent: 'center', alignItems: 'center' }} >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '50px',
                            cursor: 'pointer',
                            padding: '20px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        {/* Twitter */}
                        <div style={{ flex: 1 }}>
                            <a href="https://twitter.com/MYID2022">
                                <TwitterIcon size={25} style={{ color: 'white' }} />
                            </a>
                        </div>

                        {/* Telegram */}
                        <div style={{ flex: 1 }}>
                            <a href="http://t.me/MYIDweb3">
                                <TelegramIcon size={25} style={{ color: 'white' }} />
                            </a>
                        </div>

                        {/* GitBook */}
                        <div style={{ flex: 1 }}>
                            <a href="https://myid-1.gitbook.io/web3/">
                                <BookIcon size={25} style={{ color: 'white' }} />
                            </a>
                        </div>

                    </Box>
                    <Box sx={{ padding: "20px" }} >
                        <Typography variant='h5' sx={{ fontWeight: "bold" }} >
                            MyID
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: "thin", color: 'white' }} >
                            by LynkWave
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: "column", color: "white" }} >
                    <a style={{ fontWeight: 'bold', marginBottom: "15px" }} >Features</a>
                    <a >Security</a>
                    <a >Web3</a>
                    <a >White paper</a>
                    <a >Resources</a>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={3} xl={3} sx={{ display: 'flex', flexDirection: "column", color: "white" }} >
                    <a style={{ fontWeight: 'bold', marginBottom: "15px" }} >Explore</a>
                    <a >API</a>
                    <a >Partners</a>
                    <a >Help</a>
                    <a >Community</a>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>
                <h5> LynkWave Inc.
                    <a href="" rel="noopener noreferrer" target=""> © 2020</a></h5>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                </span>
            </Box  >
        </>

    )
}

export default Footer

