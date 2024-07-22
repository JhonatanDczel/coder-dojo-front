import Input from './Input'
import LoginAs from './LoginAs'

export function LoginForm() {
  return (
    <>
      <h2>Inicia sesión</h2>
      <p>Inicia sesión con tus credenciales</p>
      <Input type='text' label='username'/>
      <Input type='password' label='contraseña'/>
      <LoginAs />
    </>
  );
}
