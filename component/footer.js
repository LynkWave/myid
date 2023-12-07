import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookIcon from '@mui/icons-material/Book';

const Footer = () => {
    return (
        <div >
            <div sx={{ display: 'flex', justifyItems: 'between' }}>
                <div  >
                    <div sx={{}}>
                        <h5>© 2020 MYID
                            <a href="" rel="noopener noreferrer" target=""> -By LynkWave Tech & Design</a></h5>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        </span>
                    </div>
                </div>
                <nav style={{ display: 'inline-flex', marginLeft: '20rem', justifyItems: 'right' }}>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className='text-white' size={25} />
                    </a>
                    <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon size={25} />
                    </a>
                    <a href="https://medium.com/@your-medium" target="_blank" rel="noopener noreferrer">
                        <BookIcon size={25} className='text-white' />
                    </a>
                    {/* <a href="https://gitbook.com/@your-gitbook" target="_blank" rel="noopener noreferrer">
                    <FaGitBook size={32} />
                </a> */}
                </nav>

            </div>
        </div>
    )
}

export default Footer

