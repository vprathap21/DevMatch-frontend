import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const logoUrl = user
    ? user.photoUrl
    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-warning backdrop-blur border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-pink-500 text-2xl font-bold">DevMatch</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#safety" className="text-gray-300 hover:text-white">
              Safety
            </Link>
            <Link href="#support" className="text-gray-300 hover:text-white">
              Support
            </Link>
            <Link href="#download" className="text-gray-300 hover:text-white">
              Download
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="btn btn-outline btn-sm text-gray-300 hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* <div className="navbar bg-secondary border-b-2 border-neutral">
        <div className="flex-1">
          <Link to={"/"} className="text-xl">
            DevMatch
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={logoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NavBar;
