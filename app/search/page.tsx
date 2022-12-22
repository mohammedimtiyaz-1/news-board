import { NewsResponse } from "../../../typings";
import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams: { term: string };
};
async function SearchPage({ searchParams }: Props) {
  console.log("search param", searchParams);
  let news: NewsResponse = await fetchNews("general", searchParams.term, true);
  console.log("Search params", searchParams);

  return (
    <div>
      <h1 className="headerTitle"> Search Results for : {searchParams.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
