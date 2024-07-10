import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/common/HelloWave';
import ParallaxScrollView from '@/components/common/ParallaxScrollView';
import { ThemedText } from '@/components/common/ThemedText';
import { ThemedView } from '@/components/common/ThemedView';

export default function SignInScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Back!</ThemedText>
        <HelloWave />
      </ThemedView>



    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
