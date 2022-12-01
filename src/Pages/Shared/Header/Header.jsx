import logo from "../../../assets/download.png";
import menuItems from "../../../Components/MenuItems";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import NavMobile from "../../Others/NavMobile/NavMobile";
const Header = () => {
  return (
    <header className="h-[10vh] flex border">
      <div className="container lg:container sm:container mx-auto flex justify-between items-center">
        {/* left */}
        <div>
          <img src={logo} width={140} alt="" />
        </div>
        {/* center */}
        <ul className="lg:flex hidden items-center space-x-6">{menuItems}</ul>
        {/* right */}
        <div className="flex items-center space-x-6">
          <div className="md:flex hidden items-center space-x-6">
            <i className="bx bx-heart text-2xl cursor-pointer"></i>
            <i className="bx bx-cart-alt text-2xl cursor-pointer"></i>
            <PrimaryBtn classes={"bg-btn px-10 py-2 rounded-xl hover:bg-main"}>
              LogIn
            </PrimaryBtn>
          </div>
          {/* mobile menu start */}
          <NavMobile />
          {/* mobile menu end */}
        </div>
      </div>
    </header>
  );
};

export default Header;
