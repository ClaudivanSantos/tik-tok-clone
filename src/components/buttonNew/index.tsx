import {Entypo} from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native';

interface IButtonProps{
  size: number;
}

export default function ButtonNew({size}: IButtonProps) {
  return (
    <View className='border-x-[5px] rounded-md border-l-teal-500  border-r-rose-600'>
      <View className='bg-white p-[1px] pr-2 pl-2'>
      <Entypo name='plus' size={size} color="#000"/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    borderLeftWidth: 4,
    borderLeftColor: "#1ebfc7",
    borderRightWidth: 4,
    borderRightColor: "#f43071",
    borderRadius: 6
  },
  inner: {
    backgroundColor: '#fff',
    padding: 1,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 3
  }
})
