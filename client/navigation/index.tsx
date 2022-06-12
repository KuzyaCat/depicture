/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { WelcomeScreen } from '../screens/welcome-screen';
import { ScanScreen } from '../screens/scan';
import TabTwoScreen from '../screens/TabTwoScreen';
import { QRCodeScannerScreen } from '../screens/qr-code-scanner';
import { NFCScannerScreen } from '../screens/nfc-scanner';
import { ProfileScreen } from '../screens/profile';
import { RequestsScreen } from '../screens/requests';
import { PictureScreen } from '../screens/picture';
import { PortfolioScreen } from '../screens/portfolio';
import { AuctionDetailsScreen } from '../screens/auction-details';

import * as userSelectors from '../redux/selectors/user.selector';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

type IWalletAddress = string | null;

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const walletAddress = useSelector(userSelectors.getWalletAddress);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator walletAddress={walletAddress} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ walletAddress }: { walletAddress?: IWalletAddress }) {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {
        walletAddress
          ? <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
                headerTintColor: Colors.light.BLUE,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          : <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
              headerTintColor: Colors.light.BLUE,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
      }
      <Stack.Screen
        name="NFCScanner"
        component={NFCScannerScreen}
        options={{
          title: 'Scan Tangem',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="QRScanner"
        component={QRCodeScannerScreen}
        options={{
          title: 'Scan QR code',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Picture"
        component={PictureScreen}
        options={{
          title: 'Picture overview',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="AuctionDetails"
        component={AuctionDetailsScreen}
        options={{
          title: 'Auction details',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{
          title: 'Oops!',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Scan'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Scan"
        component={ScanScreen}
        options={({ navigation }: RootTabScreenProps<'Scan'>) => ({
          title: 'Scan picture',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="barcode" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          title: 'Portfolio',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="briefcase" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Requests"
        component={RequestsScreen}
        options={({ navigation }: RootTabScreenProps<'Requests'>) => ({
          title: 'Requests',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
          title: 'Profile',
          headerTintColor: Colors.light.BLUE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="address-card" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
