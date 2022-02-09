/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const App: () => Node = () => {

    return (
        <SafeAreaView>
          <ScrollView
              contentInsetAdjustmentBehavior="automatic">
            <View>
              <View title="Step One">
                <Text> to change this
                  screen and then come back to see your edits.</Text>
              </View>
              <View title="See Your Changes">

              </View>
              <View title="Debug">

              </View>
              <View title="Learn More">
                <Text>Read the docs to discover what to do next:</Text>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
    );
};

export default App;
