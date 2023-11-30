import React, { useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const BusinessShowScreen = ({navigation}) =>{
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    // console.log(result);
    const getBusiness = async (id) =>{
        const resp = await yelp.get(`/${id}`);
        setResult(resp.data);
    };

    useEffect(() => {
        getBusiness(id);
    }, [])

    if (!result){
        return null;
    }else {
        return <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) =>{
                    return <Image style={styles.imageStyle} source={{uri: item}}/>
                }}
            />
        </View>
    }

};

const styles = StyleSheet.create({
    imageStyle:{
        height: 200,
        width: 300
    }
});

export default BusinessShowScreen;