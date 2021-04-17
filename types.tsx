/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  PinAuth: undefined;
  TransportType: undefined;
  Selection: CleanItem;
  Scanner: CleanItem;
  Confirmation: CleanItem;
  CleaningLog: CleanItem;
  NotFound: undefined;
};
export function getTransportColors(a: TransportTypes) {
  if (a == TransportTypes.Train) {
    return '#3070C7';
  }
  if (a == TransportTypes.Bus) {
    return '#EF8833';
  }
  else {
    return '#88BC41';
  }
}

export type CleanItem = {
  fleetID: string | undefined | null;
  trainID: string | undefined | null; //Primary Key
  carriage: number | undefined | null; 
  startTime: Date | undefined | null; //Primary Key
  endTime: Date | undefined | null;
  transportType: TransportTypes;
  // usedSupplies: [number];
}
export enum TransportTypes {
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
