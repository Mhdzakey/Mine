import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';



const Tag = () => {
    const [tag, setTag] = useState("");
    const {gif, loading, fetchData} = UseGif(tag)



    return (
        <div className=' w-1/2 h-[750px] rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px] bg-green-500 '>
            <h1 className='text-xl underline uppercase font-bold mt-[25px]'>Random {tag}   GIF</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} alt="Random GIF" width="450" />)
            }
            <input className=' w-10/12 text-lg rounded-lg mb-[3px] py-2 text-center flex justify-center items-center'
            
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
            >
            </input>
            <button
                className='bg-white w-10/12 text-lg rounded-lg mb-[15px] py-2'
                onClick={() => fetchData(tag)}>
                Generate
            </button>
        </div>
    );
};

export default Tag;
