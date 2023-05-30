import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      style={{ width: 80, height: 55 }}
      source={require('../../../../assets/images/Logo.png')}
    />
  );
};

export default Logo;
