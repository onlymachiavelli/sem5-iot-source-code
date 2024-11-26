import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit"
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,Animated
} from "react-native";
import { Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width

const HeartStatus = () => {
  

  const data = {
    labels: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
    ],
    datasets: [
      {
        data: [3, 1, 4, 8, 10, 22, 5, 66, 77, 88, 20, 0, 22, 78, 120],
        color: () => `red`, // optional (not needed since we have chartConfig)
        strokeWidth: 3, // optional
      },
    ],
  }

  // ...
const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "transparent",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `red`, // Use a constant color value // grid color 
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.1,
  useShadowColorFromDataset: false, // optional
}
// ...
const animatedValue = new Animated.Value(0);
useEffect(() => {
  Animated.timing(animatedValue, {
    toValue: 1, // The final value you want to animate to
    duration: 1000, // The duration of the animation in milliseconds
    useNativeDriver: true, // Enable native driver for better performance
  }).start();
}, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Statistiques </Text>
        <View style={{}}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 10,
              justifyContent: "center",
            }}
          >
           <Animated.View
              style={{
                borderRadius: 12,
                borderColor: "transparent",
                backgroundColor: "your_desired_color_here",
                // Use the interpolate function to interpolate animatedValue to the desired opacity
                opacity: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1], // Adjust the range as needed
                }),
              }}
            >
              <LineChart
                data={data}
                width={screenWidth * 0.975}
                height={250}
                chartConfig={chartConfig}
                withVerticalLabels={true}
                withDots={false}
                yLabelsOffset={5}
                style={{
                  borderRadius: 12,
                  borderColor: "transparent",
                }}
              />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOpacity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  subContainer: {
    justifyContent: "space-around",
    borderRadius: 6.25,
    width: "95%",
    height: "95%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3C6FBC",
  },
})

export default HeartStatus
