export const ThemeIcon = () => {
  return (
    <div className="cursor-pointer hover:bg-slate-200 rounded-full">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 11C15.03 11 11 15.03 11 20C11 24.97 15.03 29 20 29C24.97 29 29 24.97 29 20C29 19.54 28.96 19.08 28.9 18.64C27.92 20.01 26.32 20.9 24.5 20.9C21.52 20.9 19.1 18.48 19.1 15.5C19.1 13.69 19.99 12.08 21.36 11.1C20.92 11.04 20.46 11 20 11Z"
          fill="black"
          fillOpacity="0.54"
        />
      </svg>
    </div>
  );
};

ThemeIcon.displayName = "ThemeIcon";
