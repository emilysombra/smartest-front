import { GridContainer } from "./style";

export default function Grid() {

    const items = ["mah oe 1",
                   "mah oe 2",
                   "mah oe 3",
                   "mah oe 4",];
    return (
        <GridContainer>
            {items.map((item) => (<div>{item}</div>))}
        </GridContainer>
    )
}