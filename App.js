import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/screens/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import SingupPage from "./src/screens/SingupPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={SingupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
});
