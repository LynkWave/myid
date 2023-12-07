import { Box, Button, Container } from '@mui/material'
import React from 'react'

const Content = () => {
    return (

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ maxWidth: '50vh', marginTop: '10vh' }}>

                <h2>Decentralized </h2>
                <h2>Identity-Solution</h2>

                <h4>MYID is a Decentralized Identity Aggregator that links user identities across multiple decentralized networks. It offers dApps a reliable method for acquiring real-time digital identity data across various blockchains and dApps. With its DID indexing protocol and Substrate-built distributed DID validation blockchain, MYID provides a decentralized service that validates identity aggregation, eliminating redundant code and the difficulties of dealing with unknown DID mechanisms. Users can construct and submit their DID methods to MYID, simplifying access to identity data in Web3. </h4>
                <a className="text-indigo-500 inline-flex items-center mt-4" href='https://myid-1.gitbook.io/web3/'><Button variant='contained'  >Read More</Button></a>
            </Box>
            <Container className='flex-grow'>
                <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3"></h2>
                <nav className="flex flex-wrap list-none -mb-1">
                    <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800" href='https://myid-1.gitbook.io/web3/the-problem-in-web3.0-id' target='/blank'>Problem</a>
                    </li>
                    <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800" href='https://myid-1.gitbook.io/web3/data-in-myid' target='/blank'>Data</a>
                    </li>
                    <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800" href='https://myid-1.gitbook.io/web3/economic-model' target='/blank'>Economics</a>
                    </li>
                    <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800" href='https://myid-1.gitbook.io/web3/technology-path' target='/blank'>Techology</a>

                    </li>

                </nav>
            </Container>

        </Box>
    )
}

export default Content
