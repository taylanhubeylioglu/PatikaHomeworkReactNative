import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'gray',
        margin:20,
        padding:15,
        borderRadius:15,
        width: Dimensions.get("window").width * 0.3,
        height: Dimensions.get('window').width * 0.5,
    },
    image:{
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2
    },
    product_title:{
        fontSize:16,
        fontWeight:'bold'
    },
    product_price:{
        fontSize:14,
        fontWeight:'300',
        color:'gray',
    },
    product_stock_info:{},
});