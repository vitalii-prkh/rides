import {router} from "expo-router";
import {FlatList, View} from "react-native";
import {useDriverStore} from "../../store";
import {CustomButton} from "../../components/CustomButton";
import {DriverCard} from "../../components/DriverCard";
import {RideLayout} from "../../components/RideLayout";

function ScreenConfirmRide() {
  const {drivers, selectedDriver, setSelectedDriver} = useDriverStore();

  return (
    <RideLayout
      title={"Choose a Rider"}
      snapPoints={["65%", "85%"]}
    >
      <FlatList
        data={drivers}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <DriverCard
            item={item}
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(item.id!)}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
}

export default ScreenConfirmRide;
