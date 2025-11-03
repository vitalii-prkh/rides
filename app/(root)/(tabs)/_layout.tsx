import {Stack} from "expo-router";

function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{headerShown: false}}
      />
    </Stack>
  );
}

export default TabsLayout;
