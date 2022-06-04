import React, {useCallback, useRef} from 'react';
import {Pressable, TextInput} from 'react-native';
import globalType from 'styles/global-typo';
import {
  Description,
  DescriptionBlock,
  styles,
  Subject,
  TextFieldBlock,
} from './style';

type TextFieldProps = {
  subject?: string;
  placeholoder: string;
  value: string;
  onChangeText: () => void;
  isError: boolean;
  description?: string;
};

function TextField({
  subject,
  placeholoder,
  value,
  onChangeText,
  isError,
  description,
}: TextFieldProps) {
  const InputRef = useRef<TextInput | null>(null);

  const onPress = useCallback(() => InputRef.current?.focus(), []);

  return (
    <>
      <Pressable onPress={onPress}>
        <TextFieldBlock style={[isError && styles.error]}>
          {subject && <Subject>{subject}</Subject>}
          <TextInput
            style={[globalType.body1R]}
            placeholder={placeholoder}
            placeholderTextColor="#9E9E9E"
            value={value}
            onChangeText={onChangeText}
            ref={InputRef}
          />
        </TextFieldBlock>
      </Pressable>
      <DescriptionBlock>
        <Description>{description}</Description>
      </DescriptionBlock>
    </>
  );
}

export default TextField;
