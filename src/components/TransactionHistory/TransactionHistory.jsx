import PropTypes from 'prop-types';
import { Table, Thead, TheadTitle, TdBodyTab } from '../TransactionHistory/styled';
export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <TheadTitle>Type</TheadTitle>
                    <TheadTitle>Amount</TheadTitle>
                    <TheadTitle>Currency</TheadTitle>
                </tr>
            </Thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <TdBodyTab>{type}</TdBodyTab>
                            <TdBodyTab>{amount}</TdBodyTab>
                            <TdBodyTab>{currency}</TdBodyTab>
                        </tr>
                    )
                }
                )}
    
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
    