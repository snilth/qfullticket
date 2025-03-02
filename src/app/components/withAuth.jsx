"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ModalLogin from "./ModalLogin";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      if (status === "unauthenticated") {
        setIsModalOpen(true);
      }
    }, [status]);

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    return (
      <>
        <WrappedComponent {...props} session={session} status={status} />
        {isModalOpen && <ModalLogin onClose={() => setIsModalOpen(false)} />}
      </>
    );
  };
};

export default withAuth;
