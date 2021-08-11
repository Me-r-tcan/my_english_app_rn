import * as SecureStore from "expo-secure-store";
import { differenceInSeconds } from "date-fns";

const key = "time";

const storeTime = async (time) => {
  try {
    // const now = new Date();
    // now.toISOString()
    await SecureStore.setItemAsync(key, time);
    console.log("success store time");
  } catch (error) {
    console.log("Error storing the time", error);
  }
};

const getTime = async () => {
  try {
    const startTime = await SecureStore.getItemAsync(key);
    const now = new Date();
    return differenceInSeconds(now, Date.parse(startTime));
  } catch (error) {
    console.log("Error getting the time", error);
  }
};

export default { getTime, storeTime };
