import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalColor from 'styles/global-color';
import {Header, SearchBar, TextField, Toast} from 'components/Shared';

function OnBoardScreen() {
  return (
    <SafeAreaView style={[globalColor.white]}>
      <View>
        <SearchBar />
        <TextField description="text" isError />
        <Header back title="header" />
        {/* <Toast /> */}
      </View>
    </SafeAreaView>
  );
}

export default OnBoardScreen;
