import {StyleSheet} from 'react-native';

const globalLayout = StyleSheet.create({
  full: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    padding: 16,
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  paddingVertical: {
    paddingVertical: 16,
  },
  mgTop: {
    marginTop: 16,
  },
  mgBot: {
    marginBottom: 16,
  },
  mgLeft: {
    marginLeft: 16,
  },
  mgRight: {
    marginRight: 16,
  },
});

export default globalLayout;
