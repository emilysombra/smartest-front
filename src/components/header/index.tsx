import { Link } from "react-router-dom";
import Logo from "../logo";
import { HeaderContainer } from "./style";

export default function Header() {
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
        </HeaderContainer>
    )
}