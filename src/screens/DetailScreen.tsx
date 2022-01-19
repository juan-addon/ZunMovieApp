import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { MovieDetailComponent } from '../components/MovieDetailComponent';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( {route, navigation}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {isLoading, movieFull, cast} = useMoviesDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{uri}}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>
            </View>

            <View style={{marginTop:0}}>
                {
                    isLoading
                    ?  <ActivityIndicator size={30} color='red'style={{marginTop:20}} />
                    :  <MovieDetailComponent movieFull={movieFull!} cast={cast} />
                }
            </View>
            
            <View style={
                {
                    ...styles.backButton
                }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >

                <Text>
                        <Icon 

                        color='white'
                        name='times-circle'
                        size={45}
                        style={{opacity:0.8}}
                        />
                </Text>

                  
                </TouchableOpacity>
            </View>
           
           
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height: screenHeight * 0.7,
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
    imageBorder:{
        flex:1,
        overflow: 'hidden',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10 
    },
    posterImage:{
        flex:1
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
    },
    backButton:{
        position:'absolute',
        zIndex:999,
        elevation:9,
        top:15,
        right:15
    }
});