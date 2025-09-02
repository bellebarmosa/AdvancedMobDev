import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  "https://i.pinimg.com/1200x/f6/4e/7d/f64e7dcc6f03f29f489331b54c916300.jpg",
  "https://i.pinimg.com/1200x/3e/60/d7/3e60d77fb5f8dc5b33c061cc3e04b28c.jpg",
  "https://i.pinimg.com/736x/04/48/85/04488531bd7a6bb6bac9b31fd59ceea9.jpg",
  "https://i.pinimg.com/736x/08/09/dd/0809ddd7977340eb0c6636c3d98d8940.jpg",
  "https://i.pinimg.com/736x/f3/d9/72/f3d9720f73dc91ba788b84d4e4e20c71.jpg",
];

const ComponentShowcase = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Mid Century Modern House</Text>
      <Text style={styles.h2}> Check out the rooms!</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {images.map((uri, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Alert.alert("Selected an image!")}
            style={styles.card}
          >
            <Image source={{ uri }} style={styles.image} />
            <Text style={styles.cardText}>Design #{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#333",
  },
  h2: {
    fontSize: 15,
    fontWeight: "medium",
    textAlign: "center",
    marginVertical: 16,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  cardText: {
    fontSize: 14,
    padding: 8,
    textAlign: "center",
    color: "#555",
  },
});

export default ComponentShowcase;

