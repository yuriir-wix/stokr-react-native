import React from 'react';
import {Text, Image, Button} from 'react-native';

export interface CompanyProps {
  companyName: string;
  favourite: boolean;
}

export const Company: React.FC<CompanyProps> = ({companyName, favourite}) => {
  const buttonTitle = favourite ? 'Unfavourite' : 'Favourite';
  return (
    <>
      <Text>{companyName}</Text>
      {favourite && (
        <Image
          source={require('../../../../img/star.png')}
          style={{width: 50, height: 50}}
        />
      )}
      <Button title={buttonTitle} onPress={() => 1} />
    </>
  );
};
