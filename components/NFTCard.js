import { View, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, NFTTitle, EthPrice} from '../components/SubInfo'
const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image 
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font
        }}
        />
      </View>

      <View style={{
        width: '100%',
        padding: SIZES.font,
        // backgroundColor: 'black'
      }}>
        
          <NFTTitle 
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />

          <View style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "black"
          }}>
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("DetailsJana", { data })} 
            />
          </View>
      </View>
    </View>
  )
}

export default NFTCard