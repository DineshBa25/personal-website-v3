import React, { useEffect, useState } from 'react';

export function Footer() {
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/DineshBa25/personal-website-v3/commits')
            .then(response => response.json())
            .then(data => {
                const latestCommitDate = data[0].commit.author.date;
                // @ts-ignore
                setLastUpdated(new Date(latestCommitDate).toLocaleDateString());
            });
    }, []);

    return (
        <footer className="w-full text-center p-4 pin-b text-gray-200">
            Custom designed & built by Dinesh
            {lastUpdated && <p>Last updated: {lastUpdated}</p>}
        </footer>
    );
}