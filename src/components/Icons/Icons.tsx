// Libraries
import Image from "next/image";

// Types
import type { LucideProps } from "lucide-react";

// Assets
import Logo from "@/assets/images/logo.png";
import LogoTransparent from "@/assets/images/logo_transparent.png";

export const Icons = {
  logo: (props: any) => <Image {...props} src={Logo} alt="logo" />,
  logoTransparent: (props: any) => (
    <Image {...props} src={LogoTransparent} alt="logo" />
  ),
};
