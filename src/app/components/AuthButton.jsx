"use client";
import { useSession, signOut } from "next-auth/react";

function AuthButton({ handleOpenModal }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-2">
        {/* show avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {session.user.image ? (
            <img
              src={session.user.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-lg font-bold text-[#333]">
              {session.user.name?.charAt(0) || "U"}
            </span>
          )}
        </div>
        {/* display username */}
        <span className="text-white">{session.user.name || "User"}</span>
        {/* sign out */}
        <button
          onClick={() => signOut()}
          className="p-2 font-bold text-red-500 hover:text-[#f5f5f5] hover:bg-red-500 transition-all duration-300 ease-in-out border rounded-md border-red-500"
        >
          Sign Out
        </button>
      </div>
    );
  }

  // if not login, show button to open ModalLogin
  return (
    <button
      onClick={handleOpenModal}
      className="p-2 font-bold text-red-500 hover:text-[#f5f5f5] hover:bg-red-500 transition-all duration-300 ease-in-out border rounded-md border-red-500"
    >
      Login / Register
    </button>
  );
}

export default AuthButton;