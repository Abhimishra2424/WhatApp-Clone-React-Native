import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const navigation = useNavigation();
  const { chatRoom } = props;
  // console.log(chatRoom.users[1].imageUri);

  const user = chatRoom.users[1];

  const onClick = () => {
    navigation.navigate("ChatRoom");
    console.warn(`Cliced on ${user.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
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
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD//MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
