import {View} from 'react-native';
import React from 'react';
import globalLayout from 'styles/global-layout';

type BodyTemplateProps = {
  children: React.ReactNode;
};
function BodyTemplate({children}: BodyTemplateProps) {
  return (
    <View style={[globalLayout.padding, {justifyContent: 'center'}]}>
      {children}
    </View>
  );
}

export default BodyTemplate;
