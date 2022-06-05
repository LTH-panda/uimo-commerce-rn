import {Modal, Pressable} from 'react-native';
import React from 'react';
import {ModalContent, styles} from './style';

type BottomModalProps = {
  visible: boolean;
  onVisible: () => void;
  children: React.ReactNode;
};

function BottomModal({visible, onVisible, children}: BottomModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable onPress={onVisible} style={[styles.dim]} />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

export default BottomModal;
