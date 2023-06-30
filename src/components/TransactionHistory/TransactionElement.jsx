import { TableElement, TextTable} from "./TransactionElement.styled"


export const TransactionElement = ({ id, type, amount, currency }) => {
    return <tbody>
    <TableElement key={id}>
      <TextTable>{type}</TextTable>
      <TextTable>{amount}</TextTable>
      <TextTable>{currency}</TextTable>
    </TableElement>
  </tbody>
}