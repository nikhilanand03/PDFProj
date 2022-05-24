/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React,{useState,useRef, useEffect} from 'react';
 import { StyleSheet, Dimensions, View, TextInput, Button } from 'react-native';
 import Pdf from 'react-native-pdf';
 
 const PDFExample = () => { 
    const [text,setText] = useState("");
    const [pageNo,setPageNo] = useState(0);

    const source = { uri:'bundle-assets://pdf/dasgupta.pdf', cache: true };
    
    const pdfRef = useRef(null);

    const changePage = (page) => {
        pdfRef.current.setPage(page);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            onChangeText={(newText) => setText(newText)}
            value={text}>
                
            </TextInput>
            <Button title="Change page number"
            onPress={()=>{setPageNo(text); 
                pdfRef.current.setPage(Number(text));
            console.log(pageNo,text); }
            }
            style={styles.button}>

            </Button>
            <Pdf
                source={source}
                ref={pdfRef}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                trustAllCerts={false}
                style={styles.pdf}/>
        </View>
    );
 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'flex-start',
         alignItems: 'center',
         marginTop: 25,
     },
     pdf: {
         flex:1,
         width:Dimensions.get('window').width,
         height:Dimensions.get('window').height,
     },
     input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button:{
          paddingBottom:25,
      }
 });

 export default PDFExample;