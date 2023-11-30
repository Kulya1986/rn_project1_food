import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import BusinessCard from "./BusinessCard";
import { withNavigation } from "react-navigation";

const ResultsList = ({navigation, title, results}) =>{
    
    if (!results.length) {
        return null;
    }
    return <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('BusinessShow', {id : item.id })}
                    >
                        <BusinessCard business = {item}/>
                    </TouchableOpacity>    
                )
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle:{
        marginBottom: 10,
        // borderBottomColor: 'gray',
        // borderBottomWidth: 2
    }
});

export default withNavigation(ResultsList);