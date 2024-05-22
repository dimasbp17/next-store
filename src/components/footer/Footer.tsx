import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import qrcode from '../../../public/assets/Qrcode.svg';
import appstore from '../../../public/assets/appstore.svg';
import playstore from '../../../public/assets/playstore.svg';
import facebook from '../../../public/assets/facebook.svg';
import instagram from '../../../public/assets/instagram.svg';
import linkedin from '../../../public/assets/linkedin.svg';
import twitter from '../../../public/assets/twitter.svg';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-black p-16">
                <div className=" grid md:grid-cols-5 text-white gap-6">
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">Exclusive</p>
                        <Link href="/">Subscribe</Link>
                        <p>Get 10% off your first order</p>
                        <input
                            type="text"
                            className="p-3 focus:outline-none text-white bg-black border-white border-2 rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">Support</p>
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p>Gexclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">Account</p>
                        <Link href="/">My Account</Link>
                        <Link href="/">Login / Register</Link>
                        <Link href="/">Cart</Link>
                        <Link href="/">Wishlist</Link>
                        <Link href="/">Shop</Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">Quick Link</p>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms Of Use</Link>
                        <Link href="/">FAQ</Link>
                        <Link href="/">Contactt</Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-bold">Download App</p>
                        <p>Save $3 with App New User Only</p>
                        <div className="flex gap-5">
                            <Image
                                src={qrcode}
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                            <div className="flex flex-col justify-between">
                                <Image
                                    src={playstore}
                                    width={100}
                                    alt="Picture of the author"
                                />

                                <Image
                                    src={appstore}
                                    width={100}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <Link
                                href="https://www.youtube.com/"
                                target="blank"
                            >
                                <Image
                                    src={facebook}
                                    width={30}
                                    alt="Picture of the author"
                                />
                            </Link>
                            <Link
                                href="https://www.youtube.com/"
                                target="blank"
                            >
                                <Image
                                    src={twitter}
                                    width={30}
                                    alt="Picture of the author"
                                />
                            </Link>
                            <Link
                                href="https://www.youtube.com/"
                                target="blank"
                            >
                                <Image
                                    src={instagram}
                                    width={30}
                                    alt="Picture of the author"
                                />
                            </Link>
                            <Link
                                href="https://www.youtube.com/"
                                target="blank"
                            >
                                <Image
                                    src={linkedin}
                                    width={30}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="border-[0.1px] border-slate-200 w-full my-5" />
                <p className="text-white text-center">@Copyright Next Store 2024. All right reserved</p>
            </div>
        </>
    );
};

export default Footer;
