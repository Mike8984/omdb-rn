import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {useState} from 'react';
import axios from '../api';
import {Movie} from '../types';
import MovieCard from '../components/MovieCard';
import {API_KEY} from '../constants';

const Home = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async (title: string) => {
    try {
      const {data} = await axios.get(`?s=${title}&apikey=${API_KEY}`);
      setMovies(data.Search);
      setValue('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>App</Text>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="search"
          onChangeText={text => setValue(text)}
        />
        <Button title="search" onPress={() => getMovies(value)} />
      </View>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieCard movie={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchForm: {
    marginBottom: 15,
    width: '100%',
    padding: 50,
    gap: 10,
  },

  input: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },

  movieList: {
    padding: 15,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    gap: 20,
  },
});
