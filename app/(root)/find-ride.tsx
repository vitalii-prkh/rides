import {router} from "expo-router";
import {Text, View} from "react-native";
import {icons} from "../../constants";
import {useLocationStore} from "../../store";
import {CustomButton} from "../../components/CustomButton";
import {GoogleTextInput} from "../../components/GoogleTextInput";
import {RideLayout} from "../../components/RideLayout";

function ScreenFindRide() {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Ride">
      <View className="my-3">
        <Text className="mb-3 font-JakartaSemiBold text-lg">From</Text>

        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          onPress={(location) => setUserLocation(location)}
        />
      </View>

      <View className="my-3">
        <Text className="mb-3 font-JakartaSemiBold text-lg">To</Text>

        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="transparent"
          onPress={(location) => setDestinationLocation(location)}
        />
      </View>

      <CustomButton
        title="Find Now"
        onPress={() => router.push(`/(root)/confirm-ride`)}
        className="mt-5"
      />
    </RideLayout>
  );
}

export default ScreenFindRide;
