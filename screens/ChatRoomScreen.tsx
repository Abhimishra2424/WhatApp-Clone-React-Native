import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <View>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage messages={item} />}
      />
    </View>
  );
};

export default ChatRoomScreen;
