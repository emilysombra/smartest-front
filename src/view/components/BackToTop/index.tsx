import { BackTopProps } from "../../../models/back_top";
import { BackToTop } from "./style"

export default function BackTop({enabled, action}: BackTopProps){
    if(enabled)
        return (
            <div onClick={action}>
                <BackToTop>Voltar ao topo</BackToTop>
            </div>
        )
    else
        return (<></>)
  };