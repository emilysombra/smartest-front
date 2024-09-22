import { GridContainer, GridItem } from "./style";
import { GridProps, Item } from "../../../models/grid";
import { Link } from "react-router-dom";



export default function Grid({data=[], type='courses'}: GridProps) {
    return (
        <GridContainer>
            
            {data.map((item: Item) => (
                <Link
                    to={`${type}/${item.id?.toString()}`}>
                    <GridItem key={item.id?.toString()}>
                    {item.title}
                </GridItem>
                </Link>
            ))}
        </GridContainer>
    )
}