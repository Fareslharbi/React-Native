import { useState  } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';


import {COLORS, janaServicesData } from '../constants';
import { HomeHeader, JanaCard, FocusedStatusBar, HomeFooter } from '../components';

const DetailsHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1f1f38'}}>
      <FocusedStatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={janaServicesData}
            renderItem={({ item }) => <JanaCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // ListHeaderComponent={<HomeHeader />}
            ListFooterComponent={<HomeFooter />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailsHeader