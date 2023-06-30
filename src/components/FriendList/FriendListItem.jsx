import { FriendItem, OnlineStatus, Avatar, Name } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <FriendItem key={id}>
        <OnlineStatus isOnline={isOnline}></OnlineStatus>
    <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{ name }</Name>
    </FriendItem>
}