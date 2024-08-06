import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm/index.tsx";
import { TransactionsContainer, TransactionsTable, PriceHighLight } from "./styled";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm/>

            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento do site</td>
                        <td>
                            <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Hambúrguer</td>
                        <td>
                            <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}