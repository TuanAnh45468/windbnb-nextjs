import Image from 'next/image'
import {Header} from "../../components/Header";
import {HomeCard} from "../../components/HomeCard";

export default function Home() {
  return (
    <main className="mt-[19px] mx-[12px] w-[350px]">
      <Header></Header>
        <section className={"mt-[37px]"}>
            <HomeCard></HomeCard>
        </section>
    </main>
  )
}
