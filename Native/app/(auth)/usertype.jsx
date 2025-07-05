import React, { useState } from 'react';
import ThemedView from '../../components/ThemedView';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const UserRoleSelection = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState('Vehicle Owner');

  const roles = [
    {
      id: 'vehicle-owner',
      title: 'Vehicle Owner',
      description: 'If you have one or more vehicles to hire register as a vehicle owner',
      route: 'VehicleOwnerScreen'
    },
    {
      id: 'driver',
      title: 'Driver',
      description: 'If you own a vehicle, we recommend you to register as a vehicle owner',
      route: 'DriverScreen'
    },
    {
      id: 'parent',
      title: 'Parent',
      description: '',
      route: 'ParentScreen'
    }
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role.title);
  };

  const handleProceed = () => {
    const selectedRoleData = roles.find(role => role.title === selectedRole);
    if (selectedRoleData && navigation) {
      navigation.navigate(selectedRoleData.route);
    } else {
      // For demo purposes, show alert
      alert(`Navigating to ${selectedRole} screen`);
    }
  };

  const RadioButton = ({ selected }) => (
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
  );

  return (
    <ThemedView safe={true} style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <View style={styles.content}>
        <Text style={styles.title}>Tell us who you are</Text>
        
        <View style={styles.optionsContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.optionCard,
                selectedRole === role.title && styles.selectedCard
              ]}
              onPress={() => handleRoleSelect(role)}
            >
              <View style={styles.optionContent}>
                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>{role.title}</Text>
                  {role.description ? (
                    <Text style={styles.optionDescription}>{role.description}</Text>
                  ) : null}
                </View>
                <RadioButton selected={selectedRole === role.title} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={handleProceed}
        >
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    flex: 1,
    gap: 16,
  },
  optionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCard: {
    borderColor: '#FFD700',
    borderWidth: 2,
    backgroundColor: '#FFFEF7',
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  optionText: {
    flex: 1,
    marginRight: 16,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  radioButtonSelected: {
    borderColor: '#FFD700',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFD700',
  },
  proceedButton: {
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  proceedButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
});

export default UserRoleSelection;