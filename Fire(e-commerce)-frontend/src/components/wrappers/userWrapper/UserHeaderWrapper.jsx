import { Outlet } from "react-router-dom";




import Header from '../../layout/user/userHeader/Header';
function UserHeader() {

  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default UserHeader;
