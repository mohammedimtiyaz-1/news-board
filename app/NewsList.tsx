import React from "react";
import { Article, NewsResponse } from "../typings";
import Articles from "./Article";
type Props = {
  news: NewsResponse;
};

function NewsList({ news }: any) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {news.data.myQuery.data.map(
        (article: Article) =>
          article?.image && <Articles key={article.title} article={article} />
      )}
    </main>
  );
}

export default NewsList;
