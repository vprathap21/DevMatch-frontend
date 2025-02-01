/* eslint-disable react/prop-types */
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const dispatch = useDispatch();

  const onclickHandle = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">Edit Profile</h2>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">FirstName</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">LastName</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn btn-primary "
                onClick={onclickHandle}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UserCard user={{ firstName, lastName, age, gender, photoUrl }} />
      </div>
    </div>
  );
};

export default EditProfile;
