import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';

const BusinessCard = ({business}) => {
    return <View style={styles.containerStyle}>
        <Image source={{uri: business.image_url}} style={styles.imageStyle}/>
        <Text style={styles.nameStyle}>{business.name}</Text>
        <Text style={styles.ratingStyle}>
            {business.rating} Stars, {business.review_count} Reviews
        </Text>
    </View>
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle:{
        fontWeight: 'bold'
    }, 
    ratingStyle:{
        color: '#75787d'
    }
});

export default BusinessCard;