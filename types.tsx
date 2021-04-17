/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BarcodeScanner = {
  FleetID: string | null;
  trainID: string | null; //Primary Key
  Carriage: number | null; 
  startTime: Date | null; //Primary Key
  endTime: Date | null;
  transportType: TransportTypes;
  usedSupplies: [number];
}
enum TransportTypes {
  Train = 'train', 
  Bus = 'bus', 
  Tram = 'tram'
}
export type UserConfig = {
  UID: number,
  firstName: string,
  lastName: string;
}
export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
