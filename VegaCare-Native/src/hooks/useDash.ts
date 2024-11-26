import axios from "axios"
import { useState, useEffect } from "react"
import { AsyncStorage } from "."
const useDash = () => {
  const [health, setHealth]: any = useState()
  const [heart, setHeart]: any = useState()

  const GetHealth = async () => {
    const reqBody = {
      Temperature: 37, // Typical healthy body temperature ranges from 36.5 to 37.5 degrees Celsius
      Systole: 120, // Healthy systolic blood pressure is typically below 120 mm Hg
      Diastole: 80, // Healthy diastolic blood pressure is typically below 80 mm Hg
      HeartRate: 70, // A resting heart rate of 60 to 100 beats per minute is generally considered healthy
      Spo2: 98, // Oxygen saturation level of 95% to 100% is considered normal and healthy
    }

    const ip: any = await AsyncStorage.GetOne("ip")

    await axios
      .post(`http://${ip}:5000/health`, reqBody)
      .then((res) => {
        setHealth(res.data.predictions[0])
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const GetHeart = async () => {
    const ip: any = await AsyncStorage.GetOne("ip")
    const reqBody = {
      gender: 1,
      age: 37,
      systole: 100,
      bloodsugar: 0,
      heartrate: 120,
    }
    await axios
      .post(`http://${ip}:5000/heart`, reqBody)
      .then((res) => {
        setHeart(res.data.predictions[0])
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const [healthData, setHealthData]: any = useState({})
  const getHealth = async () => {
    const ip: any = await AsyncStorage.GetOne("ip")

    if (ip) {
      try {
        await axios.get(`http://${ip}:3000/users/getHealthData`).then((r) => {
          setHealthData(r.data)
        })
      } catch (e: any) {
        alert("Error fetching health Data")
        console.log({ ...e })
      }
    }
  }

  return {
    health,
    heart,
    GetHealth,
    GetHeart,

    //heath things
    healthData,
    getHealth,
  }
}

export default useDash
