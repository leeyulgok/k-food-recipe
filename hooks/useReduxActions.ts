import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/feature/modalSlice";
import { DataType } from "@/utils/types/DataType";

const useReduxActions = () => {
  const dispatch = useDispatch();

  const handleClick = (recipe: DataType) => {
    dispatch(openModal(recipe));
  };

  return { handleClick };
};

export default useReduxActions;
