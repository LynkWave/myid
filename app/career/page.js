// pages/careers.js
import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const career = () => {
    return (
        <Container >
            <Head>
                <title>Myid - Careers</title>
            </Head>
            {/* <Typography variant="h4">
                Careers at Myid
            </Typography> */}
            <Typography variant='h2' sx={{ mt: { xs: '10rem', md: "10rem", lg: '15rem' } }}>
                We have job openings around the world
            </Typography>
            <Card sx={{ mt: '5rem', backgroundColor: 'black', opacity: '0.7', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                <CardMedia
                    component="logo.png"
                    alt="Logo"
                    height="160"
                    image="/litentry-logo.png"  // Add the path to your logo image
                />
                <CardContent >
                    <Typography variant="h5" fontWeight={"bold"} component="div" color={"white"}>
                        Why work with us?
                    </Typography>
                    <Typography variant='h7' pt={"5rem"} color={"white"}>
                        - We are seeking a talented and experienced Blockchain Developer to join our dynamic team at MYID. As a Blockchain Developer, you will be responsible for designing, implementing, and supporting blockchain solutions that power the next generation of decentralized applications.
                        Interested candidates are invited to submit their resume, cover letter, and a portfolio of relevant projects to official@myidweb3.com.
                    </Typography>
                </CardContent>
                <Button variant='outlined' sx={{ textTransform: 'none' }} href="mailto:official@myidweb3.com">email us</Button>.

            </Card>
        </Container >
    );
};

export default career;
