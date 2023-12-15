"use client"
import React, { useEffect } from 'react';
import { Box, Button, Container } from '@mui/material'
import Typography from '@mui/material/Typography';

import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview';

const Statics = () => {
    const [inViewRef, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setIsCounting(true);
        }
    }, [inView]);
    return (
        <Container sx={{ display: 'flex', flexDirection: { xs: "column", sm: 'row' }, justifyContent: 'space-between', padding: '100px' }} >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width='250px'
                p={2}
                bgcolor="transparent"
                borderRadius={3}
                border={1}
                borderColor="white"
            >
                <CountUp end='20000' duration={4} style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }} />

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'white' }}
                >
                    Users
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width='250px'
                p={2}
                bgcolor="transparent"
                borderRadius={3}
                border={1}
                borderColor="white"
            >
                <CountUp end='13000' duration={4} style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }} />

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'white' }}
                >
                    Downloads
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width='250px'
                p={2}
                bgcolor="transparent"
                borderRadius={3}
                border={1}
                borderColor="white"
            >
                <CountUp end='60000' duration={4} style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }} />

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'white' }}
                >
                    Subscribers
                </Typography>
            </Box>
        </Container>
    )
}

export default Statics
