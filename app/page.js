"use client"
import { useEffect } from 'react'
import { Compart } from '@/app/component/compart'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Content from '@/app/component/content'
import Statics from '@/app/component/statics'
import { Container, Box } from '@mui/material'

export default function Home() {
  useEffect(() => {
    Aos.init({
    });
  }, []);
  return (
    <Box>
      <Content />
      <Statics />
      <Compart />
    </Box>

  )
}
