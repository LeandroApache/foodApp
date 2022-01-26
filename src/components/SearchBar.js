import {View, Text, StyleSheet, TextInput} from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar = ({term, onChange, onSubmit}) => {

    return <View style={styles.searchContainer}>
        <Feather name="search" size={30} style={styles.icon}/>
        <TextInput placeholder="search"
                   style={styles.input}
                   value={term}
                   onChangeText={onChange}
                   autoCapitalize="none"
                   autoCorrect={false}
                   onEndEditing={() => onSubmit(term)}
        />
    </View>
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: "#F0EEEE",
        // height: 50,
        marginRight: 15,
        marginBottom: 10,
        borderRadius: 3,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        // marginRight: 10
    },
    input: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 10,
        fontSize: 16
    }
});


export default SearchBar;
