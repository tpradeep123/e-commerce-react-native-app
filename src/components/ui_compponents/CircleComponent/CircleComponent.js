import {View,Dimensions,Image,Text,FlatList, ScrollView} from "react-native"
import { serverURL } from "../../../Services/FetchNodeServices"
const {width,height}=Dimensions.get("screen")
export default function CircleComponent(props){
var color=['#bdc3c7','#54a0ff','#00d2d3','#feca57','#badc58']
const ShowCategory=({item})=>{
    return(<View  style={{margin:5,flexDirection:'column',justifyContent:'center',alignItems:'center',width:120,height:135}}>
    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:120,height:120,borderRadius:60,backgroundColor:color[parseInt(Math.random()*4)],}}>
     <Image style={{width:70,height:70,resizeMode:'contain'}} source={{uri:`${serverURL}/images/${item.icon}`}}/>
    </View>
    <Text>{item.categoryname}</Text>
    </View>)
}
return(
    <ScrollView style={{padding:5,marginVertical:5}} showsHorizontalScrollIndicator={false} horizontal={true}>
    <FlatList
    horizontal
    data={props.data}
    renderItem={({item})=><ShowCategory item={item}/>}
    keyExtractor={item =>item.categoryid}
    />
    </ScrollView>
)  
    
}