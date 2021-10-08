import React from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";

const ChatRoomScreen = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage messages={item} />}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
