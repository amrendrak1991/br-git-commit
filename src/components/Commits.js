import React, { useState, useEffect } from 'react';
import Commit from "./Commit";

function Commits() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repos/amrendrak1991/br-git-commit/commits?per_page=10&sha=dee5a797c38127d852543d76bce59529e3940636")
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
            {items.length && items.map((commit)=>{
                return <Commit data={commit}/>
            })}
        </div>
    );
}

export default Commits;