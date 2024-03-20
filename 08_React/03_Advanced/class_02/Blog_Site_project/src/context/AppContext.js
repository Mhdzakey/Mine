import { useState } from "react";
import { createContext } from "react";
import {baseUrl} from '../baseUrl'

//Step :- 1 :- Create Context
export const AppContext = createContext();

export  function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

async function fetchBlogPosts(page=1){
    
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
        const result = await fetch(url);
        const data = await  result.json(); 
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages)

    } catch (error) {
        console.log("Errpr in fetch data");
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }
    setLoading(false);
}
function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page);
}
    const value ={
        loading, setLoading, posts, setPosts, page, setPage, totalPages, setTotalPages,
        fetchBlogPosts, handlePageChange

    }

    // Step:- 2 :- Providing Context
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}