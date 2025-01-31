import { GridContainer, GridItem, GridSection, GridTitle } from "./style";
import { GridProps, Item } from "../../../models/grid";
import { Link } from "react-router-dom";

export default function Grid({data=[], type='courses'}: GridProps) {
    return (
        <GridSection>
            <GridTitle>{type === 'courses' ? 'Conteúdos' : 'Carreiras'}</GridTitle>
            <GridContainer>
            
            {data.map((item: Item) => (
                <Link
                    key={item.id}
                    to={`${type}/${item.id?.toString()}`}>
                    <GridItem key={item.id?.toString()}>
                        {item.title}
                    </GridItem>
                </Link>
            ))}
        </GridContainer>
        </GridSection>
    )
}
