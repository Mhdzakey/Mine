import axios from 'axios';
import React, { useEffect, useState } from 'react';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const UseGif = (tag) => {
    const [gif, setGif] = useState(" ");
    const [loading,setLoading] = useState(false);
   

    async function fetchData(tag) {
        setLoading(true);
        try {
            const { data } = await axios.get(tag ? `${url}&tag` :url);
            const imageSource = data.data.images.downsized_large.url;
            console.log(imageSource);
            setGif(imageSource);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

 
    return {gif, loading, fetchData}
   
};

export default UseGif;
