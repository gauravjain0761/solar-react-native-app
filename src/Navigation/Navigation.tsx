import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import LoginScreen from '../Screens/LoginScreen';
import OtpScreen from '../Screens/OtpScreen';
import SelectCity from '../Screens/SelectCity';
import { BACKBTN, BACK_ARROW } from '../Theme/Resources';
import { AppStyles } from '../Theme/AppStyles';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { color } from '../Theme/color';
import { commonFontStyle, hp, wp } from '../Theme/Fonts';
import CustomerDashboard from '../Screens/Customer/CustomerDashboard';
import ChooseSignupScreen from '../Screens/ChooseSignupScreen';
import CustomerSignupScreen from '../Screens/Customer/CustomerSignupScreen';
import CompanySignupScreen from '../Screens/Company/CompanySignupScreen';
import CompanyDashboard from '../Screens/Company/CompanyDashboard';
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

type RootStackParamList = {
  LoginScreen: undefined;
  OtpScreen: undefined;
  SelectCity: undefined;
  CustomerDashboard: undefined;
  CompanySignupScreen: undefined;
  CustomerSignupScreen: undefined;
  ChooseSignupScreen: undefined;
  CompanyDashboard: undefined;
};

const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={BACKBTN} style={AppStyles.backArrow} />
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
    image: require('../assets/images/ic_home.png'),
    screen: 'CustomerDashboard',
  },
  {
    label: 'Profile',
    image: require('../assets/images/ic_user.png'),
    screen: 'CustomerProfile',
  },
  {
    label: 'My Coupons',
    image: require('../assets/images/promocode.png'),
    screen: 'MyCouponsScreen',
  },
  {
    label: 'Contact Us',
    image: require('../assets/images/contact-mail.png'),
    screen: 'ContactUsScreen',
  },
  {
    label: 'About Us',
    image: require('../assets/images/about.png'),
    screen: 'AboutUsScreen',
  },
  {
    label: 'Help',
    image: require('../assets/images/contactUs.png'),
    screen: 'HelpScreen',
  },
  {
    label: 'Rate & Review',
    image: require('../assets/images/review.png'),
    screen: 'RateReviewScreen',
  },
  {
    label: 'FAQ',
    image: require('../assets/images/about.png'),
    screen: 'FAQScreen',
  },
];
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      style={{
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
      }}
      {...props}>
      <View
        style={{
          marginVertical: 12,
          alignItems: 'center',
        }}>
        <Image
          style={[styles.logoIcon]}
          source={require('../assets/images/ic_sorConnect.png')}
        />
        <Text style={styles.userName}>{'Sor Coonect'}</Text>
      </View>
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
        onPress={() => props.navigation.navigate('LoginScreen')}
        style={styles.drawerContent}>
        <Image
          style={[styles.drawerItemIcon]}
          source={require('../assets/images/switch.png')}
        />
        <Text style={styles.labelText}>{'Logout'}</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const CompanyStack = createDrawerNavigator<RootStackParamList>();
const CompanyStackNavigator: FC = () => {
  return (
    <CompanyStack.Navigator
      initialRouteName="CompanyDashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerItemStyle: {
          borderRadius: 0,
          marginLeft: 0,
        },
        drawerStyle: {},
      })}>
      <CompanyStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Company Dashboard',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/images/ic_home.png')}
              style={{ height: 30, width: 30 }}
            />
          ),
          // headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="CompanyDashboard"
        component={CompanyDashboard}
      />
    </CompanyStack.Navigator>
  );
};

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
        drawerInactiveTintColor: color.starText,
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
        })}
        name="MyCouponsScreen"
        component={MyCouponsScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Contact Us',
        })}
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'About Us',
        })}
        name="AboutUsScreen"
        component={AboutUsScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Help',
        })}
        name="HelpScreen"
        component={HelpScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Rate & Review',
        })}
        name="RateReviewScreen"
        component={RateReviewScreen}
      />
      <CustomerStack.Screen
        options={({ navigation, route }) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'FAQ',
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
        name="CustomerDashboard"
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
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Join as a partner',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="CompanySignupScreen"
        component={CompanySignupScreen}
      />

      <MainStack.Screen
        name="CompanyDashboard"
        component={CompanyStackNavigator}
      />
    </MainStack.Navigator>
  );
};

const RootContainer: FC = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
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
  drawerContent: {
    marginVertical: hp(2),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  userName: {
    marginTop: hp(2),
    ...commonFontStyle(400, 16, color.startGray),
  },
  labelText: {
    marginLeft: wp(4),
    ...commonFontStyle(400, 18, color.black),
  },
});
