import React from 'react';
import PropTypes from 'prop-types';
import { StatsList } from './Style/StylesStatistics';
import ProfileStatisticsList from './StatisticsListProfile';

const ProfileStatistics = ({
  className,
  classNameLabel,
  classNameDescription,
  title,
  description,
  stats,
}) => {
  return (
    <StatsList className="stats">
      <ProfileStatisticsList
        classNameLabel="label"
        classNameDescription="quantity"
        title="Followers"
        description={stats.followers}
      />
      <ProfileStatisticsList
        classNameLabel="label"
        classNameDescription="quantity"
        title="Views"
        description={stats.views}
      />
      <ProfileStatisticsList
        classNameLabel="label"
        classNameDescription="quantity"
        title="Likes"
        description={stats.likes}
      />
    </StatsList>
  );
};

ProfileStatistics.propTypes = {
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameDescription: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.number,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileStatistics;
