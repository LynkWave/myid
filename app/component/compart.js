"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography';

const style = {
    borderRadius: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'black',
    color: 'white',
    boxShadow: 24,
    p: 6,
};

export const Compart = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const handleOpen = (card) => {
        setOpen(true)
        setSelectedData(card)
    };
    const handleClose = () => setOpen(false);

    const data = [
        {
            image: "/digitalEe.jpeg",
            title: "MyID1",
            subTitle: "Data Aggregation1",
            text: "Transitioning from isolated identities to an aggregated identity yields a comprehensive, representative identity image. This aggregated Decentralized Identifier (DID), compliant with W3C DID standards, can effectively tackle the problem of disparate ID registry systems that many tech companies currently face. MYID's DID aggregation creates a platform-agnostic identity system, eliminating the need for users to register accounts and developers to build new registry systems. DIDs are based on the Self-Sovereign Identity (SSI) paradigm. They can identify any subject that the DID controller wishes to identify, independent of centralized registries, identity providers, or certificate authorities. DIDs are URIs that link a DID subject with a DID document, enabling trustworthy interactions associated with that subject. Each DID document can express cryptographic material, verification methods, or service endpoints, providing mechanisms for a DID controller to demonstrate control over the DID. Service endpoints facilitate trusted interactions related to the DID subject. A DID document may contain information about the identified subject, or even the subject itself (e.g., a data model)."
        },
        {
            image: "/compart1.jpeg",
            title: "MyID2",
            subTitle: "Technology Path",
            text: "MYID utilizes several key technological components to realize its vision of decentralized identity: \n1. User agent: This could be a browser, mobile app, or other web client that facilitates communication between holders, issuers, and verifiers of digital identities. \n 2. Universal Resolver: This server hosts a modular system of DID Method drivers, allowing for the discovery and resolution of DIDs across any decentralized system. \n 3. Universal Registrar: This server facilitates the registration of DIDs across any decentralized system that supports a compatible driver. \n 4. Identity Hubs: These secure datastores manage the storage of encrypted and signed data, and relay messages to devices linked to the identity."
        },
        {
            image: "/compart2.jpeg",
            title: "MyID3",
            subTitle: "MYID for Web 3.0",
            text: "A cross-chain identity, where a user combines identities from different chains into one, is a key requirement for Web 3.0. By quantifying the collected on-chain data of linked identities, users can provide a cross-chain identity as a unique logic for different networks and DApps, enabling dedicated graded services/functions. This cross-chain identity acts as a first-order logic, enabling identity validation, accreditation, and single sign-on functionality. This process completes the gaps in pseudo-anonymous networks and is crucial for the development of DApps in Web 3.0. DID aggregation is the integration of digital identities from multiple networks, aligning with the W3C standard. While integrating identities across diverse decentralized systems with varying DID standards, privacy is preserved, and the application scenarios are expanded. This approach aids in situations requiring identity data, such as KYC, credit scores, or credentials. However, the fragmented nature of identity data creates challenges when attempting to introduce broader scenarios, like credit lending in DeFi, reputation in chain governance, and decentralized algorithms in social media. Reliable DID data faces issues like a lack of data sources, APIs for data registry interaction, standardization in DID methods and data formats, and the risk of single-point failures from centralized service endpoints. Many decentralized applications repeatedly develop their own DID mechanisms, diverting resources from their main goals. In conclusion, as the volume of data in decentralized systems increases, it is vital to create a connection that allows data flow across different platforms while preserving user privacy and data sovereignty, reflecting the core value of Web3. Blockchain technology provides the infrastructure to enable data indexing and retrieval, facilitating the growth and adoption of DID."
        },
        {
            image: "/roadmap.jpeg",
            title: "MyID4",
            subTitle: "Data in MYID",
            text: "The Original Events Data Sources Layer is where MYID collects information about users. This data comes from existing databases and services and includes contributions from outside data providers like Etherscan, The Graph, and OnFinality, among others. This original data is simply the information users create that's stored by open data registries. This includes data that can't be changed, like blockchain records. Examples of this would be the states of chains, past transactions, or events triggered by the blockchain. We can also get data from popular social media and communication platforms like Twitter, Facebook, and Discord. We're able to pull data from a variety of sources, and it's up to our data analyzers to decide where they want to get the data from. Next up is the Address Analysis Layer. This is where we take the original user data and convert it into analyzed data, which we use for Identity Aggregation. Since this process requires a lot of computational power, we handle it off the blockchain to save resources. This layer makes the process of analyzing and grouping identity data more efficient by duplicating both the organized identity data and the computational resources. Data Analyzers are independent parts of our network that perform identity analysis. These analyzers get rewards for providing accurate results. The more data analyzers we have, the more efficient and available the address analysis layer becomes. How it works: In this layer, data analyzers are motivated to complete random tasks in order to generate results for something we call the Identification Event. Using the instructions given in these events, data analyzers organize the data and provide simple calculations. Data integrity: To make sure the identity-related data is accurate, each analyzer will sign off on it. This data is then checked again in the next layer. To make sure the data is always available, each task is carried out by multiple analyzers. However, not every analyzer needs to work on every task."
        },
    ]
    return (<>
        <Box sx={{
            paddingY: '50px',
            display: 'flex',
            flexDirection: { xs: "column", md: 'column', lg: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%', // You can adjust the width as needed
            // Add other styles as needed
        }}>
            {
                data.map((card, index) => (
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        key={index}
                        onClick={() => handleOpen(card)}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', width: '300px', height: "200px", overflow: "hidden" }}>
                            <Image
                                width={300}
                                height={300}
                                data-aos="zoom-out"
                                data-aos-once="true"
                                data-aos-duration="1000"
                                data-aos-delay={index * 200}
                                // objectFit="cover"
                                style={{ borderRadius: '10px', margin: "20px", objectFit: "fill" }}
                                src={card.image}
                                alt={card.title} />
                        </Box>
                        <Typography variant="h4"
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
                            data-aos-delay={index * 200 + 100}

                        >{card.title}</Typography>
                        <Typography variant="h6"
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
                            data-aos-delay={index * 200 + 150}

                        >{card.subTitle}</Typography>
                    </Box>
                ))
            }
        </Box>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, overflowY: 'auto' }}>
                {selectedData && (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 3,
                            padding: 5
                        }}>
                        <Typography
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-duration="500"
                            // data-aos-delay={index * 200}
                            variant="h4">{selectedData.title}</Typography>

                        <Image
                            width={300}
                            height={300}
                            data-aos="zoom-out"
                            data-aos-once="true"
                            data-aos-duration="500"
                            // objectFit="fill"k
                            style={{ borderRadius: '10px', margin: "20px", objectFit: "fill" }}
                            src={selectedData.image}
                            alt={selectedData.title} />
                        <Typography
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-duration="500"
                            data-aos-delay="200"
                            variant="h6">{selectedData.subTitle}</Typography>
                        <Typography
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >{selectedData.text}</Typography>
                    </Box>
                )}
            </Box>
        </Modal>
    </>
    )
}
