import PropTypes from 'prop-types';
import {SectionFriends, ListFriends, ItemFriend, Status, AvatarFriend, NameFriend } from '../FriendList/styled';

export const FriendList = ({ friends }) => {
    return (
        <SectionFriends>
            <ListFriends>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <ItemFriend key={id}>
                        <Status>{isOnline}</Status>
                        <AvatarFriend src={avatar} alt={name} width="48" />
                        <NameFriend>{name}</NameFriend>
                    </ItemFriend>
                ))}

            </ListFriends>
        </SectionFriends>
    );
}
FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired

}