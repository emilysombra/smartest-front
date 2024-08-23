import { LogoContainer, LogoImage } from "./style";
import logo from '../../assets/logo.png'

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