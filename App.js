// Status bar Ekranın üstünün temsilcisidir ve container ın stillerine tabi olmuyor
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// Text yazı yazmamızı sağlayan comp
// view container olarak kullanılıyor
// React fragment yerine view kullanılıyor

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Name Surname: {fullName}</Text>
      <Text style={styles.textStyle}>Name</Text>
      <TextInput
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(i) => {
          setName(i);
        }}
        style={styles.textInput}
      />
      <Text style={styles.textStyle}>Surname</Text>
      <TextInput
        placeholder="Enter Your Name"
        value={surname}
        onChangeText={(i) => {
          setSurname(i);
        }}
        style={styles.textInput}
      />
      <Pressable
        onPress={({ pressed }) => {
          setFullName(name + surname);
        }}
      >
        <Text style={styles.textInput}>Tiklayiniz</Text>
      </Pressable>
      <StatusBar style="auto" />
      {/* <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Test Text</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    backgroundColor: "green",
    fontSize: "20",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "40%",
    borderWidth: 6,
    borderColor: "blue",
    borderRadius: 40,
  },
  textStyle: {
    fontSize: 20,
    margin: 10,
  },
  textInput: {
    backgroundColor: "lightgray",
    width: "70%",
    height: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});

// App.json dosyası proje bilgilerini tutar (version,ad)gibi özelliklerini tutar icon telefondaki uygulama
// simgesini localdeki yerini belirtiyo
// splash yüklenme ekranı
