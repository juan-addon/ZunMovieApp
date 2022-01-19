import React from 'react'
import { Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import currencyFormatter from 'currency-formatter'

import { Cast } from '../interfaces/creditsInterfaces';
import { MovieFullDetail } from '../interfaces/movieInterface';
import { CastComponent } from './CastComponent';
import { FlatList } from 'react-native-gesture-handler';

interface Props{
    movieFull: MovieFullDetail,
    cast: Cast[];
}

export const MovieDetailComponent = ({movieFull, cast} : Props) => {
    return (

        <View style={{marginHorizontal:20}}>

            {/* /* Detail */}

            <View style={{flexDirection: 'row'}}>
                <Icon
                    name='star'
                    color="grey"
                    size={19}
                /> 

                <Text style={{marginLeft:5}}>{movieFull.vote_average}</Text>

                <Text style={{marginLeft:5}}>
                    - { movieFull.genres.map(g => g.name).join(', ')}
                </Text>
            </View>

            {/* /* Overview */}

            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>
                Overview
            </Text>

            <Text style={{fontSize:18, textAlign:'justify'}} >
                {movieFull.overview}
            </Text>

            {/* /* Budget */}

            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>
                Budget
            </Text>

            <Text style={{fontSize:18}}>
                {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
            </Text>
           

            {/* /* Casting */}

            <View style={{marginTop:10, marginBottom:100}}>
                <Text style={{fontSize:23, marginTop:10, fontWeight:'bold', marginHorizontal:20}}>
                    Cast
                </Text>

                {/* <CastComponent actor={cast[0]} /> */}

                <FlatList
                    data={cast}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={({item}) => <CastComponent actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10, height:110}}
                />

            </View>
            

        </View>

    )
}
