import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, ListView, View, Image, Dimensions } from 'react-native';

import sp1 from '../../../../temp/sp3.jpeg';
import sp4 from '../../../../temp/sp4.jpeg';
import global from '../../../global';

const url = 'http://192.168.1.92:3000/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {
    constructor(props){
      super(props);
      this.state={
        listProducts:[]
      }
      global.setSearchArray = this.setSearchArray.bind(this);
    }

    setSearchArray(arrProduct){
      this.setState({listProducts:arrProduct});
    }
    gotoDetail(product){
      const {navigator} = this.props;
      navigator.push({name:'PRODUCT_DETAIL', product});
    }
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper
        } = styles;
        return (
          <View style={wrapper}>
              <ListView
                dataSource={new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2}).cloneWithRows(this.state.listProducts)}
                renderRow={productItem=>(
                  <View style={product}>
                      <Image source={{ uri: `${url}${productItem.images[0]}` }} style={productImage} />
                      <View style={mainRight}>
                          <Text style={txtName}>{toTitleCase(productItem.name)}</Text>
                          <Text style={txtPrice}>{productItem.price}</Text>
                          <View style={{ flexDirection: 'row' }} >
                              <Text style={txtColor}>Color: {productItem.color}</Text>
                              <View
                                  style={{
                                      height: 15,
                                      width: 15,
                                      backgroundColor: 'white',
                                      borderRadius: 15,
                                      marginLeft: 10
                                  }}
                              />
                          </View>
                          <TouchableOpacity style={showDetailContainer} onPress={()=>this.gotoDetail(productItem)}>
                              <Text style={txtShowDetail}>SHOW DETAILS</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                )}
              />
            </View>
        );
    }
}



const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgb(194, 216, 233)',
        flex: 1
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default SearchView;
