import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, onSubmitEditing }) => {
    return (
      <TextInput
        style={styles.input}
        placeholder="+ Add a task"
        maxLength={50}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    );
  };
/**
 * 
Dimensions 사용해보기
RN에서는 크기가 다양한 모바일 기기에 대응하기 위해 현재 화면의 크기를 알 수 있는 2가지를 제공한다.

Dimensions
처음 값을 받아왔을 때의 크기로 고정되지 때문에 기기를 회전해서 화면이 전환되면 변환된 화면의 크기와 일치하지 않을 수 있다. 이런 상황을 위해 이벤트 리스너를 등록하여 화면의 크기 변화에 대응할 수 있도록 기능을 제공한다.
const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 15,
    //생략
  },
});
useWindowDimensions
width : useWindowDImensions().width - 15;
RN에서 제공하는 Hooks중 하나로, 화면의 크기가 변경되면 화면의 크기, 너비, 높이를 자동으로 업데이트 한다.
위의 두 기능 모두 현재 기기의 화면 크기를 알 수 있고, 이를 이용해 다양한 크기의 키키에 동일한 모습으로 적용될 수 있도록 코드를 작성할 수 있다.



 */
const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 15,
    fontSize: 20,
    backgroundColor: '#f1f3f5',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: 'center',
  },
});

export default Input;