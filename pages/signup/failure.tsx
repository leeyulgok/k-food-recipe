import useAuthStatus from "@/hooks/useAuthStatus";
import FailureContainer from "@/components/signup/failure/FailureContainer";

const failurePage = () => {
  useAuthStatus();
  
  return (
    <FailureContainer />
  );
};

export default failurePage;
