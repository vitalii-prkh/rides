import {create} from "zustand";
import {DriverStore, LocationStore, MarkerData} from "../types/type";

type SetLocationParams = {
  latitude: number;
  longitude: number;
  address: string;
};

export const useLocationStore = create<LocationStore>((set) => ({
  userLatitude: null,
  userLongitude: null,
  userAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  destinationAddress: null,
  setUserLocation(params: SetLocationParams) {
    const {latitude, longitude, address} = params;

    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));

    // if a driver is selected and now a new location is set, clear the selected driver
    const {selectedDriver, clearSelectedDriver} = useDriverStore.getState();

    if (selectedDriver) {
      clearSelectedDriver();
    }
  },

  setDestinationLocation(params: SetLocationParams) {
    const {latitude, longitude, address} = params;

    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }));

    // if a driver is selected and now a new location is set, clear the selected driver
    const {selectedDriver, clearSelectedDriver} = useDriverStore.getState();

    if (selectedDriver) {
      clearSelectedDriver();
    }
  },
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver(selectedDriver: number) {
    set(() => ({
      selectedDriver,
    }));
  },
  setDrivers(drivers: MarkerData[]) {
    set(() => ({
      drivers,
    }));
  },
  clearSelectedDriver() {
    set(() => ({
      selectedDriver: null,
    }));
  },
}));
