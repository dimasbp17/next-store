import Link from "next/link";
import React from "react";
import {
    HeartIcon,
    ShoppingCartIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
    return (
        <>
            <div className='flex justify-center bg-black w-full '>
                <div className=' md:flex items-center text-white text-[9px] md:text-sm md:space-x-4 py-3'>
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery
                        - OFF 50%!
                    </p>
                    <Link href='#' className='underline'>
                        ShopNow
                    </Link>
                </div>
            </div>
            <nav className='flex justify-between items-center bg-white shadow border px-[135px] pt-12 pb-4'>
                <div>
                    <h1 className='text-2xl font-bold'> Exclusive</h1>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-12 font-medium'>
                        <Link href='/'>
                            <li className='focus:underline hover:underline'>
                                Home
                            </li>
                        </Link>
                        <Link href='#'>
                            <li className='focus:underline hover:underline'>
                                Contact
                            </li>
                        </Link>
                        <Link href='#'>
                            <li className='focus:underline hover:underline'>
                                About
                            </li>
                        </Link>
                        <Link href='#'>
                            <li className='focus:underline hover:underline'>
                                Sign Up
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='relative flex items-center text-[#9CA3AF] focus-within:text-gray-600'>
                        <input
                            className='rounded bg-[#F5F5F5] px-4 pr-5 py-1 appearance-none'
                            type='search'
                            placeholder='What are you looking for?'
                        />
                    </div>

                    <HeartIcon className='h-6 w-6 text-gray-500' />
                    <ShoppingCartIcon className='h-6 w-6 text-gray-500' />
                </div>
            </nav>
        </>
    );
};

export default Header;
