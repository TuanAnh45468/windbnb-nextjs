'use client'
import Image from "next/image";
import data from "../stays.json";
import {useState} from "react";

export const Search = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleOptionChange = (event) =>{
    setSelectedOption(event.target.value)
  }

  const handleInputChange = (event) =>{
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    props.onSearch(selectedOption, inputValue)
  }

  return (
    <div className={`${props.className}`}>
      <form onSubmit={handleSubmit}>
        <div
          className={"w-[297px] h-[55px] flex items-center justify-self-center"}
        >
          <select
            className={"font-mulish text-sm leading-[17.57px] font-light"}
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value={""}>Choose Place</option>
            <option value={"Helsinki"}>Helsinki, Finland</option>
            <option value={"Turku"}>Turku, Finland</option>
            <option value={"Vaasa"}>Vaasa, Finland</option>
            <option value={"Oulu"}>Oulu, Finland</option>
          </select>

          <label htmlFor={"add-guest"} className={"ml-auto"}>
            <input
              id={"add-guest"}
              className={"block w-[74px] h-[18px]"}
              placeholder={"Add guests"}
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <button className={"ml-[35px]"}>
            <Image
              src={"images/search.svg"}
              alt={"search"}
              width={17.05}
              height={17.06}
            ></Image>
          </button>
        </div>
      </form>
    </div>
  );
};
