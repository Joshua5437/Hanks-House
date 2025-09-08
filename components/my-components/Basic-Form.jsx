import { useState } from 'react';
import { StyleSheet, Pressable, TextInput, View, Text } from "react-native";
import FadeContent from "../FadeContent/FadeContent";
import ShinyText from "../ShinyText/ShinyText";

const BasicForm = ({ isTablet }) => {
  const [submitted, setSubmitted] = useState(false);
  
  // Add formData state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Fix handleSubmit function
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    // Here you can integrate an API like Formspree or your backend
  };

  return (
    <View style={[styles.container, { flex: isTablet ? 1 : null }]}>
      {submitted ? (
        <Text style={styles.subtitle}>Thank you for reaching out! We'll get back to you soon.</Text>
      ) : (
        <View>
          {/* Connect TextInputs to state */}
          <TextInput 
            placeholder="Name" 
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => setFormData({...formData, name: text})}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => setFormData({...formData, email: text})}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Message"
            multiline={true}
            numberOfLines={5}
            style={styles.input}
            value={formData.message}
            onChangeText={(text) => setFormData({...formData, message: text})}
          />
          <View style={{ padding: 30 }}>
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <Pressable
                style={styles.button}
                onPress={handleSubmit} // Fixed: Actually call the function
              >
                <ShinyText
                  text="Submit"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </Pressable>
            </FadeContent>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: "center" },
  heading: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "white",
  },
  subtitle: {
    padding: 20,
    fontSize: 35,
    color: '#FFF7DE',
    alignContent: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  button: {
    width: 100,
    backgroundColor: "#FFF7DE",
    paddingVertical: 9,
    paddingHorizontal: 15,
    fontSize: 23,
    fontWeight: "400",
    borderRadius: 30,
  },
});

export default BasicForm;