const MiniModal = () => {
  let user = localStorage.getItem("username");
  return <div className="userData">Usuario: {user}</div>;
};

export default MiniModal;
