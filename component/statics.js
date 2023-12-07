import { Container } from '@mui/material'
import React from 'react'

const Statics = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }} >
            <div>
                <h2>20K</h2>
                <p>Users</p>
            </div>
            <div>
                <h2>60K</h2>
                <p>Subscribes</p>
            </div>
            <div>
                <h2>1.3K</h2>
                <p>Downloads</p>
            </div>
        </Container>
    )
}

export default Statics
