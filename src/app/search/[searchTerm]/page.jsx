import { ACCESS_TOKEN } from "@/app/page";
import Results from "@/components/results/Results";

export default async function SearchPage( { params } ) {
    const searchParams = await params;

    const searchTerm = searchParams.searchTerm;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ ACCESS_TOKEN }`,
        }
    };

    const response = await fetch( `https://api.themoviedb.org/3/search/movie?query=${ searchTerm }&language=en-US&page=1&include_adult=false`, options );
    const data = await response.json();
    const results = data.results;

    return <div>
        { results && results.length === 0 && (
            <h1 className="text-center pt-6">No results found</h1>
        ) }
        {
            results && <Results results={ results } />
        }
    </div>
}