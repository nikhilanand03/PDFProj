/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Pdf from 'react-native-pdf';
import PDFView from './PDFView';
import PDF1 from './src/Pdf/PDFExample';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView contentContainerStyle={{flex:1}}
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
      },styles.sectionDescription}>
        
        <Text>
          Here is the <Text style={styles.bold}>App.js</Text> opening screen.
        </Text>
        <Text>
          Reload
        </Text>
        <Text>
          Debug
        </Text>
        <Text>
          Read the docs to discover what to do next.
        </Text>
        <PDFView/>
    </ScrollView>
    
  );
  
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  bold: {
    fontWeight: '700',
  },
  textContainer:{
    display:'flex',
    flexDirection:'column',
    flex:2
  }

});

export default App;
