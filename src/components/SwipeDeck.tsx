import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { sendVote } from '../redux/slices/votesSlice';
import { Cat } from 'types/commonTypes';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

interface Props {
    data: Cat[]
}

const SwipeDeck: React.FC<Props> = ({data}) => {
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(0);
    const position = new Animated.ValueXY();

    const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
    outputRange: ['-120deg', '0deg', '120deg'],
    });

    const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe('right');
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe('left');
      } else {
        resetPosition();
      }
    },
  });

const forceSwipe = (direction: 'left' | 'right') => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };
const onSwipeComplete = (direction: 'left' | 'right') => {
    const cat = data[index];

    if (direction === 'right') {
      dispatch(sendVote({ image_id: cat.id, value: 1 }));
    }

    position.setValue({ x: 0, y: 0 });
    setIndex(prev => prev + 1);
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };
const renderCard = () => {
    if (index >= data.length) return null;

    const cat = data[index];

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[position.getLayout(), styles.card, { transform: [{ rotate }] }]}
      >
        <Animated.Image source={{ uri: cat.image?.url }} style={styles.image} />
      </Animated.View>
    );
  };

  return <View style={styles.container}>{renderCard()}</View>;

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: SCREEN_WIDTH - 40,
    height: 446,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 120,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SwipeDeck;