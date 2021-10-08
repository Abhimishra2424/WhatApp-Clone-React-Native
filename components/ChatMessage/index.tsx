import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";

export type ChatMessageProps = {
  messages: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { messages } = props;
  return (
    <View>
      <Text>{messages.content}</Text>
    </View>
  );
};

export default ChatMessage;
