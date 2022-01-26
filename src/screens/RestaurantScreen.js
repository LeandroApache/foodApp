import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import {useEffect, useState} from "react";
import yelp from "../api/yelp";

const RestaurantScreen = ({navigation}) => {
    console.log("Restaurant screen is rendering")

    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        console.log(response.data)
        setResult(response.data);
    };

    useEffect(() => {
        getRestaurant(id);
    }, []);

    if (!result) {
        return null;
    }

    return <View style={{flex: 1}}>
        <Text>{result.name}</Text>
        <FlatList data={result.photos} keyExtractor={photo => photo} renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}}/>
        }
        }/>
    </View>
};

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 300,
    }
});

export default RestaurantScreen;
