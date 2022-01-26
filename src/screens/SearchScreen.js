import {View, Text, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, error, searchApi] = useRestaurants();

    useEffect(() => {
        searchApi("pasta");
    }, []);

    const changeTermHandler = (newValue) => {
        setTerm(newValue);
    };

    const submitTermHandler = (term) => {
        searchApi(term);
    };

    const filterResultsByPrice = price => {
        //price === "$" || "$$" || "$$$"
        return results.filter(result => {
            return result.price === price;
        })
    };

    //flex 1 позволяет элементу занимать весь экран, а не выходить за его элементы, что влияет на скролл дочерних элементов
    //альтернативно можно использовать <></>
    return <View style={{marginLeft: 10, flex: 1}}>
        <SearchBar term={term} onChange={changeTermHandler} onSubmit={submitTermHandler}/>
        <Text>{error}</Text>
        <ScrollView>
            <RestaurantList results={filterResultsByPrice("$")} title="Cost Effective"/>
            <RestaurantList results={filterResultsByPrice("$")} title="Cost Effective"/>
            <RestaurantList results={filterResultsByPrice("$")} title="Cost Effective"/>
            <RestaurantList results={filterResultsByPrice("$$")} title="Bit Pricier"/>
            <RestaurantList results={filterResultsByPrice("$$$")} title="Big Spender"/>
        </ScrollView>
    </View>
};

export default SearchScreen;
