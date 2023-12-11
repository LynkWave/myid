import { Container } from '@mui/material'
import React from 'react'

const Statics = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <div>
                <h4>20K</h4>
                <p>Users</p>
            </div>
            <div>
                <h4>60K</h4>
                <p>Subscribes</p>
            </div>
            <div>
                <h4>1.3K</h4>
                <p>Downloads</p>
            </div>
        </Container>
    )
}

export default Statics
