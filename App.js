import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('./assets/images/profile-avatar.png')}
              style={styles.avatar}
            />
            {/* Green checkmark badge */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>✓</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Profile Info */}
        <View style={styles.infoSection}>
          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Diluka</Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.row}>
            <Text style={styles.icon}>✉</Text>
            <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
          </View>

          {/* Points */}
          <Text style={styles.label}>Points</Text>
          <View style={styles.row}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.value}>0</Text>
          </View>
        </View>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // Header
  header: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  // Body
  body: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
  },

  // Avatar
  avatarContainer: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
  avatarWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
  badge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f5f5f5',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 16,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: '#d0d0d0',
    marginBottom: 24,
  },

  // Info section
  infoSection: {
    paddingLeft: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 16,
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    color: '#333333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    fontSize: 15,
    color: '#555555',
  },
  starIcon: {
    fontSize: 16,
    color: '#333333',
  },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '300',
  },
});
