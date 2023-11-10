import React from 'react';
import { useState ,useEffect} from 'react';
import { Modal,View,Text,Dimensions,TouchableOpacity, TextInput } from 'react-native';
import Button from '../ButtonComponent/Button';
import AddressModal from '../AddressModal/AddressModal';
import { storeData } from '../../../Storage/AsyncStorage';
import { useDispatch } from 'react-redux';
import { postData } from '../../../Services/FetchNodeServices';
const {width,height}=Dimensions.get("screen")
export default function OtpModal({setShow,show,mobileno}){
    var dispatch=useDispatch()
    const [otp,setOtp]=useState('')
    const [firstDigit,setFirstDigit]=useState('')
    const [secondDigit,setSecondDigit]=useState('')
    const [thirdDigit,setThirdDigit]=useState('')
    const [fourthDigit,setFourthDigit]=useState('')
    const [visible,setVisible]=useState(false)
    const handleAddress=async()=>{
        var iotp = firstDigit + secondDigit + thirdDigit + fourthDigit
        if(otp==iotp){
            var result=await postData('userinterface/check_mobile_no',{mobileno,mobileno})
            if(result.status)
            {
                var res=await postData('userinterface/check_address_by_mobile_no',{mobileno,mobileno})
                if(res.status)
                { console.log('QQQQQQQQQQQQQQQQQQQQ : ',res.data[0])
                  dispatch({type:'ADD_USER',payload:[res.data[0]]})
                  await storeData('login',res.data[0])
                  setShow(false)
                }
                else{
                    setVisible(true)
           
                }
            }
            else{
                alert(mobileno)
                setVisible(true)
                setShow(false)
            }
          
        }
        else{
            alert("Invalid Otp")
        }
       }
       
   const generateOtp=()=>{
    var otp=parseInt(Math.random()*8999)+1000;
    setOtp(otp)
    console.log('ooootttttpppp : ',otp)
   }
   useEffect(function(){
    generateOtp()
   },[])

    //    useEffect(function(){
    //     setShow(props.visible)
    //    },[props])
    return(
        <TouchableOpacity style={{flex:1,backgroundColor:'red'}} >
           <Modal visible={show} transparent>
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:width*0.9,height:height*0.3,backgroundColor:'#fff',borderRadius:20}}>
<Text style={{fontSize:20,alignSelf:'center',padding:15,paddingBottom:30,fontWeight:900,textColor:'#000'}}>OTP verification</Text>

<View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:15}}>
<TextInput onChangeText={(txt)=>setFirstDigit(txt)}  style={{width:width*0.13,borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7}}/>
<TextInput onChangeText={(txt)=>setSecondDigit(txt)} style={{width:width*0.13,borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7}}/>
<TextInput onChangeText={(txt)=>setThirdDigit(txt)} style={{width:width*0.13,borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7}}/>
<TextInput onChangeText={(txt)=>setFourthDigit(txt)} style={{width:width*0.13,borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7}}/>
</View>

<View style={{alignSelf:'center',padding:30}}>
<Button onPress={()=>handleAddress()}  w={0.8} h={0.07} label={'DONE'} bgcolor={'#008000'} fontSize={20} textColor={'#fff'} borderColor={'#008000'} />

</View>
        </View>
            </View>
           </Modal>
           <AddressModal setVisible={setVisible} visible={visible}/>
        </TouchableOpacity>
    )
}