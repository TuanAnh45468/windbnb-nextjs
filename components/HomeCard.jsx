import Image from "next/image";

export const HomeCard = (props) => {
  return (
    <div className={"grid mobile:grid-cols-1 desktop:grid-cols-3 desktop:justify-items-end mobile:gap-y-[32px] font-montserrat"}>
      <div className={"flex desktop:col-start-1 desktop:col-span-3 desktop:w-full"}>
        <span className={"font-bold text-lg desktop:ml-[64px]"}>Stays in Finland</span>
        <span className={"text-sm font-medium ml-auto"}>{props.totalStays}+ stays</span>
      </div>
      {props.data.map((item) => (
        <div key={item.title} className={"flex flex-col"}>
          <Image
            src={item.photo}
            width={350}
            className={"rounded-2xl mb-[13.29px]"}
            height={238.35}
            alt={item.title}
          ></Image>
          <div className={"flex items-center mb-[11.54px]"}>
            {item.superHost && (
              <div
                className={
                  "w-[88.61px] h-[24.81px] rounded-full mr-[9.75px] flex items-center justify-center border border-black"
                }
              >
                <span className={"font-bold text-[10px]"}>
                  {item.superHost && "SUPER HOST"}
                </span>
              </div>
            )}

            <span className={"text-[12px] font-medium text-light-gray"}>
              {item.type} .{item.beds} beds
            </span>

            <div className={"flex items-center gap-x-[6.31px] ml-auto"}>
              <Image
                src={"/images/star.svg"}
                alt={"Star"}
                width={13.96}
                height={14.07}
              ></Image>
              <span className={"text-[12px] font-medium text-black"}>{item.rating}</span>
            </div>
          </div>
          <div className={"text-sm font-bold"}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};
