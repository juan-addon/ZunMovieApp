import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {
    const { nowPlaying,popular,topRated,upcoming, IsLoading } = useMovies();
    const {top} = useSafeAreaInsets();

    if(IsLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
        <View style={{marginTop: top + 20}}>

            {/* Carousel /> */}

            <View
                style={{height:440}}>
                <Carousel 
                    data={nowPlaying!}
                    renderItem={({item} : any) => <MoviePoster movie={item} />}
                    sliderWidth={windowsWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                />
            </View>

             {/* Popular Movies /> */}

            <HorizontalSlider title='Popular Movies' movies ={popular!} />

            <HorizontalSlider title='Top Rated'  movies ={topRated!} />

            <HorizontalSlider title='Upcoming'  movies ={upcoming!} />

        </View>
        </ScrollView>
    )
}
