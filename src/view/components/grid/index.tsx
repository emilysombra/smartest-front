import { GridContainer, GridItem } from "./style";
import { GridProps, Item } from "../../../models/grid";
import { Link } from "react-router-dom";



export default function Grid({data=[]}: GridProps) {
    return (
        <GridContainer>
            
            {data.map((item: Item) => (
                <Link
                    to={`courses/${crypto.randomUUID()}`}>
                    <GridItem key={crypto.randomUUID()}>
                    {item.title}
                </GridItem>
                </Link>
            ))}
        </GridContainer>
    )
}