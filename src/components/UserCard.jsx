/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="w-full" src={user?.photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user?.firstName}</h2>
          <p>{user?.about}</p>
          <p>age: {user?.age}</p>
          <div className="card-actions justify-center mx-4">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
