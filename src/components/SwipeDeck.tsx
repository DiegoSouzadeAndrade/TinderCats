import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Animated, PanResponder, Text } from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { sendVote } from '../redux/slices/votesSlice';
import { Cat } from 'types/commonTypes';
import IconButton from './IconButton';
import CatInfoCard from './CatInfoCard';
import { FA5Style } from 'react-native-vector-icons/FontAwesome5';

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

        if (direction === 'left') {
        handleVote(cat.id, 1)
        }
        if (direction === 'right') {
        handleVote(cat.id, 0)
        }
        position.setValue({ x: 0, y: 0 });
    };

    const resetPosition = () => {
        Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
        }).start();
    };

    const handleVote = (catId: string, value: number) => {
        dispatch(sendVote({image_id: catId, value}));
        setIndex((prev) => prev + 1);
    }
    
    const renderCard = () => {
        if (index >= data.length) return (
        <View style={[styles.card, styles.center]}>
            <Text>{'noMoreCats'}</Text>
        </View>
        );

        const currentCat = data[index];

        return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[position.getLayout(), styles.card, { transform: [{ rotate }] }]}
        >
            <Animated.Image source={{ uri: currentCat.image?.url }} style={styles.image} />
            <View style={styles.infoWrapper}>
                <CatInfoCard 
                    name={currentCat.name}
                    affectionLevel={currentCat.affection_level}
                    origin={currentCat.origin}
                />
            </View>
        </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
        {renderCard()}
        <View style={{...styles.center, flexDirection: 'row', marginTop: 75, justifyContent: 'space-evenly'}}>
            <IconButton onPress={() => handleVote(data[index].id, 0)} name='close' size={32} color='#E16359' />
            <IconButton onPress={() => handleVote(data[index].id, 1)} name='heart' size={32} color='#6BD88E'/>
        </View>
    </View>);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  card: {
    width: 343,
    height: 446,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 120,
    elevation: 5,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  infoWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
    center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwipeDeck;