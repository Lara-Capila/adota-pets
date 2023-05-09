import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import HelperText from '../HelperText';
import Label from '../Label';
import { classNames } from '../../../constants/classNames';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';

type PasswordFieldProps = {
  label: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  value: string;
};

const PasswordField = ({
  label,
  disabled,
  error,
  placeholder,
  onChangeText,
  value,
}: PasswordFieldProps) => {
  const [secure, setSecure] = useState(true);

  return (
    <View className="w-1/4 relative container mx-auto my-2">
      <Label label={label} error={error} disabled={disabled} />
      <View>
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
          keyboardType={secure ? 'default' : 'visible-password'}
          secureTextEntry={secure}
        />

        <Pressable
          onPress={() => setSecure(!secure)}
          className="absolute inset-y-0 right-3 flex flex-row items-center"
        >
          {secure ? (
            <EyeIcon width={20} height={20} color="#232323" />
          ) : (
            <EyeSlashIcon width={20} height={20} color="#232323" />
          )}
        </Pressable>
      </View>

      {error && !disabled && <HelperText text={error} error={error} />}
    </View>
  );
};

export default PasswordField;
