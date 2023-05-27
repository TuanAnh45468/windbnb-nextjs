'use client'
import {Header} from "../../components/Header";
import {HomeCard} from "../../components/HomeCard";
import {useState} from "react";
import data from "../../stays.json"

export default function Home() {
    const [searchResult, setSearchResult] = useState(data);
    let totalStays = searchResult.length

    const handleSearch = (selectedOption, inputValue) =>{
        const filteredData = data.filter((item) =>{
            const locationMatch = selectedOption === "" || item.city === selectedOption;
            const guestMatch = inputValue === "" || item.maxGuests >= parseInt(inputValue, 10)
            return locationMatch && guestMatch
        })
        setSearchResult((filteredData))
    }

    return (
    <main className="mt-[19px] mx-[12px] w-[350px] desktop:w-[1248px]">
      <Header onSearch={handleSearch}></Header>
        <section className={"mt-[37px]"}>
            <HomeCard data={searchResult} totalStays={totalStays}></HomeCard>
        </section>
    </main>
  )
}
