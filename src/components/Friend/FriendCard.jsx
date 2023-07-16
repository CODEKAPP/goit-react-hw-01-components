import React from 'react';
import PropTypes from 'prop-types';
import { FriendsList } from '../Profile/Style/StylesStatistics';
import { StyledP2 } from '../Profile/Style/StylesInfo';
import { FriendImage } from '../Profile/Style/StylesImage';
import { FriendsItems, Online } from '../Profile/Style/StylesList';

const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItems className="item">
      {/* <Online className={`status ${isOnline ? 'online' : 'offline'}`} /> */}
      <Online className="status" isOnline={isOnline} />
      <FriendImage
        className="avatar"
        src={avatar}
        alt="User avatar"ñ
      />
      <StyledP2 className="name">{name}</StyledP2>
    </FriendsItems>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
