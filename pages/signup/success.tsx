import useAuthStatus from "@/hooks/useAuthStatus";
import SuccessContainer from "@/components/signup/success/SuccessContainer";

const successPage = () => {
  useAuthStatus();

  return <SuccessContainer />;
};

export default successPage;
