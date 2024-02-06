import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Accordian from '../Components/Accordian';
import { AppStyles } from '../Theme/AppStyles';

type Props = {};

const FAQScreen = (props: Props) => {
  const data = [
    {
      title: 'How to download or uninstall WhatsApp',
      data: 'Go to the Google Play Store, then search for WhatsApp Messenger. Tap INSTALL.Open WhatsApp and continue to the next screen by agreeing to our Terms of Service.Register your phone number.If a backup of your chat history was found and you would like to restore it, choose Restore. Learn more about restoring your chat history here.Enter your name. You can also change this later in WhatsApp by tapping More options > Settings, and tapping on your profile name.',
    },
    {
      title: 'How to download WhatsApp Desktop',
      data: 'WhatsApp can be used on your desktop without a browser. To install WhatsApp Desktop on your computer, download it from the Microsoft Store or the WhatsApp website.',
    },
    {
      title: 'About supported operating systems on desktop',
      data: "The new WhatsApp desktop app for Windows is supported on Windows 10.0.18362.0 or higher.If the version you are using is older, you'll need to update your operating system and then download WhatsApp for Windows. Alternatively, you can use WhatsApp Web in your browser.For instructions on how to check which version of Windows operating system you are running, click here to visit the Microsoft help center.",
    },
    {
      title: 'About supported devices',
      data: 'More information about how we choose which operating systems to support and what happens if yours will no longer be supported can be found here.To keep up with the latest advances in technology, we routinely stop supporting older operating systems to point our resources to supporting the latest ones.If we stop supporting your operating system, you’ll be notified and reminded a few times to upgrade your device to continue using WhatsApp. We’ll also update this page regularly to ensure that the latest Android version we support is listed here.',
    },
  ];
  return (
    <ScrollView style={AppStyles.container}>
      {data.map((item, index) => {
        return <Accordian data={item} />;
      })}
    </ScrollView>
  );
};

export default FAQScreen;

const styles = StyleSheet.create({});
