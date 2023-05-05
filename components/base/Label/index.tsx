import React from 'react';
import { Text } from 'react-native';
import { classNames } from '../../../constants/classNames';

type LabelProps = {
  label: string;
  error?: string;
  disabled?: boolean;
};

const dynamicClasses = (error?: string, disabled?: boolean) => {
  let classes = '';

  if (error) classes += 'text-red-500';
  if (disabled) classes += 'text-gray-300';

  return classes;
};

const Label = ({ label, error, disabled }: LabelProps) => {
  return (
    <Text
      className={`text-sm font-semibold text-dark ${dynamicClasses(
        error,
        disabled
      )}`}
    >
      {label}
    </Text>
  );
};

export default Label;
