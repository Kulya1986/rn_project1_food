import React, { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return <View >
        <Text>Search Screen</Text>
        <SearchBar 
            searchTerm={searchTerm} 
            onSearchTermChange = {(newTerm) => setSearchTerm(newTerm)}
            onSearchSubmit = {() => console.log('Search submitted')}
        />
    </View>
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;