"use client";

export const ChatHeader = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="h-16 py-2 px-4 flex justify-between items-center border-b">
      <div className="font-semibold text-base">{title}</div>
      <div className="flex items-center gap-6">{children}</div>
    </div>
  );
};
