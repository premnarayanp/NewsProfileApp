import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 150
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.CardItemContainer} >
            <Image alt='hi' source={{ uri: item.urlToImage }} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    CardItemContainer: {
        width: ITEM_WIDTH,
        paddingBottom: 10,
        backgroundColor: "white",
    },
    image: {
        width: 350,
        height: 250,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
    },
    itemTitle: {
        color: 'blue',
        fontSize: 14,
        fontWeight: "bold",
    }
})

export default CarouselCardItem;

// shadowColor: "#000",
// shadowOffset: {
//     width: 0,
//     height: 3,
// },
// shadowOpacity: 0.29,
// shadowRadius: 4.65,
// elevation: 7,