import { useParams } from 'react-router-dom';


export default function Search(){
    const { query } = useParams();


    
    return(
        <>
            <h1>Query :{query}</h1>
        </>
    )
}