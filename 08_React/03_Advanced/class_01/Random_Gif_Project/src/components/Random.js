import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';


const Random = () => {
    const {gif, loading, fetchData} = UseGif();

    return (
        <div className=' w-1/2 h-[750px] rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px] bg-green-500 '>
            <h1 className='text-xl underline uppercase font-bold mt-[25px]'>A Random GIF</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} alt="Random GIF" width="450" />)
            }
            <button
                className='bg-white w-1/2 text-lg rounded-lg mb-[35px] py-2'
                onClick={()=> fetchData()}>
                Generate
            </button>
        </div>
    );
};

export default Random;
