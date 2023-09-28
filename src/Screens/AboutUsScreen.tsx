import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../Theme/color';
import {hp, commonFontStyle} from '../Theme/Fonts';

type Props = {};

const AboutUsScreen = (props: Props) => {
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={styles.textStyle}>
        Whenever I start a new blog post, like this one, I start with plenty of
        online research — but that's not where it ends. After Googling relevant
        topics, including "content writing tips", I begin creating an outline
        using some of the information I find online. However, your piece will
        never rank if you just copy-and-paste the same information that already
        exists online — and, even if it does, when your readers catch on (and
        they will), they'll lose trust in your brand as an authority within the
        industry. Once I finish my rough outline (which will include about 60%
        of the information I found through online research), I fill in the
        remaining 40% with unique, original insights.
      </Text>
      <Text style={styles.textStyle}>
        If I know about a topic personally (as is the case with "content
        writing", since I'm a content writer myself), I'll fill in the outline
        with original anecdotes, tips, or personal examples. However, if I don't
        know much about the topic at-hand, that doesn't mean I simply use what's
        already online. Instead, I'll reach out to internal HubSpotters who are
        experts on the topic or use other original internal-company resources,
        or I'll conduct external outreach via my social networks to find a
        reputable source willing to provide tips, quotes, or original examples
        to beef up my piece. Additionally, I'll look for content regarding the
        topic across a wide range of sources — including YouTube, LinkedIn,
        Reddit, Quora, as well as podcasts — to ensure when readers' come across
        my content, it's both comprehensive and unique. If they can find the
        same information elsewhere on Google, why should they stay on your page?
        As a good content writer, it's your job to take your content to the next
        level, always
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
