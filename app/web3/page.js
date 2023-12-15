import { Container, Typography, Box } from '@mui/material'
import React from 'react'

const web3 = () => {
    return (
        <Box sx={{ mt: '6rem' }}>
            <Container >
                <h7>
                    MYID for Web 3.0
                </h7>

            </Container>
            <Container sx={{ mt: '4rem', display: 'flex', flexDirection: { xs: "column", md: 'row' } }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}> Cross-chain Identity </Typography>
                    <Container>
                        <h5>
                            This cross-chain identity acts as a first-order logic, enabling identity validation, accreditation, and single sign-on functionality. This process completes the gaps in pseudo-anonymous networks and is crucial for the development of DApps in Web 3.0.                    </h5>
                    </Container>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#021A2F', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}>
                        DID Aggregation
                    </Typography>
                    <h5>
                        DID aggregation is the integration of digital identities from multiple networks, aligning with the W3C standard. While integrating identities across diverse decentralized systems with varying DID standards, privacy is preserved, and the application scenarios are expanded. This approach aids in situations requiring identity data, such as KYC, credit scores, or credentials.
                    </h5>
                </Box>
            </Container>
            <Container sx={{ mt: '4rem', display: 'flex', flexDirection: { xs: "column", md: 'row' } }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#021A2F', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>

                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}>
                        Reliable Data
                    </Typography>
                    <h5>
                        Reliable DID data faces issues like a lack of data sources, APIs for data registry interaction, standardization in DID methods and data formats, and the risk of single-point failures from centralized service endpoints. Many decentralized applications repeatedly develop their own DID mechanisms, diverting resources from their main goals.
                    </h5>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}>
                        Interoperable
                    </Typography>
                    <h5>
                        As the volume of data in decentralized systems increases, it is vital to create a connection that allows data flow across different platforms while preserving user privacy and data sovereignty, reflecting the core value of Web3. MYID technology provides the infrastructure to enable data indexing and retrieval, facilitating the growth and adoption of DID.
                    </h5>
                </Box>

            </Container>

        </Box>
    )
}

export default web3