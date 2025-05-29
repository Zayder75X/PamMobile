import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const cell= () => {
return (<TouchableOpacity style={style.cell}>
    <Text style={style.cellContent}>X</Text>
</TouchableOpacity>)
    }
  
  return <View style={style.container}>
<Text style={style.tiltle}>Jogo da Velha</Text>
<Text style={style.status}>Vencedor</Text>
<View style={style.board}>
    <View style={style.row}>{cell()}{cell()}{cell()}</View>
    <View style={style.row}>
    {cell()}{cell()}{cell()}
    </View>
    <View style={style.row}>
    {cell()}{cell()}{cell()}
    </View>
</View>
</View>
}
const style = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#F3D9B1'

    },
    tiltle:{
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    status:{
        fontSize: 18,
        marginBottom:20
    },
    board:{
        marginBottom: 20
    },
    row: {
        flexDirection: 'row'
    },
    cell: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderColor: 'FFD586',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "FFFFFF"
    },
    cellContent:{
        fontSize: 36,
        fontWeight: "bold"
    }
})
