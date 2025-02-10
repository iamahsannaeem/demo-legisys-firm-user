"use client";
import { HomeIcon } from "@/assets/icons/home";
import { OrgIcon } from "@/assets/icons/org";
import { ProfileIcon } from "@/assets/icons/profile";
import { IconButton } from "../common/icon-button";

export const Navbar = () => {
  return (
    <div className="h-16 rounded-xl  flex justify-end items-center">
      <IconButton
        variant="primary"
        className=" border-none "
        onClick={() => alert("Home clicked")}
      >
        <HomeIcon />
      </IconButton>
      <IconButton
        variant="primary"
        className=" border-none"
        onClick={() => alert("Organization clicked")}
      >
        <OrgIcon />
      </IconButton>
      <IconButton
        variant="primary"
        className=" border-none "
        onClick={() => alert("Profile clicked")}
      >
        <ProfileIcon />
      </IconButton>
    </div>
  );
};
