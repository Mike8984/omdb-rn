import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Movie} from '../types';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';

export type AppStackParamList = {
  HomeScreen: undefined;
  MovieScreen: {movie: Movie};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Movie',
    component: MovieScreen,
  },
];

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {routes.map(routeConfig => (
        <Stack.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </Stack.Navigator>
  );
};

export default Navigation;
