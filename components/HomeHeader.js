import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { JannaProjectsButton } from './Button'
import { COLORS, FONTS, SIZES, assets, SHADOWS} from '../constants'

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: "transparent",
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "50%"
      }}>
        <Image 
          source={assets.janaLogo}
          resizeMode="contain"
          style={{ width: 200, height: 100}}
        />

      </View>

      <View style={{ margin: SIZES.font * 2, border: "10%", borderColor: "#fff"}}>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, left: "63%"}}>
          تقدمي بطلبك الآن
        </Text>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small +2, color: COLORS.white, marginTop: SIZES.base / 2, textAlign: "center"}}>
        يقـدم مركز جنى قروضـا حسنه للعميلات بـدون كفــالات
        تقليديه وذلك بصوره تدريجية حتى تصل الى المستفيدة                            
        </Text>
        <JannaProjectsButton
          handlePress={() => navigation.navigate("DetailsHeader")} 
        />
      </View>

      <View>
        <TouchableOpacity style={{
          width: "100%",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.large * 2,
          alignItems: "center",
          justifyContent: "center",
          ...SHADOWS.light,
              
          }}
          >
          <View style={{
            flex: 1,
            flexDirection: "row"
          }}>
            <View style={{ flex: 1 , alignItems: "flex-end"}}>
              <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white}}>كلمة الشيخ سليمان الراجحي</Text>
              <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white, marginTop: SIZES.base / 2, textAlign: "center"}}>أشركت في أجر هذه الأوقاف كل مسؤول في أي جهة حكومية أو أهلية قدم دعمًا أو تسهيلاً أو أزال عقبة عن هذه الأوقاف رغبة في إنجاحها ورعايتها، وأشركت فيه جميع العاملين فيها ووالديهم وكل من أسهم فيه بجهد أو نصيحة أو مشورة أو دعوة صالح</Text>
            </View>
            
            <Image 
              source={assets.janaCEO}
              resizeMode="cover"
              style={{
                width: 110, height: 100, borderRadius: "50%", left: 10
              }}
            />
          </View>
          </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default HomeHeader


