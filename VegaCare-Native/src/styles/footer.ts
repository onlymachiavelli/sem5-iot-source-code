import { StyleSheet } from "react-native"

const footer = StyleSheet.create({
  container: {
    width: "100%",
    padding: 6,
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  device: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 44,
    borderRadius: 100,
    backgroundColor: "#F63C3C",
    borderWidth: 1,
    borderColor: "#fff",
  },
})

export default footer
