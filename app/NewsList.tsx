import React from "react";
import { NewsResponse } from "../../typings";
import Article from "./Article";
type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {news.data.myQuery.data.map(
        (article) =>
          article?.image && <Article key={article.title} article={article} />
      )}
    </main>
  );
}

export default NewsList;
