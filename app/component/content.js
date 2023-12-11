import { Box, Button, Container } from '@mui/material'
import React from 'react'

const Content = () => {
    return (

        <Box sx={{
            marginTop: '20vh',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
        }}>
            <Box sx={{ maxWidth: '70vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <h7>Decentralized </h7>
                    <h7>Identity-Solution</h7>
                </Box>
                <Box sx={{ bgcolor: 'black', opacity: '0.4', borderRadius: '2rem', padding: '0.8rem', marginBottom: '0.6rem' }}>
                    <h5>MYID is a Decentralized Identity Aggregator that links user identities across multiple decentralized networks. It offers dApps a reliable method for acquiring real-time digital identity data across various blockchains and dApps. With its DID indexing protocol and Substrate-built distributed DID validation blockchain, MYID provides a decentralized service that validates identity aggregation, eliminating redundant code and the difficulties of dealing with unknown DID mechanisms. Users can construct and submit their DID methods to MYID, simplifying access to identity data in Web3. </h5>
                </Box>

                <a className="text-indigo-500 inline-flex items-center mt-4" href='https://myid-1.gitbook.io/web3/'><Button variant='outlined' color='error'   >Read More</Button></a>
            </Box>

            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <img width={"500"} height={"400"} style={{ borderRadius: '500px', opacity: '0.4' }} src="digitalEe.jpeg" alt="content" />
            </Container>

        </Box>
    )
}

export default Content
