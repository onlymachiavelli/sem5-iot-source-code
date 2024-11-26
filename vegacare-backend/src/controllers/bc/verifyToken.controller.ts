import { RequestHandler } from "express"
import { ethers } from "ethers"
import axios from "axios"

import abi from "./abi.json"

const ADDRESS: any = String(process.env.AD)

async function getData(cid: string) {
  const url = `https://gateway.pinata.cloud/ipfs/${cid}`
  const data = await axios
    .get(url)
    .then(({ data }) => data)
    .catch(() => null)
  return data
}

async function getToken(id: string) {
  const provider = new ethers.JsonRpcProvider(
    "https://rpc-mumbai.maticvigil.com/"
  )
  const ctr = new ethers.Contract(ADDRESS, abi, provider)
  const token = await ctr.tokenURI(id).catch((e) => {
    console.log(e)
    return null
  })

  if (!token)
    return {
      error: "There was an error while fetching the data",
    }

  const data = await getData(token)
  if (!data)
    return {
      error: "There was an error while fetching the data",
    }
  return data
}

const Verify: RequestHandler = async (req, res, next) => {
  const id: any = req.query.id
  if (!id) {
    res.status(401).send("No id")
    next()
    return
  }

  const x = await getToken(id)
  res.json(x)
}

export default Verify
