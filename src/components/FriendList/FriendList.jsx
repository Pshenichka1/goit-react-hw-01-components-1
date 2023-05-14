import PropTypes from 'prop-types';
import {SectionFriends, ListFriends } from '../FriendList/styled';

export const FriendList = ({ children }) => {
    return (
        <SectionFriends>
            <ListFriends>{children}</ListFriends>   
        </SectionFriends>
    );
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};