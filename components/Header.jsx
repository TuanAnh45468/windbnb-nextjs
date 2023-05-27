import Image from "next/image";

export const Header = (props) => {
  return (
    <div className={"grid mobile:gap-y-[39px]"}>
      <Image src={"/images/logo.svg"} alt={"logo"} width={96} height={19}></Image>
        <div className={"w-[297px] h-[55px] flex items-center justify-self-center"}>
            <div className={"font-mulish text-sm leading-[17.57px] font-light"}>Helsinki, Finland</div>
                <label htmlFor={"add-guest"} className={"ml-auto"}>
                    <input id={"add-guest"} className={"block w-[74px] h-[18px]"} placeholder={"Add guest"}/>
                </label>
            <Image src={"images/search.svg"} className={"ml-[35px]"}  alt={"search"} width={17.05} height={17.06}></Image>
        </div>
    </div>
  );
};
