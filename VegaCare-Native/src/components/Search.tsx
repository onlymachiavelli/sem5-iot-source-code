import * as React from 'react'

import {View, Text,TouchableOpacity, ScrollView } from 'react-native'
import {Input} from './'


//accept payload, 
//accept empty string state to edit it 

const SearchBox = ({...props}) =>{
    const [fake, setFake] = React.useState([{id : 1 , title:"Hello"},{id : 2, title:"Hello2"},{id : 3 , title:"Hello3"}])
    const [search, setSearch] :any= React.useState("")
    const [result, setResult] :any= React.useState([])
    const [open, setOpen]:any = React.useState("none")
    return (
        <View>
        <Input
          Text={props.Text}
          Value={props.Value}
          OnChange={props.OnUpdate()}
          Additional={() => {
            setOpen("flex");
  
            // If the search is empty, reset the results and hide the suggestions
            if (search.length === 0) {
              setResult([]);
              setOpen("none");
            } else {
              // Each time the user writes, update the result array with filtered data
              const filteredResults = fake.filter((data) =>
                data.title.toLowerCase().includes(search.toLowerCase())
              );
              setResult(filteredResults);
            }
          }}
        />
  
        <ScrollView
          style={{
            width: "90%",
            maxHeight: 200,
            alignSelf: "center",
            borderColor: "#555",
            borderRadius: 3,
            borderWidth: 0.5,
            borderTopColor: "#fff",
            backgroundColor: "transparent",
            display: open,
          }}
        >
          <Text style={{ textAlign: "center", padding: 10 }}>Suggestions</Text>
  
          {result.map((data: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSearch(data.title);
                  setOpen("none");
                }}
                style={{
                  width: "90%",
                  padding: 10,
                  backgroundColor: "#00ccff",
                  margin: 10,
                  alignSelf: "center",
                  borderRadius: 3,
                }}
              >
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  {data.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    )
}   


export default SearchBox