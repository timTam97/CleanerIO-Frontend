/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  PinAuth: undefined;
  TransportType: undefined;
  Selection: undefined;
  Scanner: CleanItem;
  Confirmation: CleanItem;
  CleaningLog: undefined;
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
export function deserialiser(item: any): CleanItem {
  try {
    return {
      fleetID: item.fleetID,
      trainID: item.trainID,
      carriage: item.carriage,
      startTime: item.startTime,
      endTime: item.endTime,
      transportType: [TransportTypes.Train, TransportTypes.Bus, TransportTypes.Bus][Math.floor(Math.random()*3)]
    }
  } catch {
    throw Error;
  }
}
export type CleanItem = {
  fleetID?: string | undefined;
  trainID?: string | undefined; //Primary Key
  carriage?: string | undefined; 
  startTime?: number | undefined; //Primary Key
  endTime?: number | undefined;
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
