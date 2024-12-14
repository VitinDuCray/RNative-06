import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
        "Preocupado com uma única folha, você não verá a árvore. Preocupado com uma única árvore você não perceberá toda a floresta. Não se preocupe com um único ponto. Veja tudo em sua plenitude sem se esforçar."
      </Text>
      <Image
        source={{ uri: 'https://cdna.artstation.com/p/assets/images/images/034/305/066/large/ribo-picsart-01-28-10-37-02.jpg?1611938291' }}
        style={styles.authorImage}
      />
      <Text style={styles.authorName}>Musashi Miyamoto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    backgroundColor: '#f5edd7',
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});