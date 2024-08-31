"use client"

import React from 'react'
import Header from '@/components/landingPageComponent/header'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const LandingPage: React.FC = () => {
    return(
        <>
        <div className="flex flex-col min-h-[100dvh]">
            <ThemeSwitcher />
<Header />
            </div>
        </>
    )   
}

export default LandingPage