import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import Label from '../Label';
import HelperText from '../HelperText';
import { classNames } from '../../../constants/classNames';

type TextFieldProps = {
  label: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  type?: 'default' | 'email-address' | 'numeric';
  onChangeText?: (text: string) => void;
  value: string;
};

const TextField = ({
  label,
  placeholder,
  error,
  helperText,
  disabled = false,
  type = 'default',
  onChangeText,
  value,
}: TextFieldProps) => {
  return (
    <View className="w-full my-2">
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
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={disabled ? '#D1D5DB' : '#9CA3AF'}
        placeholder={placeholder}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        keyboardType={type}
      />

      {helperText && !disabled && (
        <HelperText text={helperText} error={error} />
      )}
    </View>
  );
};

export default TextField;
