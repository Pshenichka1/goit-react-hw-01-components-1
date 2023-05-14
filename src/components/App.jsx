import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from '../components/FriendList/FriendList';
import { FriendListItem } from '../components/FriendList/FriendListItem';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory'

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

import { Container } from './styled';

export const App = () => {
  return (
    <Container>
          <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
          <Statistics title="Upload stats" stats={data} />
          <FriendList>
            {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
          <TransactionHistory items={transactions} />;

    </Container>
  );
};
