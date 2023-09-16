import logoImage from "@/utils/MediaUtils/Images/logo.png"
import Image from "next/image"

export const CommonApplicationLogo = () => {
    return (
        <span className="">
            <Image src={logoImage} width={100} height={20} alt={"Logo"}/>
        </span>
    )
}