import * as SecureStore from "expo-secure-store";

const key = "life";

const storeLife = async (life) => {
  try {
    await SecureStore.setItemAsync(key, life);
    console.log("success store life");
  } catch (error) {
    console.log("Error storing the life", error);
  }
};

const getLife = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the life", error);
  }
};

export default { getLife, storeLife };
