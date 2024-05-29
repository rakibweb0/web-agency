import React from 'react'
import Container from './Container'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-cover min-h-[600px] w-full pt-[245px] pb-[118px]'>
        <Container>
            <h1 className='hero-title mb-[18px]'>Empowering <span className=' text-primary'>Your Digital</span> Presence in Bangladesh</h1>
            <p className='text-center text-fontClamp18 mb-[48px]'>Expert Web Design Services Tailored for Your Business Success</p>
            <div className='w-fit mx-auto'>
                <Button label="Book A Call" url='/' icon={true}/>
            </div>
        </Container>
    </div>
  )
}

export default Hero