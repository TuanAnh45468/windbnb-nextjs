import Image from "next/image";
import { Search } from "./Search";

export const Header = (props) => {
  return (
    <div className={"grid mobile:gap-y-[39px] desktop:grid-cols-2"}>
      <Image
          className={"desktop:self-center desktop:ml-[64px]"}
        src={"/images/logo.svg"}
        alt={"logo"}
        width={96}
        height={19}
      ></Image>
      <Search {...props} className={"justify-self-center desktop:justify-self-end"}></Search>
    </div>
  );
};
