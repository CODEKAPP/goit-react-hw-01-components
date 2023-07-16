import React from 'react';
import PropTypes from 'prop-types';
import { StatsList } from '../Profile/Style/StylesStatistics';
import {
  LabelStatistics,
  QuantityStatistics,
  StatsItemStatistics,
} from '../Profile/Style/StylesList';

import { StyledH2 } from '../Profile/Style/StylesInfo';
import { StatisticsContainer } from '../Profile/Style/StylesCard';

const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <StatisticsContainer>
      {title && <StyledH2 className="title">{title}</StyledH2>}
      <StatsList className="stat-list">
        {stats.map(stat => (
          <StatsItemStatistics
            className="item"
            key={stat.id}
            randomColor={getRandomColor()}
          >
            <LabelStatistics className="label">{stat.label}</LabelStatistics>
            <QuantityStatistics className="percentage">
              {stat.percentage}%
            </QuantityStatistics>
          </StatsItemStatistics>
        ))}
      </StatsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
