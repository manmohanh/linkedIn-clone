import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = () => {
  const handleOnSucess = (credResponse) => {
    console.log(credResponse)
  };

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={(credentialResponse) => handleOnSucess(credentialResponse)}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComponent;
