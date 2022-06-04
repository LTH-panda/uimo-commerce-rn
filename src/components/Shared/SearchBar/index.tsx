import {SearchIcon} from 'components/Icons';
import React, {useCallback, useRef} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {SearchBarBlock} from './style';

function SearchBar() {
  const inputRef = useRef<TextInput | null>(null);

  const onPress = useCallback(() => inputRef.current?.focus(), []);

  return (
    <Pressable onPress={onPress}>
      <SearchBarBlock>
        <TextInput style={{flex: 1}} ref={inputRef} placeholder="Search" />
        <View style={{marginLeft: 'auto'}}>
          <SearchIcon fill="#9e9e9e" />
        </View>
      </SearchBarBlock>
    </Pressable>
  );
}

export default SearchBar;
