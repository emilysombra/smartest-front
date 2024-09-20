import { useParams } from "react-router-dom";

export default function BlogItem(){
    const {id} = useParams()

    return (
        <h1>{id}</h1>
    )
}