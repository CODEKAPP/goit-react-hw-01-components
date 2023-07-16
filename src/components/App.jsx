import ProfileCard from './Profile/ProfileCard';
import users from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import {
  DescriptionContainer,
  StatisticsContainer,
  FriendsContainer,
  TransactionsContainer,
} from './Profile/Style/StylesApp';
import Statistics from './Statistics/StatisticsCard';
import FriendList from './Friend/FriendCard';
import TransactionHistory from './TransactionHistory/TransactionHistoryCard';

export const App = () => {
  const { username, tag, location, avatar, stats } = users;

  return (
    <section>
      <DescriptionContainer className="profile">
        <ProfileCard
          imageSrc={avatar}
          userName={username}
          userTag={tag} // nombre del campo
          userLocation={location}
          stats={stats}
        ></ProfileCard>
      </DescriptionContainer>

      <StatisticsContainer className="Statistics">
        <Statistics title="Upload stats" stats={data} />
        {/* O sin título: <Statistics stats={data} /> */}
      </StatisticsContainer>

      <FriendsContainer className="friends">
        <FriendList friends={friends}  />
      </FriendsContainer>

      <TransactionsContainer className="transactions">
        <TransactionHistory items={transactions} />
      </TransactionsContainer>
    </section>
  );
};
