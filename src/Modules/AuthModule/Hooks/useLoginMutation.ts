import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { fetcher } from "src/Utils/Helper";
import SnackbarHandler from "src/Utils/SnackbarHandler";
import { LOGIN_REQUEST } from "../Types/RequestTypes";
import { LOGIN_RESPONSE } from "../Types/ResponseTypes";
import { setAuthValue, getAuthValue } from "./useAuthValue";
import { useNavigate } from "react-router-dom";

const login = async (
  data: LOGIN_REQUEST
): Promise<AxiosResponse<LOGIN_RESPONSE>> => {
  return fetcher({
    url: "/app/auth/login",
    method: "POST",
    data,
  });
};

function useLoginMutation() {
  const navigate = useNavigate();
  return useMutation(login, {
    onSuccess: (responseData, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        if (status === 200) {
          const _user = data?.data?.user;
          const token = data?.data?.token;
          SnackbarHandler.successToast(data?.message);
          setAuthValue({
            ...getAuthValue(),
            loggedIn: true,
            user: _user,
            token: token,
          });
          navigate("/home");
        }
      }
    },
  });
}

export default useLoginMutation;
