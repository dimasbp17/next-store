import React from 'react';
import Image from 'next/image';
import ps from '../../../public/assets/ps.svg';

const CardProduct = () => {
    return (
        <>
            <div className="w-full grid grid-cols-5 gap-5">
                <div className="border border-black">
                    <div className="bg-[#F5F5F5] p-3 h-[250px] border border-red-500 justify-between">
                        <div className="text-center h-[26px] bg-[#DB4444] text-white rounded-[4px] p-1 text-xs w-[55px]">-40%</div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={ps}
                                width={150}
                                height={150}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <button className="flex items-baseline bg-black w-full text-white py-2">kkk</button>

                    <div className="flex flex-col gap-3 p-3">
                        <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
                        <p>
                            <span>$120</span>
                            <span>$160</span>
                        </p>
                        <div className="flex">
                            <p>bin</p>
                            <p>bin</p>
                            <p>bin</p>
                            <p>bin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardProduct;
