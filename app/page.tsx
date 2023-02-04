import React from "react";
import { NewsResponse } from "../typings";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import { categories } from "../constants";

async function Homepage() {
  let news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
