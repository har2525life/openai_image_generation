import React from 'react'
import Link from "next/link"

const Navigation = () => {
  return (
    <header className="border-b border-gray-600 py-5">
        <div className="container max-w-screen-xl relative flex justify-center items-center">
            <Link href="/" className="font-bold text-xl corsor-pointer text-white">
                test
            </Link>
            <div className="absolute right-5">
                <Link href="post/new">
                    <div className="text-white bg-yellow-500 hover:brightness-110 rounded py-1">
                        画像生成
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Navigation