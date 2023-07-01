import { TableElement, TextTable} from "./TransactionElement.styled"


export const TransactionElement = ({ type, amount, currency }) => {
    return <tbody>
    <TableElement>
      <TextTable>{type}</TextTable>
      <TextTable>{amount}</TextTable>
      <TextTable>{currency}</TextTable>
    </TableElement>
  </tbody>
}