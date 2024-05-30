import React from "react";
import Image from "next/image";
import {
    offering_one,
    offering_two,
    offering_tree,
    offering_four,
} from "@/assets/index";

const CardOffering = () => {
    return (
        <>
            <div className='flex my-10 gap-5'>
                <div className='bg-[#F5F5F5] text-center py-7 px-9 rounded-lg space-y-2'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={offering_one}
                            width={100}
                            height={100}
                            alt='Picture of the author'
                        />
                    </div>
                    <p className='font-extrabold text-xl'>10.5k</p>
                    <p>Sallers active our site</p>
                </div>

                <div className='flex-col bg-[#DB4444] text-white text-center py-7 px-9 rounded-lg space-y-2'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={offering_two}
                            width={100}
                            height={100}
                            alt='Picture of the author'
                        />
                    </div>
                    <p className='font-extrabold text-xl'>33k</p>
                    <p>Mopnthly Produduct Sale</p>
                </div>

                <div className='flex-col bg-[#F5F5F5] text-center py-7 px-9 rounded-lg space-y-2'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={offering_tree}
                            width={100}
                            height={100}
                            alt='Picture of the author'
                        />
                    </div>
                    <p className='font-extrabold text-xl'>45.5k</p>
                    <p>Customer active in our site</p>
                </div>

                <div className='flex-col bg-[#F5F5F5] text-center py-7 px-9 rounded-lg space-y-2'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={offering_four}
                            width={100}
                            height={100}
                            alt='Picture of the author'
                        />
                    </div>
                    <p className='font-extrabold text-xl'>25k</p>
                    <p>Anual gross sale in our site</p>
                </div>
            </div>
        </>
    );
};

export default CardOffering;
