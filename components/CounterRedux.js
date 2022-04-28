import React from 'react';
import { View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addThunk } from '../redux/counterSlice';

const CounterRedux = () => {
    const theme = useTheme();
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                <Text style={{ color: theme.colors.primary, fontSize: 20 }}>
                    CounterRedux Component: {count}
                </Text>
                <Button
                    labelStyle={{ paddingHorizontal: 20 }}
                    style={{ marginHorizontal: 5 }}
                    compact
                    mode="contained"
                    onPress={() => dispatch(increment())}
                >
                    Inc
                </Button>
                <Button
                    labelStyle={{ paddingHorizontal: 20 }}
                    style={{ marginHorizontal: 5 }}
                    compact
                    mode="contained"
                    onPress={() => dispatch(decrement())}
                >
                    Dec
                </Button>
                <Button
                    labelStyle={{ paddingHorizontal: 20 }}
                    style={{ marginHorizontal: 5 }}
                    compact
                    mode="contained"
                    onPress={() => dispatch(addThunk(1))}
                >
                    Add Thunk
                </Button>
                <Button
                    labelStyle={{ paddingHorizontal: 20 }}
                    style={{ marginHorizontal: 5 }}
                    compact
                    mode="contained"
                    onPress={() => dispatch(addThunk(10))}
                >
                    Add Thunk 10
                </Button>
            </View>
        </>
    );
};

export {
    CounterRedux
};