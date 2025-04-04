import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Telainicial from "./src/Telas/Telainicial";
import Telaansiedade from "./src/Telas/Telaansiedade";
import Telachat from "./src/Telas/Telachat";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Telainicial" component={Telainicial} options={{headerShown:false}}/>
        <Stack.Screen name="Telaansiedade" component={Telaansiedade} options={{headerShown:false}}/>
        <Stack.Screen name="Telachat" component={Telachat} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
