/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Image from "next/image"
import Link from "next/link"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Marquee from "react-fast-marquee";

import degate from '@assets/degate.svg'
import square from '@assets/20square.svg'
import wovlabs from '@assets/wovlabs.svg'

import spaghett from '@assets/spaghetteth.png'
import wehub from '@assets/wehub.svg'
import mego from '@assets/mego.svg'
import mood from '@assets/mood.svg'
import gate from '@assets/gate.svg'
import nexlabs from '@assets/nexlabs.webp'
import hg from '@assets/hg.png'
import evLabs from '@assets/ev labs.webp'
import niftyz from '@/assets/Niftyz.webp'

import how from '@assets/how.png'
import sc from '@assets/sc.webp'
import cryptorama from '@assets/cryptoroma.webp'
import agora from '@assets/CryptoAgora.webp'
import alberto from '@assets/AlbertoGarlaschi.webp'
import mz from '@assets/mz-master-crypto.webp'
import xb from '@assets/0xB.webp'
import cem from "@assets/cem.webp"
import be from "@assets/BE.webp"
import defi from "@assets/DeFi-Italia.webp"
import onchain from '@assets/newOnchain.svg'
import hrc from '@assets/HRC.webp'
import spazio from "@assets/svgSpazio.svg"
import mc from '@assets/MC.svg'
import podcast1 from '@assets/2140 logo svg.svg'
import ch from '@assets/Logo CryptoPub (1).png'
import breaking from '@assets/Crypto-Breaking-News-Logo-Social-Profile.webp'
import ETHKL from '@assets/ETHKL.png'
import singapore from '@assets/ETH SG 2024.svg'
import bratislava from '@assets/ETHBratislava black.svg'
import ethmilan from '@assets/ethmilan.svg'
import bucharest from '@assets/BucharestBlack.svg'
import canal from '@assets/canal.svg'
import { useTranslation } from "react-i18next";

function Family() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { t, i18n } = useTranslation();
    return (
        <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-32">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {t('familyTitle')}
            </h5>
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 col-span-8 lg:auto-rows-auto lg:w-10/12 items-center justify-center w-full h-fit relative my-4">
                <Link href="https://www.ethkl.org/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${ETHKL.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "55% 50%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://ethereumsingapore.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${singapore.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "60% 65%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.ethbratislava.com/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bratislava.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "60% 65%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.ethmilan.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${ethmilan.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "100% 110%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.ethbucharest.xyz/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${bucharest.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "70% 100%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>
                <Link href="https://www.cryptocanal.org/" target="_blank" className="p-0 w-full h-fit flex">
                    <div className="w-full h-28" style={{
                        backgroundImage: `url('${canal.src}')`,
                        backgroundPosition: "center",
                        backgroundSize: "60% 65%",
                        backgroundRepeat: "no-repeat"
                    }}></div>
                </Link>


            </div>
            <div className="w-full h-fit block lg:hidden">
                <Carousel className="w-full h-fit block lg:hidden" showDots={false} renderDotsOutside renderButtonGroupOutside swipeable autoPlay arrows={false} infinite responsive={responsive}>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethkl.org/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${ETHKL.src}')`
                                        }}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://ethereumsingapore.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${singapore.src}')`
                                        }}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethbratislava.com/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-150 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${bratislava.src}')`
                                        }}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethmilan.xyz/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${ethmilan.src}')`
                                        }}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.ethbucharest.xyz/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${bucharest.src}')`
                                        }}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center justify-center">
                        <div className="w-10/12 flex flex-col items-center justify-center">
                            <div className="w-full flex-grow flex flex-col items-center justify-center" >
                                <Link href={'https://www.cryptocanal.org/'} target="_blank" className="w-full h-full">
                                    <div className="w-full h-full flex flex-row items-center justify-center py-10 px-16  bg-white border-4 border-[#eddb55]">
                                        <div className="w-28 h-20 scale-[2] invert bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url('${canal.src}')`
                                        }}></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </div>

        </section>
    )
}

export default Family