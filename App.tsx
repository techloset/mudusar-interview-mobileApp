import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Signup from './src/screens/Signup';
import Articles from './src/screens/Articles';
import Analytics from './src/screens/Analytics';
import HomeScreen from './src/screens/HomeScreen'
import Dashboard from './src/screens/Dashboard';
import { SafeAreaView } from 'react-native';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;