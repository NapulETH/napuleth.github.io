import { RibbonContainer, Ribbon } from "react-ribbons";
import dynamic from 'next/dynamic'
import { useTranslation } from "react-i18next";

function DynamicRibbonSecond() {

    const { t, i18n } = useTranslation();

    return (
        <div className="w-10/12 h-fit" id="ribbonBox2">
            <RibbonContainer>
            <Ribbon
                side="left"
                type="corner"
                size="normal"
                backgroundColor="#EDDB55"
                color="#000000"
                fontFamily="Poppins"
                withStripes={true}
            >
                <span className="text-black Medium ">
                    {t('soon')}
                </span>
            </Ribbon>
            <div className="min-w-[85vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-full h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#FFFFFF] border-4 border-[#eddb55] ">


                <h5 className=" text-black Medium text-xl whitespace-nowrap">
                    {t('book')}
                </h5>
            </div>
            <Ribbon
                side="right"
                type="corner"
                size="normal"
                backgroundColor="#EDDB55"
                color="#000000"
                fontFamily="Poppins"
                withStripes={true}
            >
                <span className="text-black text-xs Medium crypto">
                    In Crypto
                </span>
            </Ribbon>
        </RibbonContainer>
        </div>
        
    )
}

export default DynamicRibbonSecond