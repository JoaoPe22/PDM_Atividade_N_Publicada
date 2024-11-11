import { Text, View } from "react-native";

export default function Ex1() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}HelloWord></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
