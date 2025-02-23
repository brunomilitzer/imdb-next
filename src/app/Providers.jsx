'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from "react";

export default function Providers( { children } ) {
    const [ mounted, setMounted ] = useState( false );

    useEffect( () => {
        setMounted( true );
    }, [] );

    if ( !mounted ) {
        return (
            <div className="min-h-screen select-none transition-colors duration-300">
                { children }
            </div>
        );
    }

    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div
                className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
                { children }
            </div>
        </ThemeProvider>
    );
}