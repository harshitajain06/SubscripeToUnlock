import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import Purchases from "react-native-purchases";

// Configure RevenueCat as early as possible, at module load time.
if (Platform.OS === "ios") {
  Purchases.configure({ apiKey: "<revenuecat_project_apple_api_key>" });
} else if (Platform.OS === "android") {
  Purchases.configure({ apiKey: "goog_ArWVEQzfNeQaehyBvsKhfNhDeLZ" });
}

export default function RootLayout() {
  useEffect(() => {
    void getCustomerInfo();
  }, []);

  async function getCustomerInfo() {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      console.log("📢 customerInfo", JSON.stringify(customerInfo, null, 2));
    } catch (e) {
      console.log("📢 customerInfo error", e);
    }
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
