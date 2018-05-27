import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.161182,
          longitude: 115.024458
        },
        title: 'Pantai Lovina',
        subtitle: 'Nikmati pemandangan yang indah bersama lumba-lumba'
      },
      {
        key:2,
        latlng: {
          latitude:-8.187693,
          longitude: 115.136612
        },
        title: 'Air Terjun Gitgit',
        subtitle: 'Air terjun dengan kolam renang alami yang bisa dicapai hanya dengan jalan kaki'
      },
      {
        key:3,
        latlng: {
          latitude:-8.127815,
          longitude: 114.475335
        },
        title: 'Taman Nasional Bali Barat',
        subtitle: 'Penangkaran satwa langka'
      },
      {
        key:4,
        latlng: {
          latitude:-8.103521,
          longitude: 115.089017
        },
        title: 'Eks Pelabuhan Buleleng',
        subtitle: 'Kawasan wisata eks pelabuhan Buleleng di kota Singaraja'
      },
      {
        key:5,
        latlng: {
          latitude:-8.077529,
          longitude: 115.2172852
        },
        title: 'Permandian Air Sanih',
        subtitle: 'Kolam renang alami yang menyegarkan'
      },
      {
        key:6,
        latlng: {
          latitude:-8.178805,
          longitude: 114.994285
        },
        title: 'Krisna Funtastic Land',
        subtitle: 'Bermain dan berrekreasi bersama keluarga di Krisna Funtastic Land'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Destinasi Wisata Buleleng
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>Winda Kerti Kusumayani</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 22,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
