import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import styles from "./style";

const NewMessageButtom = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="message-reply-text"
        size={28}
        color="#fff"
      />
    </View>
  );
};

export default NewMessageButtom;
