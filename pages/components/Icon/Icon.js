import Image from "next/image";

function Icon({ src, alt, className, func }) {
    return <Image src={src} alt={alt} width={25} height={25} className={className} onClick={func}></Image>;
}

export default Icon;
