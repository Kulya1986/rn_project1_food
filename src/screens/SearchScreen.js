import React, { useState} from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchAPI, businesses, errorMsg] = useBusinesses();

    //filtering results by price property
    const filterResultsByPrice = (price) =>{
        //price === '$' || price === '$$' || price === '$$$'
        return businesses.filter (business => {
            return business.price === price;
        });
    };

    return (
        // <View  style={{flex: 1}}>
        <>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange = {setSearchTerm}
                onSearchSubmit = {() => searchAPI(searchTerm)}
            />
            <ScrollView>
                <ResultsList 
                    results ={filterResultsByPrice('$')} 
                    title='Cost Effective'
                />
                <ResultsList 
                    results ={filterResultsByPrice('$$')} 
                    title='Bit Pricier'
                />
                <ResultsList 
                    results ={filterResultsByPrice('$$$')} 
                    title='Big Spender'
                    />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;