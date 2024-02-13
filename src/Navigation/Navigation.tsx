import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import { NavigationContainer, createNavigationContainerRef, useIsFocused } from '@react-navigation/native';
import { FC } from 'react';
import LoginScreen from '../Screens/LoginScreen';
import OtpScreen from '../Screens/OtpScreen';
import SelectCity from '../Screens/SelectCity';
import { BACKBTN, BACK_ARROW, CUSTOMER_SIGNUP } from '../Theme/Resources';
import { AppStyles } from '../Theme/AppStyles';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  Platform,
  SafeAreaView
} from 'react-native';
import { color } from '../Theme/color';
import { commonFontStyle, hp, wp } from '../Theme/Fonts';
import CustomerDashboard from '../Screens/Customer/CustomerDashboard';
import ChooseSignupScreen from '../Screens/ChooseSignupScreen';
import CustomerSignupScreen from '../Screens/Customer/CustomerSignupScreen';
import CompanySignupScreen from '../Screens/Company/CompanySignupScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import CustomerProfile from '../Screens/Customer/CustomerProfile';
import MyCouponsScreen from '../Screens/MyCouponsScreen';
import ContactUsScreen from '../Screens/ContactUsScreen';
import AboutUsScreen from '../Screens/AboutUsScreen';
import HelpScreen from '../Screens/HelpScreen';
import RateReviewScreen from '../Screens/RateReviewScreen';
import RequireSolarForm from '../Screens/Customer/RequireSolarForm';
import MaintenenceForm from '../Screens/Customer/MaintenenceForm';
import SolarInsurance from '../Screens/Customer/SolarInsurance';
import SolarEMI from '../Screens/Customer/SolarEMI';
import VideoListScreen from '../Screens/Customer/VideoListScreen';
import FAQScreen from '../Screens/FAQScreen';
import FullScreenVideo from '../Screens/Customer/FullScreenVideo';
import { useAppSelector } from '../Redux/hooks';
import Loader from '../Components/Loader';
import { removeAuthorization } from '../Utils/apiGlobal';

type RootStackParamList = {
  LoginScreen: undefined;
  OtpScreen: undefined;
  SelectCity: undefined;
  CustomerDashboard: undefined;
  CompanySignupScreen: undefined;
  CustomerSignupScreen: undefined;
  ChooseSignupScreen: undefined;
};

const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={BACKBTN} style={AppStyles.backArrow} />
    </TouchableOpacity>
  );
};

const HeaderLeftDrawerScreen = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={BACKBTN} style={[AppStyles.backArrow, { marginRight: 0, marginLeft: hp(2) }]} />
    </TouchableOpacity>
  );
};
const headerStyleTransparent = {
  headerStyle: {
    backgroundColor: color.mainBgColor,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    ...commonFontStyle(700, 16, color.titleDarkBlue),
  },
  headerTitleAlign: 'left',
};
let DrawerItemArray = [
  {
    label: 'Dashboard',
    image: require('../assets/cil_home.png'),
    screen: 'CustomerDashboard',
  },
  {
    label: 'Profile',
    image: require('../assets/iconoir_profile-circled.png'),
    screen: 'CustomerProfile',
  },
  {
    label: 'My Coupons',
    image: require('../assets/streamline_discount-percent-coupon.png'),
    screen: 'MyCouponsScreen',
  },
  {
    label: 'Contact Us',
    image: require('../assets/iconoir_notes.png'),
    screen: 'ContactUsScreen',
  },
  {
    label: 'About Us',
    image: require('../assets/clarity_info-standard-line-1.png'),
    screen: 'AboutUsScreen',
  },
  // {
  //   label: 'Help',
  //   image: require('../assets/iconoir_headset-help.png'),
  //   screen: 'HelpScreen',
  // },
  {
    label: 'Rate & Review',
    image: require('../assets/carbon_star-review.png'),
    screen: 'RateReviewScreen',
  },
  {
    label: 'FAQ',
    image: require('../assets/clarity_info-standard-line-1.png'),
    screen: 'FAQScreen',
  },
];
function CustomDrawerContent(props) {
  const isFocused = useIsFocused()
  const { userId, userData } = useAppSelector(e => e.common)

  const onPressLogout = async () => {
    await removeAuthorization()
    props.navigation.closeDrawer()
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }]
    })
  }
  return (
    <View>
      {/* {isFocused == true && <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />} */}
      <ImageBackground resizeMode='cover' source={require('../assets/headerBg.png')} style={styles.headerView}>
        <SafeAreaView>
          <View style={styles.headerRow}>
            <TouchableOpacity>
              <Image style={styles.imageProfile} source={CUSTOMER_SIGNUP} />
            </TouchableOpacity>
            <View style={styles.nameView}>
              <Text style={styles.hiText}>{userData?.name}</Text>
              <Text style={styles.nameText}>{userData?.email}</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <ScrollView style={{}}>
        {DrawerItemArray.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.screen)}
              style={styles.drawerContent}>
              <Image style={[styles.drawerItemIcon]} source={item.image} />
              <Text style={styles.labelText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => onPressLogout()}
        style={styles.drawerContent}>
        <Image
          style={[styles.drawerItemIcon]}
          source={require('../assets/logout.png')}
        />
        <Text style={styles.labelText}>{'Logout'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const CustomerStack = createDrawerNavigator<RootStackParamList>();
const CustomerStackNavigator: FC = () => {
  return (
    <CustomerStack.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerItemStyle: {
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        drawerStyle: {},
        // drawerActiveTintColor: color.PRIMARY_GREEN,
      })}>
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: false,
          ...headerStyleTransparent,
        })}
        name="CustomerDashboard"
        component={CustomerDashboard}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
          title: 'Profile',
        })}
        name="CustomerProfile"
        component={CustomerProfile}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'My Coupons',
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
        })}
        name="MyCouponsScreen"
        component={MyCouponsScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Contact Us',
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
        })}
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'About Us',
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
        })}
        name="AboutUsScreen"
        component={AboutUsScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Help',
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
        })}
        name="HelpScreen"
        component={HelpScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Rate & Review',
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
        })}
        name="RateReviewScreen"
        component={RateReviewScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'FAQ',
          headerLeft: () => <HeaderLeftDrawerScreen navigation={navigation} />,
        })}
        name="FAQScreen"
        component={FAQScreen}
      />

    </CustomerStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator<RootStackParamList>();
const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      <MainStack.Screen name="OtpScreen" component={OtpScreen} />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Select City',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="SelectCity"
        component={SelectCity}
      />
      <MainStack.Screen
        name="CustomerHome"
        component={CustomerStackNavigator}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Sign Up',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="ChooseSignupScreen"
        component={ChooseSignupScreen}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Register as Customer',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="CustomerSignupScreen"
        component={CustomerSignupScreen}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Required Solar',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="RequireSolarForm"
        component={RequireSolarForm}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Service & Cleaning',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="MaintenenceForm"
        component={MaintenenceForm}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Solar Insurance',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="SolarInsurance"
        component={SolarInsurance}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Solar on EMI',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="SolarEMI"
        component={SolarEMI}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Maintenence Video',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="VideoListScreen"
        component={VideoListScreen}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
        name="FullScreenVideo"
        component={FullScreenVideo}
      />
      <MainStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Join as a partner',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="CompanySignupScreen"
        component={CompanySignupScreen}
      />
    </MainStack.Navigator>
  );
};
export const navigationRef = createNavigationContainerRef();

const RootContainer: FC = () => {
  const { preLoader, } = useAppSelector(state => state.common);
  console.log(preLoader)

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
      {preLoader == true && <Loader />}
    </NavigationContainer>
  );
};
export default RootContainer;
const styles = StyleSheet.create({
  drawerItemIcon: {
    width: 25,
    height: 25,
    tintColor: color.black,
    resizeMode: 'contain',
  },
  logoIcon: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(30),
    marginTop: 10,
  },
  headerView: {
    backgroundColor: color.btnOrange,
    height: Platform.OS == 'ios' ? 130 + 48 : 130,
    paddingTop: StatusBar.currentHeight
  },
  drawerContent: {
    marginVertical: hp(2),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: hp(2),
  },
  userName: {
    marginTop: hp(2),
    ...commonFontStyle(400, 16, color.startGray),
  },
  labelText: {
    marginLeft: wp(4),
    ...commonFontStyle(500, 14, color.black_2),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameView: {
    flex: 1,
  },
  hiText: {
    ...commonFontStyle(700, 23, color.white)
  },
  nameText: {
    ...commonFontStyle(500, 16, color.white)
  },
  imageProfile: {
    backgroundColor: color.white,
    height: 50, width: 50, resizeMode: 'center',
    borderRadius: 50 / 2,
    margin: hp(2)
  }
});
