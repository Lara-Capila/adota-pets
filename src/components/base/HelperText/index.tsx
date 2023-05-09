import React from 'react';
import { Text } from 'react-native';
import { classNames } from '../../../constants/classNames';

type HelperTextProps = {
  text: string;
  error?: string;
};

const HelperText = ({ text, error }: HelperTextProps) => {
  return (
    <Text
      className={`text-xs text-gray-400 ${classNames(
        error ? 'text-red-500' : ''
      )}`}
    >
      {text}
    </Text>
  );
};

export default HelperText;
