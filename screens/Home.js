import { useState  } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';


import {COLORS, NFTData } from '../constants';
import { HomeHeader, NFTCard, FocusedStatusBar, HomeFooter } from '../components';

const Home = () => {

  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    if(filteredData.length){
      setNftData(filteredData);
    }else{
      setNftData(NFTData); 
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1f1f38" }}>
      <FocusedStatusBar 
      hidden={false}
      barStyle="light-content"
      backgroundColor="transparent"
      translucent={true}
      />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            ListFooterComponent={<HomeFooter />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home