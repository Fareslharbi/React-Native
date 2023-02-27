import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
            
        }}
        onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }} 
            />
        </TouchableOpacity>
    )
    }

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth: minWidth,
            padding: SIZES.small,
            ...props,
            }}
            onPress={handlePress}
            >
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: "center"
            }}>للمزيد من المعلومات</Text>
            </TouchableOpacity>
    )
    }

export const JannaProjectsButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            left: 100,
            top: 15,
            width: "40%",
            height: 30,
            borderRadius: SIZES.font,
            backgroundColor: "#761d3c",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.light,
            }}
            onPress={handlePress}
            >
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: "center"
            }}>اطلب الآن</Text>
        </TouchableOpacity>
    )
    }



