import styled, {css} from 'styled-components';

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 100px;
  border: 1px solid #f1f4f8;
  text-align: center;
  &:first-child {
    border-radius: 0 0 0 20px;
  }
  &:last-child {
    border-radius: 0 0 20px 0;
  }
`;

export const StatsItemStatistics = styled(StatsItem)`
  width: 70px;
  border: 1px #c7cacf;
  background-color: ${({ randomColor }) => randomColor};
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  color: #97a3af;
  margin-bottom: 8px;
`;
export const LabelStatistics = styled(Label)`
  color: white;
  text-shadow: 1px 1px 2px black;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
`;
export const Online = styled(Quantity)`
  border: 1px solid #c7cacf;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 100%;
  box-shadow: 1px 1px 2px black;

  ${({ isOnline }) => {
    if (isOnline) {
      return css`
        background-color: green;
      `;
    } else {
      return css`
        background-color: red;
      `;
    }
  }}
`;


export const QuantityStatistics = styled(Quantity)`
  color: white;
  text-shadow: 1px 1px 2px black;
`;

export const FriendsItems = styled(StatsItem)`
  width: 70px;
  border: 1px solid #c7cacf;
  flex-direction: row;
  width: 250px;
  justify-content: flex-start;
  background-color: #ffffff;
  text-shadow: 1px 1px 1px black;

  box-shadow: 1px 2px 1px #363434c6;
  &:first-child {
    border-radius: 20px 20px 0 0px;
  }
  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`;
