"use client";
import { SendIcon } from "@/assets/icons/send";
import { IconButton } from "../common/icon-button";
import { Input } from "../common/input";

export const ChatInput = () => {
  return (
    <div className="p-2">
      <Input
        placeholder="Typ je bericht...."
        className="text-base font-normal  h-12"
        iconCx="top-[8px] "
        endIcon={
          <IconButton
            variant="primary"
            className=" border-none p-1 active:scale-90 "
          >
            <SendIcon />
          </IconButton>
        }
      />
    </div>
  );
};
