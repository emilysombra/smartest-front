import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../../models/grid";
import { getCareerItem, getCourseItem } from "../../../controller/http_client";
import { BlogItemParams, BlogItemProps } from "../../../models/blog";

export default function BlogItem({type='careers'}: BlogItemProps){
    const {id = ""} = useParams<BlogItemParams>()
    // state
    const [item, setItem] = useState<Item>();

    // hooks
    useEffect(() => {
        if(type == 'courses')
            getCourseItem(setItem, id);
        else
            getCareerItem(setItem, id);
    }, []);

    return (
        <h1>{item?.title}</h1>
    )
}