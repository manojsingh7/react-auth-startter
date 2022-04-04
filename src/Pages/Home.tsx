import { Fragment, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
function Home() {
  const IMAGE_BASE_URL = "https://chaptr-bcket.s3.ap-south-1.amazonaws.com/";
  const { setLoggedIn, user, setUser } = useContext(AuthContext);
  return (
    <Fragment>
      <div>
        {user?.profile_pic !== null ? (
          <img src={`${IMAGE_BASE_URL + user?.profile_pic}`} alt="" />
        ) : (
          <Fragment />
        )}
        <h1>{`Welcome ${user?.full_name}`}</h1>

        <button
          onClick={() => {
            localStorage.clear();
            setUser(null);
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      </div>
    </Fragment>
  );
}

export default Home;
