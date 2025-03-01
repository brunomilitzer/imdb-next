import Results from "@/components/results/Results";

export const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export default async function Home( { searchParams } ) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ ACCESS_TOKEN }`,
        },
        next: {
            revalidate: 36000
        }
    };

    const genre = searchParams.genre || 'fetchTrending';
    const response = await fetch(
        `https://api.themoviedb.org/3/${
            genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week` }?language=en-US&page=1`,
        options );

    const data = await response.json();

    if ( !response.ok ) {
        throw new Error( 'Failed to fetch movies.' );
    }

    const results = data.results;

    return (
        <div>
            <Results results={ results }/>
        </div>
    )
}