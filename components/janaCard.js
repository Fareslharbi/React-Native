import { View, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, NFTTitle, EthPrice} from '../components/SubInfo'
const JanaCard = ({ data }) => {
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
            title={data.title}
            subTitle={data.description}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />

      </View>
    </View>
  )
}

export default JanaCard