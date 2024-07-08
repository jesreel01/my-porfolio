import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Nav from './nav'

const Header = () => {
    return (
        <div className="rounded-2xl bg-gray-800/95 py-2 pl-2.5 pr-6 shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    title="Navigate home"
                    className={cn("rounded-full")}
                >
                </Link>

                <Nav />
            </div>
        </div>
    )
}

export default Header