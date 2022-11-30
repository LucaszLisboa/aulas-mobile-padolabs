import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

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
    card: {
        display: 'flex', 
        flexDirection:"row", 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        backgroundColor:"white", 
        marginTop: 60,
        width: 330,
        height: 155,
        borderRadius: 20,
        elevation: 70,

    },
    uv:{
        padding: 10,
        marginTop: 40,
        flexDirection: 'row',
        width: 265,
        justifyContent: 'space-between',
    },
    text_uv:{
        color:"#414B5A",
        fontSize:15,
        fontWeight:"bold",
        marginTop: 17,
    }
})

export default styles;