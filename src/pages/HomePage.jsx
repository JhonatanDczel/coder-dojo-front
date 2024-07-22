import { LoginForm } from "../components/auth/Login";
import Logo from "../components/common/Logo";
import DojoTypeButton from "../components/home/DojoTypeButton";

function HomePage() {
  return (
    <div className="bg-dojo-day bg-cover bg-center w-screen h-screen">
      <div>
        <Logo path="/src/assets/logos/CoderDojo.png" />
        <Logo path="/src/assets/logos/IEEE-CS-UNSA.png" />
        <DojoTypeButton />
      </div>
      <LoginForm />
    </div>
  );
}

export default HomePage;
