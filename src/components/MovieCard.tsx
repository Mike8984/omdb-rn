import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FC} from 'react';
import {Movie} from '../types';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../App';

type Props = {
  movie: Movie;
};

const MovieCard: FC<Props> = ({movie}) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Movie', {movie})}>
      <Image style={styles.poster} source={{uri: movie.Poster}} />
      <Text style={styles.title}>{movie.Title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  poster: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'cover',
  },
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    elevation: 4,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: '#fff',
  },

  title: {
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Bold',
    fontSize: 20,
    color: '#000',
  },
});
