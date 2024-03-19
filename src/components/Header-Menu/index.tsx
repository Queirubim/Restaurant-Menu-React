import { restaurantIsOpen } from "../../utius";

export const HeaderMenu = () => {
  const colorSpan = () => (restaurantIsOpen() ? "bg-green-500" : "bg-red-500");

  return (
    <header className="w-full h-[420px] bg-home bg-cover bg-bottom">
      <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1561986432-539713997ffa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo DevIceCream"
          className="w-32 h-32 rounded-full object-cover shadow-lg hover:scale-110 duration-200"
        />
        <h1 className="text-4xl mt-4 mb-2 font-bold text-white ">
          Dev IceCream
        </h1>
        <span className="text-white  font-mono font-bold">
          Rua São Josão, Jardim Curitiba - PE
        </span>
        <div className={`${colorSpan()} px-4 py-1 mt-5 rounded-lg`}>
          <span className="text-white font-medium">
            Seg a Dom - 09:00 as 22:00
          </span>
        </div>
      </div>
    </header>
  );
};
