import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import useAuthValue, {
  getAuthValue,
  setAuthValue,
} from "src/Modules/AuthModule/Hooks/useAuthValue";
import { fetcher } from "src/Utils/Helper";
import { ACCOUNT_PROFILE_DETAIL_RESPONSE } from "../Types/ResponseTypes";

export const GET_ACCOUNT_PROFILE_QUERY_KEY = "accountProfileDetail";

const accountProfileDetail = async (): Promise<
  AxiosResponse<ACCOUNT_PROFILE_DETAIL_RESPONSE>
> => {
  return fetcher({
    url: `/app/user/get-profile`,
    method: "GET",
  });
};

function useAccountProfileQuery() {
  const { user } = useAuthValue();
  return useQuery(GET_ACCOUNT_PROFILE_QUERY_KEY, accountProfileDetail, {
    enabled: user ? true : false,
    onSuccess: (responseData) => {
      setAuthValue({ ...getAuthValue(), user: responseData.data.data });
    },
  });
}

export default useAccountProfileQuery;
