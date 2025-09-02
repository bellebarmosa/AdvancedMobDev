import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Spotify</Text>
        </View>

        {/* Email */}
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        {/* Full Name */}
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
        />

        {/* Gender */}
        <View style={styles.genderContainer}>
          <TouchableOpacity onPress={() => setGender("male")}>
            <Text
              style={[
                styles.genderText,
                gender === "male" && styles.genderSelected,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGender("female")}>
            <Text
              style={[
                styles.genderText,
                gender === "female" && styles.genderSelected,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
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
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 15,
  },
  genderText: {
    color: "#aaa",
    fontSize: 16,
  },
  genderSelected: {
    color: "#1DB954",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    marginVertical: 20,
  },
  signUpText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUpScreen;
