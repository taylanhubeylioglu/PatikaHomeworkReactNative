import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './product_card_style';

const ProductCard = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} />
            <Text style={styles.product_title}></Text>
            <Text style={styles.product_price}></Text>
            <Text style={styles.product_stock_info}></Text>
        </View>
    );
}

export default ProductCard;