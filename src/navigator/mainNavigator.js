import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48004Navigator from '../features/BlankScreen48004/navigator';
import CalendarView8003Navigator from '../features/CalendarView8003/navigator';
import EmailAuth8002Navigator from '../features/EmailAuth8002/navigator';
import Messaging8001Navigator from '../features/Messaging8001/navigator';
import Messaging8000Navigator from '../features/Messaging8000/navigator';
import EmailAuth7999Navigator from '../features/EmailAuth7999/navigator';
import CalendarView7998Navigator from '../features/CalendarView7998/navigator';
import BlankScreen47997Navigator from '../features/BlankScreen47997/navigator';
import BlankScreen97996Navigator from '../features/BlankScreen97996/navigator';
import BlankScreen107995Navigator from '../features/BlankScreen107995/navigator';
import BlankScreen107989Navigator from '../features/BlankScreen107989/navigator';
import BlankScreen97988Navigator from '../features/BlankScreen97988/navigator';
import BlankScreen47982Navigator from '../features/BlankScreen47982/navigator';
import CalendarView7981Navigator from '../features/CalendarView7981/navigator';
import EmailAuth7980Navigator from '../features/EmailAuth7980/navigator';
import Messaging7979Navigator from '../features/Messaging7979/navigator';
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
BlankScreen48004: { screen: BlankScreen48004Navigator },
CalendarView8003: { screen: CalendarView8003Navigator },
EmailAuth8002: { screen: EmailAuth8002Navigator },
Messaging8001: { screen: Messaging8001Navigator },
Messaging8000: { screen: Messaging8000Navigator },
EmailAuth7999: { screen: EmailAuth7999Navigator },
CalendarView7998: { screen: CalendarView7998Navigator },
BlankScreen47997: { screen: BlankScreen47997Navigator },
BlankScreen97996: { screen: BlankScreen97996Navigator },
BlankScreen107995: { screen: BlankScreen107995Navigator },
BlankScreen107989: { screen: BlankScreen107989Navigator },
BlankScreen97988: { screen: BlankScreen97988Navigator },
BlankScreen47982: { screen: BlankScreen47982Navigator },
CalendarView7981: { screen: CalendarView7981Navigator },
EmailAuth7980: { screen: EmailAuth7980Navigator },
Messaging7979: { screen: Messaging7979Navigator },
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
