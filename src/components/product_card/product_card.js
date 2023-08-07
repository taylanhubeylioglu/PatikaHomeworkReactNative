import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './product_card_style';

const ProductCard = ({products}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:products.imgURL}} />
            <Text style={styles.product_title}>{products.title}</Text>
            <Text style={styles.product_price}>{products.price}</Text>
            <Text style={styles.product_stock_info}>{products.inStock ? '':'Stokta Yok'}</Text>
        </View>
    );
}

export default ProductCard;