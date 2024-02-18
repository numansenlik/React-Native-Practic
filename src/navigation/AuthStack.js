import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage, SingupPage } from "../screens";
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SingupPage} />
    </Stack.Navigator>
  );
};
export default AuthStack;
