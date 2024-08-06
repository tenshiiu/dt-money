import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "../../assets/Logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
         <HeaderContent>
            <img src={LogoImg} alt="" />

            <Dialog.Root>
            
            <Dialog.Trigger asChild>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />

            </Dialog.Root>
         </HeaderContent>
        </HeaderContainer>
    )
}