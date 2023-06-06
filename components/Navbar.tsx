const Navbar = () => {
  return (
    <nav className="bg-gradient-radial px-6 py-4 flex justify-between">
      <div>
        <p className="font-bold text-white">Frontend Mentor</p>
        <p className="text-white text-xs opacity-75">Feedback Board</p>
      </div>
      <img src="/icons8-hamburger.svg" className="w-5" alt="" />
    </nav>
  );
};

export default Navbar;
