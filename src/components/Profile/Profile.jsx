import PropTypes from 'prop-types';
import { Section, Description, Avatar, UserName, Tag, Location, Stats, StatsItem, Label, Quantity } from '../Profile/styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
  return (
  <Section>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
      
    />
    <UserName>{username}</UserName>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </Stats>
        </Section>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}