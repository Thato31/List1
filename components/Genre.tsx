import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type GenreProps = NativeStackScreenProps<RootStackParamList, 'Genre'>;

export const Genre = ({ navigation }: GenreProps) => {
    return (
        <View>
            <Text>Genre</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
