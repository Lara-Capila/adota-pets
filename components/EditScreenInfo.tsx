import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Label from './base/Label';
import TextField from './base/inputs/TextField';
import Button from './base/buttons/Button';
import SocialMediaButton from './base/buttons/SocialMediaButton';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View className="w-screen p-4">
      <TextField label="Teste" disabled />
      <Button label="enviar" textTransform="uppercase" state="stroke" />
      <SocialMediaButton />
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
