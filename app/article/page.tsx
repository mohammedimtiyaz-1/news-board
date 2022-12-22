import { notFound } from "next/navigation";
import { Article } from "../../../typings";
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams: searchparams }: Props) {
  // console.log("seachparam", searchparams);

  if (
    (searchparams && Object.entries(searchparams).length === 0) ||
    !searchparams
  ) {
    return notFound();
  }
  const article: Article = searchparams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-20 px-0 lg:px-6">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md "
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0  pb-2">{article.title}</h1>
          <div className="flex flex-col italic  font-light space-x-4">
            <h2 className="font-bold pl-4">
              By: {article?.author || "unknown"}
            </h2>
            <h2 className="font-bold pl-4">
              Source:{article.source || "unknown"}
            </h2>
            <p className="pl-4">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-8">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
