import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props{
    title?: string;
    movies:Movie[];
    height?:number;
    width?:number;
}

export const HorizontalSlider = ({title, movies, height =200, width=140}: Props) => {


    return (

        <View style={{
             height:(title) ? 260 : 220
            }}>

        { title && <Text style={{fontSize:30, fontWeight:'bold', marginLeft:10}}>{title}</Text> }
            
        <FlatList
            data={movies}
            renderItem={({item} : any) => 
            <MoviePoster movie={item} width={width} height={height} />}
            horizontal={true}
            keyExtractor={ (item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
        />
    </View>
    )
}
