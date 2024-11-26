import React, { useState, useEffect } from "react"
import {LineChart,} from "react-native-chart-kit"
import {View,ScrollView,StyleSheet,Animated,}from "react-native"
import { Dimensions } from "react-native"
const screenWidth = Dimensions.get("window").width
const Graph = ({ ...props }) => {
  const data = {
    labels: props.Labels ? props.Labels : [0],
    datasets: [
      {
        data: props.DATA ? props.DATA : [0],
        color: () => props.Color,
        strokeWidth: 1,
      },
    ],
  }
  const formatYLabelFunc = (value:number) => {
    // Round the value to the nearest integer
    if(props.DECIMAL) {
      return Math.round(value).toString() + "-  "

    }
    
    return value.toString()+"-"
  }
  const chartConfig = {
    backgroundGradientFrom: "transparent",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "transparent",
    backgroundGradientToOpacity: 0,
    color: (opacity = 0.1) => props.Color,
    strokeWidth: 0,
    barPercentage: 0.2,
    useShadowColorFromDataset: true,
  }
  const animatedValue = new Animated.Value(0)
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View>
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
              //backgroundColor: "your_desired_color_here",
              // Use the interpolate function to interpolate animatedValue to the desired opacity
              opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1], // Adjust the range as needed
              }),
            }}
          >
            <LineChart
              //pure integer data 
              formatYLabel={formatYLabelFunc} // Pass the f unction reference

              data={data}
              width={screenWidth * 1}
              height={80}
              chartConfig={chartConfig}
              withVerticalLabels={true}
              withDots={false}
              yLabelsOffset={2}
              style={{
                borderRadius: 7,
                borderColor: "none",
                width: "100%",
                marginRight:70,

                marginTop:15
              }}
              withHorizontalLines={props.HOR ? true : false }

              withVerticalLines={props.VER ?true : false}
              //remove numbers on  the vertical line 


              //remove the numbers on axe Y 
              showNumbersOnTop={false}
              //no on the y axe they should be hidden 



              //remove the values 
              withInnerLines={props.GRID ? true : false }
            />
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  )
}


export default Graph
