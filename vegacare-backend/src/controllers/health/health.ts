import { RequestHandler } from "express"
import usersModel from "../../models/MongooseSchema/users.model"

interface Payload {
  Id: number
  Location: {
    x: number
    y: number
    steps: number
    time: Date
  }
  Oxygen: {
    mm: number
    time: Date
  }
  Temperature: {
    degree: number
    time: Date
  }
  HeartRate: {
    bpm: number
    time: Date
  }
}
const saveHealthData: RequestHandler = async (req, res, next) => {
  //payload :

  const body: any = req.body
  const payload: Payload = body
  if (!payload) {
    res.status(401).send("No payload")
    next()
    return
  }

  const user: any = await usersModel.findOne({ id: payload.Id })
  if (!user) {
    res.status(401).send("No user")
    next()
    return
  }

  user.Monitor.heart.push({
    beat: payload.HeartRate.bpm,
    time: payload.HeartRate.time,
  })

  user.Monitor.oxygen.push({
    mm: payload.Oxygen.mm,
    time: payload.Oxygen.time,
  })
  user.Monitor.temperature.push({
    degree: payload.Temperature.degree,
    time: payload.Temperature.time,
  })
  user.Monitor.location.push({
    x: payload.Location.x,
    y: payload.Location.y,
    steps: payload.Location.steps,
    time: payload.Location.time,
  })
  await user
    .save()
    .then(() => {
      res.json(user)
    })
    .catch((e: any) => {
      res.status(401).send(e)
    })
}

//in this endpoint we're getting last 20 data

interface Heart {
  labels: string[]
  data: number[]
}

interface Oxygen {
  labels: string[]
  data: number[]
}

interface Temperature {
  labels: string[]
  data: number[]
}

interface Location {
  long: string
  lat: string
}

const getHealthData: RequestHandler = async (req, res) => {
  const id: number = 1
  let data: any

  try {
    const user = await usersModel.findOne({ id })
    if (!user) {
      return res.status(401).send("No user")
    }

    data = user.Monitor

    //take only the latest 20 data
    data.heart = data.heart.slice(-20)
    // if (!data || !data.heart || data.heart.length < 20) {
    //   return res.json(data)
    // }

    // Helper function to slice data and format for the graph
    const processSlice = <T>(
      arr: T[],
      labelKey: keyof T,
      dataKey: keyof T,
      limit = 20
    ) => {
      const sliced = arr.slice(-limit)
      return {
        Labels: sliced.map((el: any) => el[labelKey] as string),
        DATA: sliced.map((el: any) => el[dataKey] as number),
        Grid: true,
        DECIMAL: true,
        Color: "white",
        DIS: false,
        HOR: true,
        VER: true,
      }
    }

    // Process each type of data
    const heartGraph = processSlice(data.heart, "time", "beat")
    const oxygenGraph = processSlice(data.oxygen, "time", "mm")
    const temperatureGraph = processSlice(data.temperature, "time", "degree")

    const lastLocation = data.location[data.location.length - 1] || {
      x: "",
      y: "",
    }
    const locationData = {
      long: lastLocation.x,
      lat: lastLocation.y,
    }

    const resp = {
      heartGraph,
      oxygenGraph,
      temperatureGraph,
      location: locationData,
      test: "test",
    }

    res.json(resp)
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching health data." })
  }
}

export { saveHealthData, getHealthData }
