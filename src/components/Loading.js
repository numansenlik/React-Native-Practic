import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
      <Text style={styles.textStyle}>Loading..</Text>
    </View>
  );
};
export default Loading;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "lightgray",
    marginTop: 20,
  },
  loadingContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
});
