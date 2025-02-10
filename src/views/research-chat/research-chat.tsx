"use client";
import { DeleteIcon } from "@/assets/icons/delete";
import { IconButton } from "@/components/common/icon-button";
import { Input } from "@/components/common/input";
import { ChatHeader } from "../../components/chat/chat-heaer";
import { ChatInput } from "../../components/chat/chat-input";
import { ChatViewer } from "../../components/chat/chat-viewer";
import { ConversationsList } from "../../components/chat/conversations-list";
import { Sources } from "../../components/chat/sources";

export const ResearchChat = () => {
  return (
    <div className="flex gap-4 h-full ">
      <ConversationsList />
      <div className="rounded-xl bg-white shadow flex-1 flex flex-col">
        <ChatHeader title="Research">
          <Input
            placeholder="Search"
            className="max-w-32 h-7 rounded-md p-2   text-sm font-normal m-0 focus:border-tranparent"
          />
          <IconButton
            variant="primary"
            className="w-8 h-8 border-none bg-white "
            onClick={() => alert("Deleted Successfully")}
          >
            <DeleteIcon />
          </IconButton>
        </ChatHeader>
        <ChatViewer />
        <ChatInput />
      </div>
      <Sources />
    </div>
  );
};
