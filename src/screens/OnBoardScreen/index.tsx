import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title} from 'components/Shared';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import {Text, View} from 'react-native';
import globalType from 'styles/global-typo';
import OnBoardActions from './OnBoardActions';

function OnBoardScreen() {
  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <View style={[globalLayout.paddingVertical, globalLayout.full]}>
        <Title title="ulmo" />
        <View style={[globalLayout.padding, globalLayout.full]}>
          <Text style={[globalType.body1R]}>commerce app</Text>
        </View>
        <OnBoardActions />
      </View>
    </SafeAreaView>
  );
}

export default OnBoardScreen;
