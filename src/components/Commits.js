import React, { useState, useEffect } from 'react';

function Commits() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repositories/2126244/commits?per_page=10&sha=7a8d6b19767a92b1c4ea45d88d4eedc2b29bf1fa")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log('----------------------------------------------------------------');
                    console.log(JSON.stringify(result));
                    console.log('----------------------------------------------------------------');
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div>
            <h2>Commit list</h2>
            {items.length && <h3>{JSON.stringify(items)}</h3>}
        </div>
    );
}

export default Commits;