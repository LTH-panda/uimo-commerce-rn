import {Image} from 'react-native';
import React from 'react';
import {CameraIcon} from 'components/Icons';
import {ImageBlock} from './style';

type ProfileImageProps = {
  image?: string;
};

function ProfileImage({image}: ProfileImageProps) {
  return (
    <ImageBlock style={{borderRadius: 100}}>
      {image ? (
        <Image source={{uri: image}} />
      ) : (
        <CameraIcon width="50%" height="50%" fill="#212121" />
      )}
    </ImageBlock>
  );
}

export default ProfileImage;
