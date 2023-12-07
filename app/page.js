import Navbar from '@/component/navbar'
import { Compart } from '@/component/compart'
// import "../app/globals.css";

import Content from '@/component/content'
import Statics from '@/component/statics'
import Footer from '@/component/footer'
import { Container, Box } from '@mui/material'

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Content />
      {/* <Statics /> */}
      <Compart />
      <Footer />
    </Box>

  )
}
