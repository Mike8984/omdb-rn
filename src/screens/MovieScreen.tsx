import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState, FC} from 'react';
import axios from '../api';
import {API_KEY} from '../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../navigation';
import {Movie} from '../types';

type Props = NativeStackScreenProps<AppStackParamList, 'Movie'>;

const MovieScreen: FC<Props> = ({route, navigation}) => {
  const {movie} = route.params;
  const [movieItem, setMovieItem] = useState<Partial<Movie>>({});

  const getMovie = async (id: string) => {
    if (movieItem) {
      const {data} = await axios.get(`?i=${id}&apikey=${API_KEY}`);
      setMovieItem(data);
    }
  };

  useEffect(() => {
    getMovie(movie.imdbID);
  }, []);

  return (
    <View style={{padding: 15}}>
      <Image source={{uri: movieItem.Poster}} style={styles.poster} />
      <View style={styles.textContainer}>
        <View>
          <Text>{movieItem.Year}</Text>
          <Text>{movieItem.Country}</Text>
        </View>
        <Text style={styles.movieTitle}>{movieItem.Title}</Text>
        <Text style={styles.movieDescription}>{movieItem.Plot}</Text>
      </View>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },

  movieTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  movieDescription: {
    color: '#000',
    fontSize: 16
  },

  textContainer: {
    marginTop: 30
  }
});
