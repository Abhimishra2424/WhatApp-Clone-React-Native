import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  // console.log(chatRoom.users[1].imageUri);

  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />

        <View style={styles.midcontainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text numberOfLines={2} style={styles.lastMsg}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
      <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD//MM/YYYY")}</Text>
    </View>
  );
};

export default ChatListItem;
