import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {
    const { MoviesNow, IsLoading } = useMovies();
    const {top} = useSafeAreaInsets();

    if(IsLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <View style={{marginTop: top + 20}}>
            {/* <MoviePoster movie={MoviesNow[1]} /> */}

            <View
                style={{height:440}}>
                <Carousel 
                    data={MoviesNow}
                    renderItem={({item} : any) => <MoviePoster movie={item} />}
                    sliderWidth={windowsWidth}
                    itemWidth={300}
                />
            </View>
            
        </View>
    )
}
