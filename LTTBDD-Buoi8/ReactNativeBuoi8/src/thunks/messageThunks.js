// apiService.js
const API_URL = "https://6410753745a5f98532472998.mockapi.io/api/v1/messages";

export const fetchMessages = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const createMessage = async (newMessage) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
};

export const updateMessageAPI = async (id, updatedMessage) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMessage),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating message:", error);
    throw error;
  }
};

export const deleteMessageAPI = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
};
