import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";

const RestaurantItem = ({result}) => {
    return <View style={styles.container}>
        <Image source={{ uri: result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        // paddingLeft: 10,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    name: {
        fontWeight: "bold",
    },
    rating: {
        color: "#CCCCCC"
    }
});

export default RestaurantItem;
