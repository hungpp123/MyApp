import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import map from '../../../../appIcon/map.png';

import phoneIcon from '../../../../appIcon/phone.png';
import mailIcon from '../../../../appIcon/mail.png';
import messageIcon from '../../../../appIcon/message.png';
import locationIcon from '../../../../appIcon/location.png';

class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>

                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>Lĩnh Nam - Hoàng Mai- Hà Nội</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 0912345678</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} style={imageStyle} />
                        <Text style={infoText}>shopadidasauth@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 0981139964</Text>
                    </View>
                </View>
            </View>
        );
    }
}

// <View style={mapContainer}>
//     <Image
//         style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={map}
//     />
// </View>

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: 'rgb(194, 216, 233)' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});

export default Contact;
