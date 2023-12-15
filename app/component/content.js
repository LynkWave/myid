import React from 'react'
import { Box, Button, Container } from '@mui/material'
import Typography from '@mui/material/Typography';
const { default: Link } = require("next/link")


const Content = () => {
    return (

        <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: "600px", m: '1rem' }}>
            <Box sx={{ maxWidth: '40vh', marginTop: '18vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h2"
                        data-aos="flip-up"
                        data-aos-once="true"
                        data-aos-duration="1500"
                        data-aos-delay="100"
                        sx={{ color: 'white' }}
                    >Decentralized </Typography>
                    <Typography variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 'lg',
                            width: 'full',
                            display: 'inline',
                            whiteSpace: 'nowrap',
                            color: 'white'
                        }}
                        data-aos="flip-up"
                        data-aos-once="true"
                        data-aos-duration="1500"
                        data-aos-delay="400"
                    >Identity-Solution</Typography>
                </Box>
                <Box
                    sx={{ pt: '10px', width: "60vh", display: 'flex', flexDirection: 'column' }}
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-duration="1500"
                    data-aos-delay="700"
                >
                    <h5>The essence of Decentralized-ID is in creating open standards for a privacy preserving internet-wide identity layer. MYID is a Decentralized Identity Aggregator that links user identities across multiple decentralized networks.</h5>
                    {/* <a className="text-indigo-500 inline-flex items-center mt-4" href='https://myid-1.gitbook.io/web3/'><Button variant='outlined' color='error'   >Read More</Button></a> */}
                    <Container className='flex-grow'>
                        <Button variant="contained" href='https://idhub.litentry.io/my-identity' target='_blank'
                            sx={{
                                mt: '2rem', textAlign: 'center', padding: "1rem", height: '2.5rem', textTransform: "none", bgcolor: "#084B8A"
                            }}>
                            <Typography variant="h6" fontWeight={"bold"}>Launch App</Typography>
                        </Button>
                    </Container>
                </Box>

            </Box>
        </Box>
    )
}

export default Content
