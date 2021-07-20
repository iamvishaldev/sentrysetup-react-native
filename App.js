import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';
import 'react-native-gesture-handler';

// Sentry error tracking
import * as Sentry from "@sentry/react-native";

Sentry.init({
	dsn: "https://7c774c64b49e4c93a65015fea0d31817@o924110.ingest.sentry.io/5872053",
	debug: true,
	maxBreadcrumbs: 50,


// Release Health
enableAutoSessionTracking: true,
// Sessions close after app is 10 seconds in the background.
sessionTrackingIntervalMillis: 10000,

// Performance
integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ["localhost", "https:", /^\//],
      // ... other options
    }),
  ],
 // To set a uniform sample rate
 tracesSampleRate: 0.2
});




// throw new Error("My first Sentry error!");



const App = () => {
	return (
		<SafeAreaView style={styles.backgroundStyle}>
			<View>
				<Text>Hii</Text>
			</View>
		</SafeAreaView>
	);
};



const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "red",
		flex: 1
	}
});

export default App;
