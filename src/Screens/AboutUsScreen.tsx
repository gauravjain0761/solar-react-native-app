import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../Theme/color';
import {hp, commonFontStyle} from '../Theme/Fonts';

type Props = {};

const AboutUsScreen = (props: Props) => {
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={styles.textStyle}>
        To be the most admired and trusted brand for reliable solar solutions
        provider company with a thrust on reliable, competitive, sustainable
        power leveraging sales and services thru innovation in execution and be
        in top of the epc manufacturing company of gujarat with a difference and
        value addition for stakeholders
      </Text>
      <Text style={styles.textStyle}>
        To empower employees so that they can deliver solutions to stakeholders
        and also be ethical in ways dealing with customers, suppliers, channel
        partners , financial institutions. Achieve excellence in performance
        through innovative employee engagement practices. Provide quality solar
        solutions with 100 dedication by employees leading to customer delight
        phase Continuous learning and develop their mind set by improving
        attitude , skill and knowledge base of employees and which will improve
        organizational performance We want to support the government in
        implementing the solar for every home and last mile connectivity to
        build a culture of renewable energies and here by reducing pollution and
        make india self reliant in renewable energies with solar solutions
        provider company with a difference.
      </Text>
      <Text style={styles.textStyle}>
        However, if I don't know much about the topic at-hand, that doesn't mean
        I simply use what's already online. Instead, I'll reach out to internal
        HubSpotters who are experts on the topic or use other original
        internal-company resources, or I'll conduct external outreach via my
        social networks to find a reputable source willing to provide tips,
        quotes, or original examples to beef up my piece.
      </Text>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  textStyle: {
    lineHeight: 24,
    ...commonFontStyle(400, 16, color.black_50),
    marginHorizontal: 20,
  },
});
