import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CancelReservationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cancelText}>Cancel</Text>
      <Text style={styles.confirmationText}>
        your reservation has been successfully cancelled
      </Text>
      {/* You can add an arrow icon here if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // Adjust color to match your design
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000', // Adjust color if necessary
  },
  confirmationText: {
    fontSize: 16,
    color: '#9E9E9E', // Adjust color if necessary
  },
});

export default CancelReservationScreen;
