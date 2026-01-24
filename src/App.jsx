function App() {
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevTinder</a>
        </div>
        <div className="flex gap-2">
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          /> */}
          <div className="dropdown dropdown-end mx-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-6">

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button className="btn btn-primary">Primary</button>
//         <button className="btn btn-secondary">Secondary</button>
//         <button className="btn btn-accent">Accent</button>
//         <button className="btn btn-success">Success</button>
//       </div>

//       {/* Card */}
//       <div className="card w-96 bg-base-100 shadow-xl">
//         <figure>
//           <img
//             src="https://placeimg.com/400/225/tech"
//             alt="Tech"
//             className="rounded-xl"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">DaisyUI Card</h2>
//           <p>This is a prebuilt daisyUI card component.</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Connect</button>
//           </div>
//         </div>
//       </div>

//       {/* Alert */}
//       <div className="alert alert-info shadow-lg w-80">
//         <div>
//           <span>DaisyUI alert component is working!</span>
//         </div>
//       </div>

//       {/* Avatar */}
//       <div className="avatar">
//         <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//           <img src="https://placeimg.com/192/192/people" alt="avatar" />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;
