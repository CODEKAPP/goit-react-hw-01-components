import React from 'react';
import PropTypes from 'prop-types';
import { StatsItem, Label, Quantity } from './Style/StylesList';

const ProfileStatisticsList = ({
  classNameLabel,
  classNameDescription,
  title,
  description,
}) => {
  return (
    <>
      <StatsItem>
        <Label className={classNameLabel}>{title}</Label>
        <Quantity className={classNameDescription}>{description}</Quantity>
      </StatsItem>
    </>
  );
};

ProfileStatisticsList.propTypes = {
  classNameLabel: PropTypes.string,
  classNameDescription: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.number,
};
export default ProfileStatisticsList;
