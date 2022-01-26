import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import RestaurantItem from "./RestaurantItem";
import {withNavigation} from "react-navigation";

const RestaurantList = ({title, results, navigation}) => {
    if (!results.length) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList horizontal={true}
                  data={results}
                  keyExtractor={result => result.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                      return (
                          <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {id: item.id})}>
                              <RestaurantItem result={item}/>
                          </TouchableOpacity>
                      )
                  }}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    }
})

export default withNavigation(RestaurantList);
