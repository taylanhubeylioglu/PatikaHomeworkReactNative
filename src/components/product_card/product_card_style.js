import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'gray',
        margin:20,
        padding:10,
        borderRadius:15,
        width: Dimensions.get("window").width * 0.4,
        height: Dimensions.get('window').width * 0.8,
    },
    image:{
        width: Dimensions.get('window').width * 0.34,
        height: Dimensions.get('window').width * 0.44,
        alignSelf:'center',
        borderRadius:5,
    },
    product_title:{
        fontSize:16,
        fontWeight:'bold',
        margin:5,
        marginBottom:0,
    },
    product_price:{
        fontSize:14,
        fontWeight:'300',
        color:'cyan',
        marginLeft:5,
        marginRight:5,
    },
    product_stock_info:{
        fontSize:14,
        color:'red',
        marginTop:5,
    },
});