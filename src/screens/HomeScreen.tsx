import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
    const { MoviesNow, IsLoading } = useMovies();

    if(IsLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }
    console.log(MoviesNow[2]?.title);

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
