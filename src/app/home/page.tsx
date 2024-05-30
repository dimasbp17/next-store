'use client';

import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Countdown from '@/components/countdown/Countdown';

const page = () => {
    // Atur tanggal target untuk countdown di sini
    const targetDate = '2024-06-01T00:00:00';
    return (
        <>
            <div className="px-4 lg:px-[135px]">
                {/* <div>
                    <image />
                </div> */}
                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                        <span className="text-[#DB4444] text-base font-semibold">Today’s</span>
                    </div>
                    <div className="flex gap-5 items-center">
                        <span className="font-semibold text-base lg:text-4xl">Flash Sales</span>
                        {/* <span className="font-semibold text-2xl flex">
                            <Countdown targetDate={targetDate} />
                        </span> */}
                        <span className="font-semibold text-4xl flex col-span-2 gap-2 ms-auto">
                            <button className="rounded-full size-[46px] bg-[#F5F5F5] flex justify-center items-center">
                                <ArrowLeftIcon className="h-6 w-6 text-black" />
                            </button>
                            <button className="rounded-full size-[46px] bg-[#F5F5F5] flex justify-center items-center">
                                <ArrowRightIcon className="h-6 w-6 text-black" />
                            </button>
                        </span>
                    </div>
                </div>
                <hr className="border w-full bg-gray-500 my-5" />
                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                        <span className="text-[#DB4444] text-base font-semibold">Categories</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-base lg:text-4xl">Browse By Category</span>

                        <span className="font-semibold text-4xl flex col-span-2 gap-2 ms-auto">
                            <button className="rounded-full size-[46px] bg-[#F5F5F5] flex justify-center items-center">
                                <ArrowLeftIcon className="h-6 w-6 text-black" />
                            </button>
                            <button className="rounded-full size-[46px] bg-[#F5F5F5] flex justify-center items-center">
                                <ArrowRightIcon className="h-6 w-6 text-black" />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
