import "./App.css";
import "./index.css";
import {Link} from "react-router"
// const Body = () => {
//   return (
//     <>
//       <div className="h-[83vh] mb-[6%] mx-[45px] p-[5%]">
//         <div className="flex flex-column justify-center text-left p-[0.5rem]">
//           <h2 className="text-[64px] font-bold leading-[1.2] my-5 mx-0">
//             Hi,My Name is Ibrahim Abdulquadri Abiodun,
//           </h2>
//           <p className="text-[40px] leading-[1.2] text-[#e0e0e0]">
//             A front-end developer.
//           </p>
//           <div className="flex justify-start gap-4 my-7 ">
//             <button className="flex items-center justify-center p-4 w-8 h-9 border-[#9e9e9e] bg-black text-[#e0e0e0]">CONTACT ME</button>
//             <button className="flex items-center justify-center p-4 w-8 h-9 border-[#9e9e9e] bg-black text-[#e0e0e0]"> VIEW CV </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Body;

const Body = () => {
  return (
    <div className="h-[83vh] mb-[6%] mx-[45px] p-6 sm:p-8 font-mono">
      <div className="flex flex-col justify-center text-left p-2">
        <h2 className="text-4xl md:text-6xl text-white font-bold leading-[1.2] w-[548.359px] my-5">
          Hi, My Name is Ibrahim Abdulquadri Abiodun
        </h2>
        <p className="text-xl md:text-2xl leading-[1.2] text-[#e0e0e0]">
          A front-end developer.
        </p>
        <div className="flex justify-start gap-4 my-7">
          <Link to="/contacts">
            <button
              className="flex items-center justify-center px-6 py-3 border border-[#9e9e9e] bg-black text-[#e0e0e0] hover:bg-[#9e9e9e] hover:text-black transition duration-300"
            >
              CONTACT ME
            </button>
          </Link>
          <a href="./cv1.pdf" target="_blank" rel="noopener noreferrer">
              <button
            className="flex items-center justify-center px-6 py-3 border border-[#9e9e9e] bg-black text-[#e0e0e0] hover:bg-[#9e9e9e] hover:text-black transition duration-300"
            onClick={() => alert("View CV Clicked")}
          >
            VIEW CV
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
