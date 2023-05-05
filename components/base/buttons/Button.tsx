import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  label: string;
  textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
  state: 'fill' | 'stroke' | 'disabled';
};

const variants = {
  fill: 'bg-primary',
  stroke: 'border border-primary',
  disabled: 'bg-gray-200 text-gray-300',
};

const Button = ({
  label,
  textTransform = 'normal-case',
  state,
}: ButtonProps) => {
  const textClasses = `${textTransform} ${
    state === 'disabled' ? 'text-gray-300' : ''
  }`;

  return (
    <TouchableOpacity
      className={`
        ${variants[state]}
        p-2 
        rounded-lg 
        flex items-center justify-center 
        w-full
      `}
    >
      <Text className={`text-base font-bold text-dark ${textClasses}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
