import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { Book } from '../models/book';

export const BookView: React.FC<Book> = ({ title, author, genre, pages }) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square} />
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemTitle}>{author}</Text>
                <Text style={styles.itemTitle}>{genre}</Text>
            </View>
            <View style={styles.itemRight}>
                <View style={styles.leftText}>
                    <Text style={styles.itemNum}>{pages}</Text>
                    <Text style={styles.itemMumText}>Pages</Text>
                </View>
                <View style={styles.circular} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 60,
        height: 75,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemTitle: {
        maxWidth: '60%',
        fontSize: 16,
        fontWeight: '600',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    leftText: {
        paddingRight: 20,
        flexDirection: 'row',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});
