// MessageListScreen.js
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { Button, TextInput, List, Divider, Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMessages,
  createMessage,
  updateMessageAPI,
  deleteMessageAPI,
} from "../thunks/messageThunks";
import {
  addMessage,
  updateMessage,
  deleteMessage,
} from "../reducers/messageSlice";

const MessageListScreen = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.data);
  const [newMessage, setNewMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMessages();
        // Dispatch action to add messages to Redux store
        dispatch(addMessage(data));
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddMessage = async () => {
    try {
      const createdMessage = await createMessage({ content: newMessage });
      // Dispatch action to add the new message to Redux store
      dispatch(addMessage(createdMessage));
      setNewMessage("");
      showSnackbar("Message added successfully");
    } catch (error) {
      // Handle error
      showSnackbar("Error adding message");
    }
  };

  const handleUpdateMessage = async (id) => {
    try {
      const updatedMessage = await updateMessageAPI(id, {
        content: newMessage,
      });
      // Dispatch action to update the message in Redux store
      dispatch(updateMessage(updatedMessage));
      setNewMessage("");
      showSnackbar("Message updated successfully");
    } catch (error) {
      // Handle error
      showSnackbar("Error updating message");
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await deleteMessageAPI(id);
      // Dispatch action to delete the message from Redux store
      dispatch(deleteMessage(id));
      showSnackbar("Message deleted successfully");
    } catch (error) {
      // Handle error
      showSnackbar("Error deleting message");
    }
  };

  const showSnackbar = (message) => {
    setSnackbarVisible(true);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 3000);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <List.Section>
          {messages.map((message) => (
            <List.Item
              key={message.id}
              title={message.content}
              right={(props) => (
                <View style={{ flexDirection: "row" }}>
                  <Button
                    {...props}
                    icon="pencil"
                    onPress={() => handleUpdateMessage(message.id)}
                  />
                  <Button
                    {...props}
                    icon="delete"
                    onPress={() => handleDeleteMessage(message.id)}
                  />
                </View>
              )}
            />
          ))}
        </List.Section>
      </ScrollView>
      <Divider />
      <View style={{ padding: 16 }}>
        <TextInput
          label="New message"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          style={{ marginBottom: 8 }}
        />
        <Button mode="contained" onPress={handleAddMessage}>
          Add Message
        </Button>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: "Close",
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {snackbarVisible}
      </Snackbar>
    </View>
  );
};

export default MessageListScreen;
