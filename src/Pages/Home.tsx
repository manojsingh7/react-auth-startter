import { Fragment } from "react";
import Profile from "src/Modules/ProfileModule/Components/Profile/Profile";

function Home() {
  return (
    <Fragment>
      <div>
        <h1>Home</h1>
        <Profile />
      </div>
    </Fragment>
  );
}

export default Home;
