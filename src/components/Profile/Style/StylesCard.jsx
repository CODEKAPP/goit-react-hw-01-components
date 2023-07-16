import styled from 'styled-components';

export const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  align-items: center;
  background-color: #ffffff;
  /* padding: 20px; */
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const StatisticsContainer = styled(ProfileDescriptionContainer)`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
