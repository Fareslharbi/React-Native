import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets, SHADOWS} from '../constants'
import { AntDesign, Entypo } from '@expo/vector-icons';
const HomeFooter = () => {
  return (
    <View style={{width: "100%", height: "100%", backgroundColor: "transparent", alignItems: "center", flexDirection: "column"}}>
        <TouchableOpacity style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          }}
        >
            <Text style={{color: "#fff",}}
                >الاستبيان
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          }}
        >
            <Text style={{color: "#fff",}}
                >التوظيف
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          }}
        >
            <Text style={{color: "#fff",}}
                >اتصل بنا
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          }}
        >
            <Text style={{color: "#fff",}}
                >تطبيق جنى بلس
            </Text>
        </TouchableOpacity>

        <View style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}>
          
        <TouchableOpacity>
          <AntDesign name="linkedin-square" size={24} color="#fff" style={{ marginRight: 5}}/>
        </TouchableOpacity>
  
        <TouchableOpacity>
          <AntDesign name="instagram" size={24} color="#fff" style={{ marginRight: 5}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="twitter" size={24} color="#fff" style={{ marginRight: 5}}/>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          }}
        >
            <Text style={{color: "#fff",}}
                >جميع الحقوق محفوظة لمركز جنى
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          }}
        >
            <Text style={{color: "#fff",}}
                >تصميم وتطوير فارس
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeFooter