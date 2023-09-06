import { Text, View } from 'react-native';

import { ProfileStackNavProps } from '~/navigators/stackNav/ProfileStackNav';
import React from 'react';

const Profile = ({}: ProfileStackNavProps) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
