/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Book } from '../models/book';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Add } from './Add';
import { BookView } from './BookView';
//import { openDatabase } from 'react-native-sqlite-storage';
const route = useRoute();

export const Home = () => {
  const [todo, setTodo] = useState<string>('');
  const [booklist, setBooklist] = useState<Book[]>([]);
  const navigation = useNavigation();
  //setBooklist(books);
  React.useEffect(() => {
    if (route.params.? title) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params ?]);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Book List</Text>
        <View style={styles.items}>
          <ScrollView>
            {booklist.map(t => {
              <BookView
                title={t.title}
                author={t.author}
                genre={t.genre}
                pages={t.genre}
              />;
            })}
          </ScrollView>
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
