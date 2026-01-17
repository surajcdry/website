'use client'
import Link from 'next/link'
import { useState } from 'react'

export function Nav() {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <nav className="flex items-center gap-6">
            <Link
                href="/blog"
                className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
                Blog
            </Link>

            <Link
                href="/about"
                className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
                About
            </Link>

            <Link
                href="/now"
                className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
                Now
            </Link>

            <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                <button className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors pb-2">
                    Links
                </button>

                {showDropdown && (
                    <div className="absolute right-0 top-full pt-2">
                        <div className="w-40 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 py-2 z-10">
                            <Link
                                href="/autowallx"
                                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                            >
                                Autowallx
                            </Link>
                            <Link
                                href="/podcast"
                                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                            >
                                Podcast
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
