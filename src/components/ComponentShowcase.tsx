import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

const ComponentShowcase = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Component Showcase</Text>

        <View style={styles.componentContainer}>
          <Text style={styles.componentTitle}>Text Component</Text>
          <Text style={styles.paragraph}>
            This is a simple Text component. You can use it to display any kind
            of text in your application.
          </Text>
        </View>

        <View style={styles.componentContainer}>
          <Text style={styles.componentTitle}>Button Component</Text>
          <Button
            title="Press Me"
            onPress={() => Alert.alert('Button Pressed!')}
            color="#841584"
          />
        </View>

        <View style={styles.componentContainer}>
          <Text style={styles.componentTitle}>Image Component</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  scrollViewContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  componentContainer: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
  },
  componentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 8,
  },
});

export default ComponentShowcase;
