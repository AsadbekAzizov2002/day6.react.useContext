const ChangeUserName = ({ setUserName }) => {
  return (
    <div className=" mb-4">
      <input
        type="text"
        placeholder="Change username..."
        onChange={(e) => setUserName(e.target.value)}
        className=" w-full rounded-md border border-gray-300 px-3 py-2"
      />
    </div>
  );
};

export default ChangeUserName;
