import { Link } from "react-router-dom";
import Logo from "../logo";
import { HeaderContainer } from "./style";
import MenuItem from "../menu_item";

export default function Header() {
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <Link to="/chat">
                <MenuItem />
            </Link>
        </HeaderContainer>
    )
}