import PropTypes from 'prop-types';
import { ItemFriend, Status, AvatarFriend, NameFriend } from '../FriendList/styled'; 


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <ItemFriend key={id}>
            <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</Status>
            <AvatarFriend src={avatar} alt={name} width="48" />
            <NameFriend>{name}</NameFriend>
        </ItemFriend>
    )
}

FriendListItem.propTypes = PropTypes.shape ({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

})