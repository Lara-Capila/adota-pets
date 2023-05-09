import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  label: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
  state?: 'fill' | 'stroke' | 'disabled';
  onPress: (event: GestureResponderEvent) => void;
};

const variants = {
  fill: 'bg-primary',
  stroke: 'border border-primary',
  disabled: 'bg-gray-200 text-gray-300',
};

const Button = ({
  label,
  textTransform = 'normal-case',
  state = 'fill',
  onPress,
}: ButtonProps) => {
  const textClasses = `${textTransform} ${
    state === 'disabled' ? 'text-gray-300' : ''
  }`;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        ${variants[state]}
        p-2 
        rounded-lg 
        flex items-center justify-center 
        w-3/4
      `}
    >
      <Text className={`text-base font-bold text-dark ${textClasses}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
