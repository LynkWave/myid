import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const page = () => {
    return (

        <Box sx={{ mt: '6rem' }}>
            <Container >
                <h7>
                    Key Technological Components
                </h7>

            </Container>
            <Container sx={{ mt: '4rem', display: 'flex', flexDirection: "row", }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}> User agent </Typography>
                    <img width={"200"} height={"150"} style={{ borderRadius: '50px', opacity: '0.8' }} src="/userAgent.jpeg" alt="content" />
                    <Container>
                        <h5>
                            This could be a browser, mobile app, or other web client that facilitates communication between holders, issuers, and verifiers of digital identities.
                        </h5>
                    </Container>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#021A2F', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}>
                        Universal Resolver
                    </Typography>
                    <img width={"200"} height={"150"} style={{ borderRadius: '50px', opacity: '0.8' }} src="/universalResolver.jpeg" alt="content" />
                    <h5>
                        This server hosts a modular system of DID Method drivers, allowing for the discovery and resolution of DIDs across any decentralized system.
                    </h5>
                </Box>
            </Container>
            <Container sx={{ mt: '4rem', display: 'flex', flexDirection: "row", }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#021A2F', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>

                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}>
                        Universal Registrar
                    </Typography>
                    <img width={"200"} height={"150"} style={{ borderRadius: '50px', opacity: '0.8' }} src="/univarsalRegistrar.jpeg" alt="content" />
                    <h5>
                        This MYID server facilitates the registration of DIDs across any decentralized system that supports a compatible driver through its unique method.
                    </h5>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'black', opacity: '0.7', borderRadius: '1rem', padding: '1rem' }}>
                    <Typography variant='h4' color={"GrayText"} mb={'0.6rem'}>
                        Identity Hubs
                    </Typography>
                    <img width={"200"} height={"150"} style={{ borderRadius: '50px', opacity: '0.8' }} src="/Identityub.jpeg" alt="content" />
                    <h5>
                        These secure datastores manage the storage of encrypted and signed data, and relay messages to devices linked to the identity.
                    </h5>
                </Box>

            </Container>

        </Box>
    )
}

export default page
