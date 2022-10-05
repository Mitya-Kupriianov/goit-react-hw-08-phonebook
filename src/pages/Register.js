import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage:
    //   'url(https://pixabay.com/get/g6c16bb1492b234d4dabac92ae9dd820a98e00a7b86d38c890c74df07fa6274456a31d0de8d3a3e0368bf32153ae864020360ab003de95fb4e945088d85aa43a4_1280.jpg)',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
export default function Register() {
  return (
    <div style={styles.container}>
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
}
