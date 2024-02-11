import { logoutFunc } from "./authFunctions";

export const LogOut = () => {
  return (
    <div>
      <button onClick={() => logoutFunc}>Logout</button>
    </div>
  );
};
