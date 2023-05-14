import styled from "styled-components";

const SectionFriends = styled.div`

width: inherit;
padding: 30px;`

const ListFriends = styled.ul`
width: inherit;
display: flex;
flex-direction: column;
align-items: center;
padding: 0;
list-style: none;`

const ItemFriend = styled.li`
width: inherit;
display: flex;
align-items: center;
box-shadow: 0 0 10px #c6cccced;
padding: 20px;` 

const Status = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 20px;
`

const AvatarFriend = styled.img`
width: 100px;
margin-right: 20px;
`

const NameFriend = styled.p`
font-weight: 700;
font-size: 28px;
margin-bottom: 15px;
color: #524a4d;`

export { SectionFriends, ListFriends, ItemFriend, Status, AvatarFriend, NameFriend };