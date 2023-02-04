import React from "react";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";

type Props = {
  params: { category: string };
};
async function page({ params: { category } }: Props) {
  const news = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default page;

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat,
  }));
}
