import { UserAuth } from "../context/AuthContext";

export default function Login() {
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <button onClick={handleLogin} className="btn">
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
}
