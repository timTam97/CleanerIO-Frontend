import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import { CleanItem, deserialiser } from "../types";

let DATA = [
    {
        //title: 'CLEANING LOG: \n 16/04/2021',
        data: [
            {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "HCMT",
                "startTime": 1618717374748,
                "trainID": "012",
                "transportType": "tram",
              },
              {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "HITATCHI",
                "startTime": 1618717374748,
                "trainID": "123",
                "transportType": "tram",
              },
              {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "COMENG",
                "startTime": 1618717374748,
                "trainID": "546",
                "transportType": "tram",
              },
              {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "HCMT",
                "startTime": 1618717374748,
                "trainID": "832",
                "transportType": "tram",
              },
              {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "HCMT",
                "startTime": 1618717374748,
                "trainID": "345",
                "transportType": "tram",
              },
              {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "SIEMENS",
                "startTime": 1618717374748,
                "trainID": "654",
                "transportType": "tram",
              },
              {
                "carriage": "05",
                "endTime": 1618718037989,
                "fleetID": "ALSTOM",
                "startTime": 1618717374748,
                "trainID": "419",
                "transportType": "tram",
              },
        ],
    },
];
async function getData(): Promise<[CleanItem]> {
    return fetch(
        "https://m3gztf94o0.execute-api.ap-southeast-2.amazonaws.com/list",
        { method: "GET" }
    )
        .then((a) => {
            console.log("got data");
            return a.json();
        })
        .then((a) => a.map(deserialiser));
}

const useMountEffect = (fun) => useEffect(fun, []);

const Item = ({ data }) => {
    let timeTaken = new Date(Date.now());
    if (data.endTime !== undefined && data.startTime !== undefined) {
        timeTaken = new Date(Number(data.endTime) - Number(data.startTime));
    }

    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.title}>{`            Fleet ${
                    data.fleetID
                }                ${
                    Number(data.startTime) > Date.now()
                        ? "Scheduled"
                        : "Cleaned"
                }\n             Train #${data.trainID}                    ${
                    Number(data.startTime) > Date.now()
                        ? "cleaning"
                        : `${timeTaken.getHours()}:${timeTaken.getMinutes()}`
                }`}</Text>
                <Image
                    style={styles.test}
                    source={require("../assets/images/PTVTrain.png")}
                ></Image>
            </View>
        </TouchableOpacity>
    );
};

export default function App() {
    const [data, setdata] = useState([]);
    // getData().then((a) => {
    //     let newone = a.forEach((b)=>{
    //         DATA.push(b)
    //     })
    //     global.data = newone;
    //     // console.log(a[0])
    // });

    // let data = undefined
    // const ok = await getData();
    // setdata(ok)
    // React.useEffect(()=>{
    //   getData().then(console.log)
    // })
    // // useMountEffect(() => {
    // //     // getData().then((a) => {
    // //     //     setdata(a);
    // //     // });
    // // });
    // console.log(data)
    // if (data !== undefined) {
    //     console.log("done loading");
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    height: "30%",
                    backgroundColor: "#D72D2E",
                    zIndex: 0,
                }}
            />
            <Image
                style={styles.background}
                source={require("../assets/images/WaveBorder.png")}
            ></Image>
            <Text style={styles.title2}> CLEANING LOG:</Text>
            <Text style={styles.title2}>16/04/2021</Text>
            {data === undefined ? <ActivityIndicator size="large" /> : null}
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                // renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
                renderItem={({ item }) => <Item data={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    test: {
        position: "absolute",
        top: 30,
        left: 10,
        width: 40,
        height: 40,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // padding: 20,
    },

    container_safe: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: "#f8f8ff",
        padding: 30,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
    },
    header: {
        fontSize: 32,
        fontWeight: "700",
        color: "white",
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        textAlign: "left",
    },
    title2: {
        fontSize: 24,
        fontWeight: "800",
        color: "white",
        marginTop: 15,
        marginRight: 170,
        textAlign: "left",
    },
    background: {
        position: "absolute",
        top: "30%",
        left: 0,
        width: "100%",
        transform: [{ translateY: -162 }],
        zIndex: 0,
    },
});
