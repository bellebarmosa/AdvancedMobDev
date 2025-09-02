import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppNavigator";

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Spotify Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Spotify</Text>
        </View>

        {/* Username Input */}
        <TextInput
          placeholder="Username"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <Text style={styles.footerText}>
          Don’t have an account?{" "}
          <Text
            style={styles.signUp}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#121212",
    width: "85%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#1E1E1E",
    width: "100%",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    color: "#fff",
  },
  forgot: {
    color: "#1DB954",
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  signInButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    marginBottom: 20,
  },
  signInText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    color: "#aaa",
  },
  signUp: {
    color: "#1DB954",
    fontWeight: "bold",
  },
});

export default SignInScreen;
