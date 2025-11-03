import "global.css";
import {Redirect} from "expo-router";

function ScreenIndex() {
  return <Redirect href="/(auth)/welcome" />;
}

export default ScreenIndex;
