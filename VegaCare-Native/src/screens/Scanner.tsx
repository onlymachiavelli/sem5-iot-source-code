import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner'
import { AsyncStorage } from '../hooks'

import axios from 'axios'
const Scanner = ({navigation}:any) => {
  const [hasPermission, setHasPermission]:any = useState<PermissionStatus | null>(null)
  const [scanned, setScanned] = useState(false)

  const [device, setDevice] : any = useState()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status);
    }

    getBarCodeScannerPermissions()


    AsyncStorage.GetOne("device").then(res=>{
      if (res) {
        navigation.navigate("Dashboard")
      }
    })

  }, [])

  const handleBarCodeScanned = async({ type, data }: any) => {
    setScanned(true)
    //alert(data)

    const ip : any = await AsyncStorage.GetOne("ip")



    if (isNaN(data)) {
      alert("Cannot, Scan Again") 
      setScanned(false)
    }
    await axios.get(`http://${ip}:3000/bc?id=${data}`).then(async(res)=>{
      if (res.data.error) {
        alert("Invalid Device, perhaps a Scam")
        setScanned(false)
        return 
      }
      alert("Device added successfully")
      await AsyncStorage.SetOne("device", JSON.stringify(data)).then(res=>{

        alert("Device added successfully")
        navigation.navigate("Dashboard")
      }).catch(e=>{
        alert("Error adding device")
      })
  
      navigation.navigate("Dashboard")
    }).catch(e=>{

      alert("Invalid Device, perhaps a Scam")
      setScanned(false)
    })
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export default Scanner
