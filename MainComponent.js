import React, {Component} from "react";
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'

export default class MainComponent extends Component{

    // 화면 갱신에 영향을 주는 아주 특별한 변수 state
    state={
        text:"Hello",
        text2:"RN",
        text3:"Nice"
    }

    // TextInput의 글씨가 변경될때마다 저장하는 일반변수

    render(){
        return (
            <View style={style.root}>
                <TextInput onChangeText={this.changeText} style={style.textInput}></TextInput>
                <Text style={style.plainText}>{this.state.text}</Text>

                <View style={{marginTop:40}}></View>

                <TextInput multiline={true} numberOfLines={10} onChangeText={this.chagneText2} style={style.textInput2}></TextInput>
                <Button title="입력 완료" onPress={this.clickBtn}></Button>
                <Text style={style.plainText}>{this.state.text2}</Text>

                <View style={{marginTop:40}}></View>
                <TextInput onSubmitEditing={this.submit} style={style.textInput2}></TextInput>
                <Text style={style.plainText}>{this.state.text3}</Text>
            </View>
        )
    }

    // onSubmitEditing은 파라미터로 입력된 글씨를 가진 이벤트 객체가 
    // 전달되어 옴.
    submit=(submitEvent)=>{
        let value=submitEvent.nativeEvent.text
        this.setState({text3:value})
    }

    clickBtn=()=>{
        // state 값 변경
        this.setState({text2:this.sss})
    }

    // TextInput의 글씨가 변경될때마다 발동하는 메소드
    // 이 메소드의 파라미터로 변경된 글씨가 자동 전달되어 옴.
    changeText=(msg)=>{
        this.setState({text:msg})
    }

    chagneText2=(msg)=>{
        this.sss=msg     // 일반변수이므로 화면 갱신되지 않음.
    }
}

const style=StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    textInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'green',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,
        height:40
    },
    plainText:{
        marginTop:16,
        fontWeight:'bold',
        padding:10,
        color:'black'
    },
    textInput2:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'indigo',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,
        maxHeight:200,
        marginBottom:16
    },
})