import React from "react";
import { NewsResponse } from "../../typings";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

async function Homepage() {
  const categories: string[] = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  let news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
