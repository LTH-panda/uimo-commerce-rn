import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import {BodyTemplate, Header, SearchBar, Title} from 'components/Shared';
import {ProductCategoryList, ProductStroyList} from 'components/Product';

function RoomScreen() {
  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <ScrollView>
        <Header />
        <Title title="ulmo" isCenter />
        <BodyTemplate>
          <SearchBar />
          <View style={{paddingVertical: 8}}>
            <ProductStroyList />
          </View>
          <ProductCategoryList />
        </BodyTemplate>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RoomScreen;
