import "react-native-reanimated";
import {ClerkLoaded, ClerkProvider} from "@clerk/clerk-expo";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import {LogBox, Platform} from "react-native";
import {tokenCache} from "../lib/auth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
if (Platform.OS !== "web") {
  // Guard for platforms without a native splash (e.g., Web)
  SplashScreen.preventAutoHideAsync().catch(() => {
    // Ignore: no native splash registered or already hidden
  });
}

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
  );
}

LogBox.ignoreLogs(["Clerk:"]);

function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    Jakarta: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded && Platform.OS !== "web") {
      SplashScreen.hideAsync().catch(() => {
        // Ignore: no native splash registered or already hidden
      });
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={publishableKey}
    >
      <ClerkLoaded>
        <Stack>
          <Stack.Screen
            name="index"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="(auth)"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="(root)"
            options={{headerShown: false}}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

export default RootLayout;
