// src/app/about/page.js
"use client"; // 👈 標記整個頁面為 Client Component

import Button from "@/component/Button";
import "./page.css";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export default function AboutPage() {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 500);
  function test() {
    console.log(query);
  }
  useEffect(() => {
    if (debounceQuery) {
      console.log(query);
    }
  }, [debounceQuery]);
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold title-bg">About Shong</h1>
      <p className="mt-4 text-lg test">
        This is the about page built with Next.js!
      </p>
      <div style={{color: query?'red':'green'}}>dffdddddf</div>
      <Button text="test" onClick={test}>
        dsadsdd
      </Button>
      <input tpye="test" onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}
