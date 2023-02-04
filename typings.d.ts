export type Article={
    author:string|null;
    category:string;
    country:string;
    description:string;
    image:string|null;
    language:string;
    published_at:string;
    source:string;
    title:string;
    url:string;
}

export type Pagination={
    count:Int16Array;
    limit:Int16Array;
    offset:Int16Array;
    total:Int16Array;
}
export type NewsResponse = {
    pagination: Pagination;
    data:Article[];

}