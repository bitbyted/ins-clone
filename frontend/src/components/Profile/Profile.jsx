import Navbar from '../Navbar/Navbar';
import {Container} from './Profile.styles';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';

const Profile = () => {
  console.log('ggg');
  return (
    <Container>
      <Navbar />
      <ProfileInfo />
      <ProfilePosts />
    </Container>
  );
};

export default Profile;
