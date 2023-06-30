
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'components/FriendList/friends.json'

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}></FriendList>
    </Container>
  );
};

