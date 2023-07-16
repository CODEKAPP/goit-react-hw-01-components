import React from 'react';
import PropTypes from 'prop-types';
import { StyledP2, StyledP } from './Style/StylesInfo';

const ProfileInfo = ({ userName, userTag, userLocation }) => {
  return (
    <>
      <StyledP2>{userName}</StyledP2>
      <StyledP>@{userTag}</StyledP>
      <StyledP>{userLocation}</StyledP>
    </>
  );
};

ProfileInfo.propTypes = {
  userName: PropTypes.string,
  userTag: PropTypes.string,
  userLocation: PropTypes.string,
};

export default ProfileInfo;
