/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Book } from '../models/book';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { BookView } from './BookView';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ route, navigation }: HomeProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  console.log('This the route' + route);

  const title = route.params.title;
  const author = route.params.author;
  const genre = route.params.genre;
  const pages = route.params.pages;

  setBooks([...books, { title, author, genre, pages }]);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Book List</Text>
        <View style={styles.items}>
          {books.map(input => (
            <BookView
              title={input.title}
              author={input.author}
              genre={input.genre}
              pages={input.pages}
            />
          ))}
        </View>
      </View>
      <View style={styles.addBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 8,
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  items: {
    paddingTop: 15,
  },
  addBtn: {
    position: 'absolute',
    bottom: 30,
    paddingRight: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  addWrapper: {
    width: 80,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 28,
  },
});
function userRoute() {
  throw new Error('Function not implemented.');
}
