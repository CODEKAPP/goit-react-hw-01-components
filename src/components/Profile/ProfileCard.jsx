import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from './ImageProfile';
import ProfileInfo from './InfoProfile';
import ProfileStatistics from './StatisticsProfile';
import { ProfileDescriptionContainer } from './Style/StylesCard';

const ProfileCard = ({
  imageSrc,
  userName,
  userTag,
  userLocation,
  description,
  stats,
}) => {
  return (
    <ProfileDescriptionContainer className="description">
      <ProfileImage src={imageSrc} className="avatar" alt="User avatar" />
      <ProfileInfo
        userName={userName} //nombre campo
        userTag={userTag}
        userLocation={userLocation}
        description={stats}
      />
      <ProfileStatistics className="stats" stats={stats} />
    </ProfileDescriptionContainer>
  );
};

ProfileCard.propTypes = {
  imageSrc: PropTypes.string,
  userName: PropTypes.string, //valor rec
  userTag: PropTypes.string,
  userLocation: PropTypes.string,
  description: PropTypes.number,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileCard;
