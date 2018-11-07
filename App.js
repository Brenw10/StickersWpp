import StickerList from 'StickersWpp/src/views/StickerList';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    StickerList: {
      screen: StickerList,
      navigationOptions: () => ({ title: 'Stickers' }),
    },
  },
  {
    initialRouteName: 'StickerList',
  },
);