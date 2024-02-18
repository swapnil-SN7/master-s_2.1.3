"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";


import Liveauction from "../components/Part2/Liveauction";
import Card from "../components/Card/Card";
import Image from "next/image";
import Collections from "../components/Collections/Collections";
import axios from "axios";

export default function Home() {
  const [activeSearch, setActiveSearch] = useState([]);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getAllAuctions");
      let data =await res.data.auctions;
      setAuctions(data);
      console.log(data)
    })();
  }, []);

  async function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    let name= e.target.value;
    const searchres=await axios.get(`/api/getAuctionByName/${name}`);
    let  result =searchres.data.auctions;
    console.log(result)
    // throw new Error("Function not implemented.");
  }

  return (
    <div className="home">
   
      <div className="m-7 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <Liveauction />
         
        </div>

        
          <div className="mx-auto w-[90%]">
          <Collections />
            </div>       
        
    </div>
  );
}
