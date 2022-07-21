// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [images, setImages]=useState([]);
    const [isloaded, setIsLoaded]=useState(false);
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            setImages(data.message);
            setIsLoaded(true);
        })
    },[])

    if(!isloaded) return <p>Loading...</p>
        return (<img src={images} alt="A Random Dog"></img>)
}

export default App