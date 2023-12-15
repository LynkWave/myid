import React from 'react'
import { Typography, Container } from '@mui/material'

const about = () => {
    return (
        <Container sx={{ mt: '10rem' }}>
            <Typography color={'white'}>
                MYID is a Decentralized Identity Aggregator that links user identities across multiple decentralized networks. It offers dApps a reliable method for acquiring real-time digital identity data across various blockchains and dApps. With its DID indexing protocol and Substrate-built distributed DID validation blockchain, MYID provides a decentralized service that validates identity aggregation, eliminating redundant code and the difficulties of dealing with unknown DID mechanisms. Users can construct and submit their DID methods to MYID, simplifying access to identity data in Web3.
            </Typography>
        </Container>
    )
}

export default about
