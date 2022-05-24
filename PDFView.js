import React,{useState,useRef} from 'react';
import Pdf from 'react-native-pdf';
import PDF from './src/Pdf/PDFExample';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const PDFView = () => {
    

    return (
        <ScrollView contentContainerStyle={{flex:1}}>
            
            <PDF/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
});

export default PDFView
