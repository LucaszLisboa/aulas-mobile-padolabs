import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    info: {
        display: "flex",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
    },
    text: {
        marginBottom: 15,
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    title:{
        fontSize:20, 
        fontWeight:"bold", 
        color:"black", 
        marginTop:30, 
        paddingLeft:20
    },
    cards:{
        display: 'flex', 
        alignItems: 'center'
    },
    card:{
        backgroundColor:"white", 
        width:350, height:115, 
        marginTop:20, 
        flexDirection:"row", 
        borderRadius:10, 
        elevation:5
    },
    imgCard:{
        justifyContent: 'center', 
        paddingHorizontal:5
    }
})