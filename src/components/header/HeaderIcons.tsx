import Image from "next/image";
import React from "react";
import ChatIcon from "../../images/chat-icon.svg";
import HeartIcon from "../../images/heartIcon.svg";
import ProfileIcon from "../../images/profileIcon.svg";
import CartIcon from "../../images/CartIcon.svg";

export const HeaderIcons = () => {
  return (
    <>
      {[ChatIcon, HeartIcon, CartIcon, ProfileIcon].map((Icon) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "2px solid rgba(188, 195, 203, 0.55)",
            padding: "8px",
            borderRadius: 9,
            marginRight: 35,
          }}
          key={Icon}
        >
          {/* <Image src={chatIcon} alt="chat icon" /> */}
          <Icon />
        </div>
      ))}
    </>
  );
};
