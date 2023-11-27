import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Book } from '../models/book';

export const Add = () => {
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [nop, setNop] = useState<number>();

  //const [booklist, setBooklist] = useState<Book[]>([]);
  //const [selected, setSelected] = useState("");
  const data = [
    { key: '1', value: 'Fiction' },
    { key: '2', value: 'Autobiography' },
    { key: '3', value: 'Biography' },
    { key: '4', value: 'Novel' },
    { key: '5', value: 'Romance' },
    { key: '6', value: 'History' },
    { key: '7', value: 'Literature' },
  ];

  const navigation = useNavigation();
  function CancelBook() {
    navigation.navigate('Home');
  }
  function AddingBook() {
    console.log('Title: ' + title);
    console.log('Author: ' + author);
    console.log('Genre ' + genre);
    console.log('Pages: ' + nop);
    //SetData();
    const arr = [title, author, genre, nop];
    if (!title) {
      Alert.alert('No Item!', 'You need to enter an item');
    } else {
      //setBooklist([...booklist, {title, author, genre, nop}]);
      navigation.navigate('Home',
        params: { title: title, author: author, genre: genre, nop: nop });
    }
  }

  return (
    <View style={styles.container}>
      <Text>This is the Adding Page</Text>
      <TextInput
        style={styles.InputTitle}
        placeholder={'Name of Title'}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.InputAuthor}
        placeholder={'Name of Author'}
        value={author}
        onChangeText={text => setAuthor(text)}
      />
      <SelectList
        setSelected={(val: React.SetStateAction<string | undefined>) =>
          setGenre(val)
        }
        data={data}
        save="value"
      />
      <TextInput
        style={styles.InputPages}
        placeholder={'Number of Pages'}
        keyboardType="numeric"
        value={nop}
        onChangeText={q => setNop(q)}
      />
      <View style={styles.BtnWrapper}>
        <Button
          //style={styles.Btns}
          title="cancel"
          onPress={() => CancelBook()}
        />
        <Button //style={styles.Btns}
          title="Add"
          onPress={() => AddingBook()}
        />
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
  InputTitle: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  InputAuthor: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  InputPages: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  BtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  Btns: {
    width: 30,
    padding: 10,
  },
});
