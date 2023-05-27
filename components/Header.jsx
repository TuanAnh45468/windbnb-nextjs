import Image from "next/image";
import { Search } from "./Search";

export const Header = (props) => {
  return (
    <div className={"grid mobile:gap-y-[39px]"}>
      <Image
        src={"/images/logo.svg"}
        alt={"logo"}
        width={96}
        height={19}
      ></Image>
      <Search {...props} className={"justify-self-center"}></Search>
    </div>
  );
};
