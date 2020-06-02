import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList58277Navigator from '../features/NotificationList58277/navigator';
import Camera50054Navigator from '../features/Camera50054/navigator';
import BlankScreen50053Navigator from '../features/BlankScreen50053/navigator';
import ArticleList50016Navigator from '../features/ArticleList50016/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList58277: { screen: NotificationList58277Navigator },
Camera50054: { screen: Camera50054Navigator },
BlankScreen50053: { screen: BlankScreen50053Navigator },
ArticleList50016: { screen: ArticleList50016Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
