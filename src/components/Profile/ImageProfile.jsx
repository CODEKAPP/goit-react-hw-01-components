import React from 'react';
import PropTypes from 'prop-types';
import { ImageContainer } from './Style/StylesImage';

const ProfileImage = ({ src, className, alt }) => {
  return <ImageContainer src={src} alt={alt} className={className} />;
};

ProfileImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ProfileImage;
