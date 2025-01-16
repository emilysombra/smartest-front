import { MenuItemProps } from "../../../models/menu";
import { ItemMenuContainer } from "./style";

export default function MenuItem({title}: MenuItemProps) {
    return (
        <ItemMenuContainer>
            <span>{title}</span>
        </ItemMenuContainer>
    )
}