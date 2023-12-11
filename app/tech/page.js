import React from 'react'
import { Container, Typography } from '@mui/material'

const page = () => {
    return (
        <Container sx={{ mt: '10rem' }}>
            <Typography color={'white'}>
                MYID utilizes several key technological components to realize its vision of decentralized identity:

                1. **User agent**: This could be a browser, mobile app, or other web client that facilitates communication between holders, issuers, and verifiers of digital identities.

                2. **Universal Resolver**: This server hosts a modular system of DID Method drivers, allowing for the discovery and resolution of DIDs across any decentralized system.

                3. **Universal Registrar**: This server facilitates the registration of DIDs across any decentralized system that supports a compatible driver.

                4. **Identity Hubs**: These secure datastores manage the storage of encrypted and signed data, and relay messages to devices linked to the identity.
            </Typography>
        </Container>
    )
}

export default page
