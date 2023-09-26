import {Text, View, Image, StyleSheet} from 'react-native';
import {useEffect, useState, FC} from 'react';
import axios from '../api';
import {API_KEY} from '../constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../App';

type Props = NativeStackScreenProps<AppStackParamList, 'Movie'>;

const MovieScreen: FC<Props> = ({route}) => {
  const {movie} = route.params;
  const [movieItem, setMovieItem] = useState({});

  const getMovie = async (id: string) => {
    if (movieItem) {
      const {data} = await axios.get(`?i=${id}&apikey=${API_KEY}`);
      console.log(data);
      setMovieItem(data);
    }
  };

  useEffect(() => {
    getMovie(movie.imdbID);
  }, []);

  return (
    <View>
      <Image source={{uri: movieItem.Poster}} style={styles.poster} />
      <Text>{movieItem.Title}</Text>
      <Text>{movieItem.Plot}</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  }
})
