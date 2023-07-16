import styled from 'styled-components';

export const ImageContainer = styled.img`
  width: 150px;
  border-radius: 50%;
  padding: 50px 0 0;
  margin-bottom: 20px;
`;

export const FriendImage = styled(ImageContainer)`
  width: 80px;
  border-radius: 30%;
  padding: 0;
  margin-bottom: 0;
  border: 1px ;
  box-shadow: 1px 1px 2px black;
`;
