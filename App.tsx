/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { View, Text } from "react-native";
import PushNotification, { Importance } from "react-native-push-notification";

PushNotification.localNotificationSchedule({
  channelId: "retro4",
  ticker: "My Notification Ticker",
  showWhen: true,
  autoCancel: true,
  largeIcon: "ic_launcher",
  largeIconUrl: "https://www.example.tld/picture.jpg",
  smallIcon: "ic_notification",
  bigText: "This is a scheduled notification that comes up every minute",
  subText: "This is a subText",
  bigPictureUrl: "https://www.example.tld/picture.jpg",
  bigLargeIcon: "ic_launcher",
  bigLargeIconUrl: "https://www.example.tld/bigicon.jpg",
  color: "red",
  vibrate: true,
  vibration: 300,
  tag: "some_tag",
  group: "group",
  groupSummary: false,
  ongoing: false,
  priority: "high",
  visibility: "private",
  ignoreInForeground: false,
  shortcutId: "shortcut-id",
  onlyAlertOnce: false,

  when: null,
  usesChronometer: false,
  timeoutAfter: null,

  messageId: "google:message_id",

  actions: ["Yes", "No"],
  invokeApp: true,

  category: "",
  subtitle: "My Notification Subtitle",

  id: 0,
  title: "Scheduled Local Notification",
  message: "Scheduled Local Notification Message",
  picture: "https://www.example.tld/picture.jpg",
  userInfo: {},
  playSound: false,
  soundName: "default",
  number: 10,
  repeatType: "minute",
  repeatTime: 1,
  date: new Date(Date.now() + 60 * 1000),
});

const App = () => {
  PushNotification.createChannel(
    {
      channelId: "retro4",
      channelName: "My channel",
      channelDescription: "A channel to categorise your notifications",
      playSound: true,
      soundName: "default",
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`),
  );

  PushNotification.popInitialNotification(notification => {
    console.log("Initial Notification", notification);
  });

  return (
    <View>
      <Text>Scheduled Local Notification</Text>
    </View>
  );
};

export default App;
