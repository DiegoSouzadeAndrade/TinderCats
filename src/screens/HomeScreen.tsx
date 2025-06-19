import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCats } from '../redux/slices/catListSlice';
import SwipeDeck from '../components/SwipeDeck';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cats, loading, error } = useAppSelector((state) => state.catList);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" style={styles.center} />;
  if (error) return <Text style={styles.center}>{error}</Text>;

  return (
    <View style={styles.container}>
      <SwipeDeck data={cats} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;