import React from 'react';
import { TextInput, View } from 'react-native';
import Label from '../Label';
import HelperText from '../HelperText';
import { classNames } from '../../../constants/classNames';

type TextFieldProps = {
  label: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
};

const TextField = ({
  label,
  placeholder,
  error,
  helperText,
  disabled = false,
}: TextFieldProps) => {
  return (
    <View className="w-full">
      <Label label={label} error={error} disabled={disabled} />
      <TextInput
        className={`
          border
          border-gray-300
          rounded-lg
          py-1
          px-3
          focus:border-primary
          ${classNames(error ? 'border-red-500' : '')}
          ${classNames(disabled ? 'bg-gray-200 text-gray-200' : '')}
        `}
        placeholderTextColor={disabled ? '#D1D5DB' : ''}
        placeholder={placeholder}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />

      {helperText && !disabled && (
        <HelperText text={helperText} error={error} />
      )}
    </View>
  );
};

export default TextField;
