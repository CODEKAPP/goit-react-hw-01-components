import styled from 'styled-components';

export const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 490px;
`;
export const FriendsList = styled(StatsList)`
  /* list-style-type: none; */
  /* padding: 0; */
  /* margin: 20px 0 0 0; */
  /* display: flex; */
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* max-width: 490px; */
`;
