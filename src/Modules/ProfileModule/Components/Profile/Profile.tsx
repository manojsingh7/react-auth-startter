import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAccountProfileQuery from "../../Hooks/useAccountProfileDetailQuery";
import { resetAuthValue } from "../../../AuthModule/Hooks/useAuthValue";

function Profile() {
  const { data } = useAccountProfileQuery();
  const profileDetails = data?.data?.data;
  const navigate = useNavigate();

  const logout = () => {
    resetAuthValue();
    navigate("/");
  };

  return (
    <Fragment>
      {
        <div>
          <Button onClick={logout}>Signout</Button>
          <p>Email : {profileDetails?.email}</p>
          <p>City : {profileDetails?.city}</p>
          <p>Name : {profileDetails?.firstName}</p>
          <p>Country : {profileDetails?.country}</p>
          <p>CountryCode : {profileDetails?.countryCode}</p>          
        </div>
      }
    </Fragment>
  );
}
export default Profile;
