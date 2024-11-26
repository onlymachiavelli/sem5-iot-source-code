import * as React from "react"
import { View, Text, ScrollView, Dimensions } from "react-native"
import * as Native from "react-native"
import { ProfileHeader, Footer, SideMenu } from "../components"
import { AsyncStorage, useGetMe, useDash } from "../hooks"
import Graph from "../components/Graph"
import MapView, { Marker } from "react-native-maps"
const { height } = Dimensions.get("screen")
import * as Location from "expo-location"
import Female from "./../lottieFiles/Female.json"
import Male from "./../lottieFiles/Male.json"
import Lottie from "lottie-react-native"
import { Loading } from "../components"
import Healthy from "./../lottieFiles/healthy.json"
import No from "./../lottieFiles/no.json"
import { database } from "../config/firebase"
import { ref, onValue } from "firebase/database"

import { AntDesign, FontAwesome5 } from "@expo/vector-icons"

const Dashboard = ({ navigation }: any) => {
  const { health, heart, GetHealth, GetHeart, healthData, getHealth } =
    useDash()
  const { GetMe, user } = useGetMe(navigation)
  React.useEffect(() => {
    //simple call
    getHealth()

    console.log({
      healthData,
      damn: "regular call",
    })
  })

  //listener
  React.useEffect(() => {
    const userRef = ref(database, "users/1")

    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        // Fetch health data when user data updates
        getHealth()
        console.log("Triggered health update:", {
          healthData, // This will show stale data since state updates are async
          damn: "after trigger",
        })
        console.log("User data updated:", data)
        alert("User data has been updated!")
      }
    })

    // Clean up the listener on unmount
    return () => unsubscribe()
  }, [])

  const [open, setOpen] = React.useState(false)
  const [location, setLocation]: any = React.useState(null)
  const [errorMsg, setErrorMsg]: any = React.useState(null)
  const animationRef = React.useRef(null)
  const animationRef2 = React.useRef(null)
  const animationRef3 = React.useRef(null)

  React.useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  })

  const [device, setDevice]: any = React.useState()

  React.useEffect(() => {
    GetMe()
    AsyncStorage.GetOne("device").then((res) => {
      setDevice(res)
    })

    GetHealth()
    GetHeart()
  }, [])

  return !user ? (
    <Loading Open={true} />
  ) : false ? (
    <View
      style={{
        width: "100%",
        height,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Lottie
        ref={animationRef3}
        source={No}
        loop
        autoPlay
        style={{
          width: 500,
          height: 500,
        }}
      />
      <Text>No Device Detected, Please Add One</Text>

      <Native.TouchableOpacity
        onPress={() => {
          navigation.navigate("Scanner")
        }}
        style={{
          width: 200,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F63C3C",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Native.Text
          style={{
            color: "#fff",
          }}
        >
          Add One
        </Native.Text>
      </Native.TouchableOpacity>

      <Footer
        ToChat={() => {
          navigation.navigate("Chat")
        }}
        ToDevice={() => {
          navigation.navigate("Scanner")
        }}
        ToRelations={() => {
          navigation.navigate("Relations")
        }}
        ToHome={() => {
          navigation.navigate("Dashboard")
        }}
      />
    </View>
  ) : (
    <View
      style={{
        width: "100%",
        maxHeight: height,
        height: height,
        backgroundColor: "white",
      }}
    >
      <ProfileHeader
        Display={setOpen}
        Status={open}
        ToProfile={() => {
          navigation.navigate("Profile")
        }}
        Name={user ? user.user.fullname : "Loading"}
        Gender={user ? user.user.gender : "Loading"}
      />

      <ScrollView style={{ width: "100%", maxHeight: "78%", paddingTop: 10 }}>
        <View
          style={{
            width: "90%",
            height: "auto",
            borderWidth: 0.5,
            alignSelf: "center",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Lottie
            ref={animationRef2}
            source={Healthy}
            loop
            autoPlay
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text
            style={{
              color: "#555",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {user ? user.user.fullname : ""} Your Are currently {health}
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            height: "auto",
            borderWidth: 1,
            borderColor: "#eee",
            alignSelf: "center",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <MapView
            style={{
              width: "100%",
              height: 200,
              borderRadius: 20,
            }}
            //initial place
            initialRegion={{
              latitude: 36.8354,
              longitude: 10.2083,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: 36.8354, //location ? location.coords.latitude : 0,
                longitude: 10.2083, //location ? location.coords.longitude : 0
              }}
              title={"My Location"}
              description={"My Location"}
            >
              <Lottie
                source={
                  user ? (user.user.gender === "male" ? Male : Female) : Male
                }
                ref={animationRef}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Marker>
          </MapView>
        </View>

        <Native.TouchableOpacity
          onPress={() => {
            navigation.navigate("Heart")
          }}
        >
          <Native.View
            style={{
              width: "90%",
              height: 180,
              alignSelf: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#eee",
              backgroundColor: "#F63C3C",
              paddingRight: 10,

              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Native.Text
              style={{
                width: "100%",
                textAlign: "center",
                paddingLeft: 20,
                color: "white",
                paddingTop: 50,
              }}
            >
              <AntDesign name="heart" size={15} color="white" /> My Blood
              Pressure: 60BMP
            </Native.Text>
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: 10,
              }}
            >
              {heart}
            </Text>
            <Graph
              Grid={true}
              DECIMAL={true}
              Color={"white"}
              Labels={healthData?.heartGraph?.Labels ?? []}
              DIS={false}
              DATA={
                healthData?.heartGraph?.DATA ? healthData?.heartGraph?.DATA : []
              }
              HOR={true}
              VER={true}
            />
          </Native.View>
        </Native.TouchableOpacity>

        {
          //oxygen
        }

        <Native.TouchableOpacity
          onPress={() => {
            navigation.navigate("Heart")
          }}
        >
          <Native.View
            style={{
              width: "90%",
              height: 180,
              alignSelf: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#eee",
              backgroundColor: "#3CBEF6",
              paddingRight: 10,

              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Native.Text
              style={{
                width: "100%",
                textAlign: "center",
                paddingLeft: 20,
                color: "white",
                paddingTop: 50,
              }}
            >
              <FontAwesome5 name="lungs" size={15} color="white" /> My Oxygen
              Level: 98%
            </Native.Text>
            <Graph
              HOR={true}
              VER={true}
              //Grid={true}

              Color={"white"}
              Labels={
                healthData?.oxygenGraph?.Labels
                  ? healthData?.oxygenGraph?.Labels
                  : []
              }
              DATA={
                healthData?.oxygenGraph?.DATA
                  ? healthData?.oxygenGraph?.DATA
                  : []
              }
            />
          </Native.View>
        </Native.TouchableOpacity>

        {
          //temperature
        }

        <Native.TouchableOpacity
          onPress={() => {
            navigation.navigate("Heart")
          }}
        >
          <Native.View
            style={{
              width: "90%",
              height: 180,
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#eee",
              backgroundColor: "#F6953C",
              paddingRight: 10,

              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Native.Text
              style={{
                width: "100%",
                textAlign: "center",
                paddingLeft: 20,
                color: "white",
                paddingTop: 50,
              }}
            >
              <FontAwesome5 name="temperature-high" size={15} color="white" />{" "}
              My Body Temperature : 37DEG
            </Native.Text>
            <Graph
              HOR={true}
              VER={true}
              Color={"white"}
              Labels={
                healthData?.temperatureGraph?.Labels
                  ? healthData?.temperatureGraph?.Labels
                  : []
              }
              DATA={
                healthData?.temperatureGraph?.DATA
                  ? healthData?.temperatureGraph?.DATA
                  : []
              }
            />
          </Native.View>
        </Native.TouchableOpacity>

        {
          //steps
        }

        <Native.TouchableOpacity
          onPress={() => {
            navigation.navigate("Heart")
          }}
        >
          <Native.View
            style={{
              width: "90%",
              height: 100,
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#eee",
              backgroundColor: "#95A72C",

              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Native.Text
              style={{
                width: "100%",
                textAlign: "center",
                paddingLeft: 20,
                color: "white",
              }}
            >
              <FontAwesome5 name="walking" size={15} color="white" /> My Steps
            </Native.Text>

            <Text
              style={{
                color: "white",
                fontSize: 30,
                alignSelf: "center",
              }}
            >
              20 Steps
            </Text>
          </Native.View>
        </Native.TouchableOpacity>

        <Native.TouchableOpacity
          onPress={() => {}}
          style={{
            width: "70%",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F63C3C",
            borderRadius: 5,
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <Native.Text
            style={{
              color: "#fff",
            }}
          >
            Extract Health Data For your Doctor
          </Native.Text>
        </Native.TouchableOpacity>
        <Native.View
          style={{
            height: 50,
          }}
        ></Native.View>
      </ScrollView>
      <Footer
        ToChat={() => {
          navigation.navigate("Chat")
        }}
        ToDevice={() => {
          navigation.navigate("Scanner")
        }}
        ToRelations={() => {
          navigation.navigate("Relations")
        }}
        ToHome={() => {
          navigation.navigate("Dashboard")
        }}
      />
      <SideMenu
        Hide={setOpen}
        Display={open}
        OnLogOut={() => {
          navigation.navigate("Signin")
        }}
        ToMedical={() => {
          navigation.navigate("ConsultMedical")
        }}
        ToRelation={() => {
          navigation.navigate("Relations")
        }}
        ToLocation={() => {
          navigation.navigate("Location")
        }}
      />
    </View>
  )
}

export default Dashboard
