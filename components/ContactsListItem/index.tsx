import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom, User } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ContactsListItemProps = {
  user: User;
};

const ContactsListItem = (props: ContactsListItemProps) => {
  const navigation = useNavigation();
  const { user } = props;

  const onClick = () => {};

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />

          <View style={styles.midcontainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>
              {user.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactsListItem;
