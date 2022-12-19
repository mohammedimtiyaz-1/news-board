import { gql } from "graphql-request";
const fetchNews = async (
  categories?: string,
  keywords?: String,
  isDynamic?: boolean
) => {
  // console.log("params:", caterogy);
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  console.log(
    "keys-s",
    process.env.STEPZEN_API_KEY,
    "key-m",
    process.env.MEDIASTACK_API_KEY
  );

  // fetch with cache from next
  const res = await fetch(
    "https://vanadzor.stepzen.net/api/irreverent-mandrill/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey vanadzor::stepzen.net+1000::25150aa7ca35ecb447856c1e1a50549d74cd3301d7d53f7edf6d3880b71cec8a`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: "2246c230a435847e3575647761d7b784",
          categories: categories,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("gettting fresh data-20 secs");
  const newsresponses = await res.json();
  return newsresponses;
};
// stepzen import curl http://api.mediastack.com/v1/news?access_key=2246c230a435847e3575647761d7b784&sources=business,sports
export default fetchNews;
