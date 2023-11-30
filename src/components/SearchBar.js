import React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import {Octicons} from '@expo/vector-icons';

const SearchBar = ({searchTerm, onSearchTermChange, onSearchSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Octicons name="search" style={styles.iconStyle} color="black" />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" 
            style={styles.inputStyle}
            value={searchTerm}
            onChangeText={onSearchTermChange}
            onEndEditing={onSearchSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;