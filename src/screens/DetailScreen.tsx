import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( {route}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri}}
                    style={styles.posterImage}
                />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height: screenHeight * 0.7,
        overflow: 'hidden',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    posterImage:{
        flex:1,
        borderBottomEndRadius: 25
    },
    titleContainer:{
        marginHorizontal:20,
        marginTop:20
    },
    subTitle:{
        fontSize:16,
        opacity:0.8
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
});