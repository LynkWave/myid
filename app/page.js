import { Compart } from '@/app/component/compart'
// import "../app/globals.css";

import Content from '@/app/component/content'
import Statics from '@/app/component/statics'
import { Container, Box } from '@mui/material'

export default function Home() {
  return (
    <Box>
      <Content />
      {/* <Statics /> */}
      <Compart />
    </Box>

  )
}
