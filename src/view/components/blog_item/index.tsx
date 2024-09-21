import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../../models/grid";
import { getCourseItem } from "../../../controller/http_client";
import { BlogItemParams } from "../../../models/blog";

export default function BlogItem(){
    const {id = ""} = useParams<BlogItemParams>()
    // state
    const [item, setItem] = useState<Item>();

    // hooks
    useEffect(() => {
        getCourseItem(setItem, id);
    }, []);

    return (
        <h1>{id}</h1>
    )
}