import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';

type AppStackParamList = {
  Home: undefined;
  Movie: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Movie',
    component: Movie,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {routes.map(routeConfig => (
          <Stack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
