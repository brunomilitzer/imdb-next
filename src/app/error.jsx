'use client';

import { useEffect } from "react";

export default function Error( {error, reset}) {

    useEffect( () => {
    }, [error] );

    return (
        <div className="text-center mt-10">
            <h1>Oops something went wrong. Please try again later.</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>Try again</button>
        </div>
    );
}