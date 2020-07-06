import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen47997Navigator from '../features/BlankScreen47997/navigator';
import BlankScreen97996Navigator from '../features/BlankScreen97996/navigator';
import BlankScreen107995Navigator from '../features/BlankScreen107995/navigator';
import BlankScreen107989Navigator from '../features/BlankScreen107989/navigator';
import BlankScreen97988Navigator from '../features/BlankScreen97988/navigator';
import BlankScreen47982Navigator from '../features/BlankScreen47982/navigator';
import CalendarView7981Navigator from '../features/CalendarView7981/navigator';
import EmailAuth7980Navigator from '../features/EmailAuth7980/navigator';
import Messaging7979Navigator from '../features/Messaging7979/navigator';
import Messaging7970Navigator from '../features/Messaging7970/navigator';
import EmailAuth7969Navigator from '../features/EmailAuth7969/navigator';
import CalendarView7968Navigator from '../features/CalendarView7968/navigator';
import BlankScreen47967Navigator from '../features/BlankScreen47967/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen47997: { screen: BlankScreen47997Navigator },
BlankScreen97996: { screen: BlankScreen97996Navigator },
BlankScreen107995: { screen: BlankScreen107995Navigator },
BlankScreen107989: { screen: BlankScreen107989Navigator },
BlankScreen97988: { screen: BlankScreen97988Navigator },
BlankScreen47982: { screen: BlankScreen47982Navigator },
CalendarView7981: { screen: CalendarView7981Navigator },
EmailAuth7980: { screen: EmailAuth7980Navigator },
Messaging7979: { screen: Messaging7979Navigator },
Messaging7970: { screen: Messaging7970Navigator },
EmailAuth7969: { screen: EmailAuth7969Navigator },
CalendarView7968: { screen: CalendarView7968Navigator },
BlankScreen47967: { screen: BlankScreen47967Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

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
