import React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { rename } from '../redux/personSlice';

const Person = () => {
    const theme = useTheme();
    const name = useSelector(state => state.person.value);
    const dispatch = useDispatch();

    return (
        <>
            <View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ color: theme.colors.primary, fontSize: 20 }}>
                        Person Component:
                    </Text>
                </View>
                <View style={{ margin: 5 }}>
                    <TextInput
                        mode="outlined"
                        label="Your name"
                        placeholder="Full name"
                        value={name}
                        onChangeText={text => dispatch(rename(text))}
                    />
                </View>
            </View>
        </>
    );
};

export {
    Person
};