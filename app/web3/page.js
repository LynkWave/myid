import { Container, Typography } from '@mui/material'
import React from 'react'

const web3 = () => {
    return (
        <Container sx={{ mt: '10rem' }}>
            <Typography color={'white'}>
                A cross-chain identity, where a user combines identities from different chains into one, is a key requirement for Web 3.0. By quantifying the collected on-chain data of linked identities, users can provide a cross-chain identity as a unique logic for different networks and DApps, enabling dedicated graded services/functions.


                This cross-chain identity acts as a first-order logic, enabling identity validation, accreditation, and single sign-on functionality. This process completes the gaps in pseudo-anonymous networks and is crucial for the development of DApps in Web 3.0.

                DID aggregation is the integration of digital identities from multiple networks, aligning with the W3C standard. While integrating identities across diverse decentralized systems with varying DID standards, privacy is preserved, and the application scenarios are expanded. This approach aids in situations requiring identity data, such as KYC, credit scores, or credentials.

                However, the fragmented nature of identity data creates challenges when attempting to introduce broader scenarios, like credit lending in DeFi, reputation in chain governance, and decentralized algorithms in social media.

                Reliable DID data faces issues like a lack of data sources, APIs for data registry interaction, standardization in DID methods and data formats, and the risk of single-point failures from centralized service endpoints. Many decentralized applications repeatedly develop their own DID mechanisms, diverting resources from their main goals.
            </Typography>
        </Container>
    )
}

export default web3
