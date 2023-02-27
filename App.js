
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { useFonts} from 'expo-font';

import Home from './screens/Home'
import Details from './screens/Details'
import DetailsJana from './screens/DetailsJana'
import DetailsHeader from './screens/DetailsHeader'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if(!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='DetailsJana' component={DetailsJana}/>
        <Stack.Screen name='DetailsHeader' component={DetailsHeader}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  App;

