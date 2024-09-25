import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../../models/grid";
import { getCareerItem, getCourseItem } from "../../../controller/http_client";
import { BlogItemParams, BlogItemProps } from "../../../models/blog";
import { BlogContent, BlogPostContainer, BlogReference, BlogTitle } from "./style";
import { AppContainer } from "../../../styles/global";

export default function BlogItem({type='careers'}: BlogItemProps){
    const {id = ""} = useParams<BlogItemParams>()
    // state
    const [item, setItem] = useState<Item>({})

    // hooks
    useEffect(() => {
        if(type == 'courses')
            getCourseItem(setItem, id)
        else
            getCareerItem(setItem, id)
    }, [])

    return (
        <AppContainer>
            <BlogPostContainer>
                <BlogTitle>{item.title}</BlogTitle>
                <BlogContent>
                    <p>{item.description}</p>
                </BlogContent>
                
                <BlogReference>
                    <p><a href={item.reference} target="_blank">Quer saber mais?</a></p>
                </BlogReference>   
            </BlogPostContainer> 
        </AppContainer>
            
    )
}