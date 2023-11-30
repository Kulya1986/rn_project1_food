import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [businesses, setBusinesses] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchAPI = async searchTerm =>{
        
        try {
            const resp = await yelp.get('/search', {
                params:{
                    term: searchTerm,
                    location:'san jose',
                    limit: 50
                }
           });
           setBusinesses(resp.data.businesses);
        }catch (err) {
            console.log(err);
            setErrorMsg('Something went wrong!')
        }
       
    };

    useEffect(()=>{
        searchAPI('pasta');
    }, []);

    return [searchAPI, businesses, errorMsg];
};