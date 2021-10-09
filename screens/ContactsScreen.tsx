import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import chatRoom from "../data/ChatRoom";
import NewMessageButtom from "../components/NewMessageButtom";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRoom}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButtom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
