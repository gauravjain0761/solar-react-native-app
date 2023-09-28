import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import LoginScreen from '../Screens/LoginScreen';
import OtpScreen from '../Screens/OtpScreen';
import SelectCity from '../Screens/SelectCity';
import {BACK_ARROW} from '../Theme/Resources';
import {AppStyles} from '../Theme/AppStyles';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../Theme/color';
import {commonFontStyle, hp, wp} from '../Theme/Fonts';
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

const HeaderLeft = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={BACK_ARROW} style={AppStyles.backArrow} />
    </TouchableOpacity>
  );
};
const headerStyleTransparent = {
  headerStyle: {
    backgroundColor: color.white,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleStyle: {
    ...commonFontStyle(500, 20, color.black),
    // width: Dimensions.get('screen').width
  },
  headerTitleAlign: 'center',
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
      onPress={() => props.navigation.navigate("LoginScreen")}
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
      screenOptions={({navigation}) => ({
        drawerItemStyle: {
          borderRadius: 0,
          marginLeft: 0,
        },
        drawerStyle: {},
      })}>
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Company Dashboard',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/ic_home.png')}
              style={{height: 30, width: 30}}
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
      initialRouteName="CompanyDashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        drawerItemStyle: {
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
        },
        drawerStyle: {},
        drawerInactiveTintColor: color.starText,
        // drawerActiveTintColor: color.PRIMARY_GREEN,
      })}>
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Dashboard',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/ic_home.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="CustomerDashboard"
        component={CustomerDashboard}
      />
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/ic_user.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="CustomerProfile"
        component={CustomerProfile}
      />
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'My Coupons',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/promocode.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="MyCouponsScreen"
        component={MyCouponsScreen}
      />
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Contact Us',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/contact-mail.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'About Us',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/about.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="AboutUsScreen"
        component={AboutUsScreen}
      />
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Help',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/contactUs.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="HelpScreen"
        component={HelpScreen}
      />
      <CompanyStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Rate & Review',
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/images/review.png')}
              style={{
                height: 20,
                resizeMode: 'contain',
                width: 20,
                tintColor: focused ? color.PRIMARY_GREEN : color.starText,
              }}
            />
          ),
        })}
        name="RateReviewScreen"
        component={RateReviewScreen}
      />
    </CustomerStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator<RootStackParamList>();
const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Sign in',
        })}
        name="LoginScreen"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Verify OTP',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="OtpScreen"
        component={OtpScreen}
      />
      <MainStack.Screen
        options={({navigation, route}) => ({
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
        name="ChooseSignupScreen"
        component={ChooseSignupScreen}
      />
      <MainStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Register as Costomer',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="CustomerSignupScreen"
        component={CustomerSignupScreen}
      />
      <MainStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Require Solar',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="RequireSolarForm"
        component={RequireSolarForm}
      />
      <MainStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Operation & Maintenence',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
        name="MaintenenceForm"
        component={MaintenenceForm}
      />
      <MainStack.Screen
        options={({navigation, route}) => ({
          headerShown: true,
          ...headerStyleTransparent,
          title: 'Register as Company',
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
    tintColor:color.black
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
