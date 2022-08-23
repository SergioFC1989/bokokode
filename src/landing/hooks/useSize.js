import { useContext } from "react";
import { ResponsiveContext } from "grommet";

const useSize = () => {
  const size = useContext(ResponsiveContext)
  return size
};

export default useSize