import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "../../assets/Logo.svg";

export function Header() {
    return (
        <HeaderContainer>
         <HeaderContent>
            <img src={LogoImg} alt="" />

            <Dialog.Root>
            
            <Dialog.Trigger asChild>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>

            </Dialog.Root>
         </HeaderContent>
        </HeaderContainer>
    )
}