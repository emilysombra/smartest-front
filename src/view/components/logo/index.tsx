import { LogoContainer, LogoImage } from "./style";
import logo from '../../../resources/logo.png'

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt='logo' 
                className="logo-img"
                />
        </LogoContainer>
    )
}