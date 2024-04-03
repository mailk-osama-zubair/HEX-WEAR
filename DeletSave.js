import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const DeletSave = () => {

const [name,setName] = useState('')
const [phone,setPhone] = useState('')
const [contacts , setContacts] = useState([
  {name:'Ali' , phone : "03002323231"},
  {name:'Ali' , phone : "03002sd323231"},
  {name:'Ali' , phone : "03002wqe323231"},
  {name:'Ali' , phone : "030023rt23231"},
  {name:'Ali' , phone : "030023hy23231"},
  {name:'Ali' , phone : "030023232ju31"},


])
const DeleteContact = (phone) => {
  console.log("🚀 ~ DeleteContact ~ phone:", phone)
  const updateContact = contacts.filter((val)=>val.phone !== phone)
  console.log("🚀 ~ DeleteContact ~ updateContact:", updateContact)
  setContacts(updateContact)
}
const SaveContact = ()=>{
  const newContact = [...contacts,{name,phone}]
  console.log("🚀 ~ SaveContact ~ newContact:", newContact)
  setContacts(newContact)
}
  return (
    <View>
      <TextInput
      placeholder='Enter Name'
      value={name}
      style={{borderWidth:1,borderColor:'black',margin:10}}
      onChangeText={(text)=>setName(text)}
      />
       <TextInput
      placeholder='Enter Phone'
      value={phone}
      style={{borderWidth:1,borderColor:'black',margin:10}}
      onChangeText={(text)=>setPhone(text)}
      />

      <Button title='Save Contact' onPress={SaveContact}/>
      <FlatList
      data={contacts}
      renderItem={({item,index})=>{
        return(
          <View>
            <Text>{item.name.slice(0,1)}</Text>
            <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
            <Text  style={{color:'black',fontSize:16,fontWeight:'bold'}}>{item.phone}</Text>
          <Button title='Delete' onPress={()=>DeleteContact(item.phone)}/>
            </View>
        )
      }}
      />
    </View>
  )
}

export default DeletSave

const styles = StyleSheet.create({})