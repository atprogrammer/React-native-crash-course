import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'


export default function FormField({
    title, value, placeholder,
    handleChangeText, otherStyles, ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-xl text-gray-100 mb-3 font-pmedium">{title} :</Text>

            {/* Container ของ TextInput พร้อม Icon */}
            <View className="relative w-full">
                <TextInput
                   className="flex-1 text-white font-psemibold
                   border-2 border-black-200 w-full h-16 text-xl
                px-4 bg-black-100 rounded-2xl focus:border-secondary items-center"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {/* Icon แสดงด้านใน TextInput */}
                {title === 'Password' && (
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 16, // ระยะห่างจากขอบขวา
                            top: '50%',
                            transform: [{ translateY: -12 }] // จัดตรงกลางแนวตั้ง
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            style={{ width: 24, height: 24, tintColor: '#7b7b8b' }}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}