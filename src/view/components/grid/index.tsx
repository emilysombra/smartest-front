import { GridContainer, GridItem } from "./style";
import { GridProps, Item } from "../../../models/grid";



export default function Grid({data=[]}: GridProps) {
    return (
        <GridContainer>
            {data.map((item: Item) => (
                <GridItem key={crypto.randomUUID()}>
                    {item.title}
                </GridItem>
            ))}
        </GridContainer>
    )
}