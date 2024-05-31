import { Image, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabThreeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <Image
                    source={require('@/assets/images/toquiolights.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Vida Cyberpunk em Tóquio</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Futuro distópico e neon</ThemedText>
                <ThemedText>
                Em Tóquio, a vida pulsa sob arranha-céus brilhantes e telas de neon, com uma atmosfera que parece saída diretamente 
                de um filme de ficção científica. A tecnologia avançada está em toda parte, desde robôs assistentes até realidade 
                aumentada nas ruas. A cultura underground floresce em becos escondidos, onde hackers e ciborgues se misturam. Entre 
                tradições antigas e inovações futurísticas, a cidade é um caldeirão de contrastes eletrizantes.
                </ThemedText>
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
        height: 300,
        width: 500,
        position: 'absolute',
    },
});
