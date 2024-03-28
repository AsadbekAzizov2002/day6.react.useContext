import ChangeUserName from "../components/ChangeUserName";

const Profile = ({ username, setUserName }) => {
  return (
    <div className=" max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className=" mb-4 text-2xl font-semibold">Profile</h2>
      <div className=" mb-4">
        <p className=" text-gray-600">Username:{username}</p>
      </div>
      <ChangeUserName setUserName={setUserName} />
    </div>
  );
};

export default Profile;
