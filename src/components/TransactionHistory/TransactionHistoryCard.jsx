import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
  StyledThead,
  StyledTbody,
} from './Styles/TableStyles';

const TransactionHistory = ({ items }) => {
  return (
    <StyledTable className="transaction-history">
      <StyledThead>
        <StyledTr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {items.map(item => (
          <TransactionRow key={item.id} {...item} />
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const TransactionRow = ({ type, amount, currency }) => {
  return (
    <StyledTr>
      <StyledTd>{type}</StyledTd>
      <StyledTd>{amount}</StyledTd>
      <StyledTd>{currency}</StyledTd>
    </StyledTr>
  );
};

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
