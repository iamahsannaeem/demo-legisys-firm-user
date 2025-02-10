import { FC } from "react";

interface ResearchIconProps {
  color?: string;
}
export const FilesIcon: FC<ResearchIconProps> = ({ color = "#9CA3AF" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g opacity="0.5">
        <rect
          width="16"
          height="15"
          transform="translate(0 0.5)"
          fill="url(#pattern0_76748_8902)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_76748_8902"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_76748_8902"
            transform="matrix(0.0104167 0 0 0.0111111 0.03125 0)"
          />
        </pattern>
        <image
          id="image0_76748_8902"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACr0lEQVR4nO3dv27TUBQG8DuVSvAAFHgGRjYGFiZWb5EiJT6fJUuBjfIGtFtfqkLd2mfg3wMAAk8XXSlFlQUpkV2fP/4+6cy5/uXk2LlxkpQYhmEYhmHcZLlcHorIGxG5APAdQFasDsB50zTPUqTUdf0EwJUybv5L/QTwMkXpZKPIORR2GRcGMHN47O1M1obM4bFF5JsBxHyjfoTENgCbb1Zd1893Pfki8quu61fJW7Rh0auyppDYFqFDYluFDodtGToUtnXoMNgeoENge4F2j+0J2jW2N2i32B6hXWJ7hXaH7RnaFbZ3aDfYEaBLALy4bYtV9TNIbVj0arVaPbpD7PNx9fZbXDZWxwOPZxd2N57c/gvThs19jIJ9V509rt5+i8pzqkRoEFq7C8GOhjocRwf0UTmjQWj1jgM7GupIHB3QB+SMhq3iGxYQWr0LwY6GOhxHB/RROaNB6P/pik5E3g7ZLx6a8thlz3q7dx22o4+TkWyxw0IfJSNp2/ZhWOiV4sjop2max2GhYWt0vIsM3Q398HRo5nIyzApVvl94Vm6AWSwW95PHGEDMt9TH9Xr9NHmP9U5eR0AuMYCZd9RZihIDmPlfFeqHUbQxsaPatn2QosTjXkdVVQcATgF8meAJ/ywiJ+UxBy3a4xsWETmZ+tVVHnPQoj3udWCaTu5Dfx26aHd7HZgY+bpmNzowE+hOe69jLtBZ+8CsrYfQIHRmRxsYGRjjpWot2pggNKFHjceOhrH1EBqEzuxoAyMDHB0gNGc0eDIERwcv78DLO8S6jjb40/N5lAOzFst/ppAiBcBrbVDMAXqz2dwTkUtP0DC2nr3+wskidooGfd3ZADYAPlg5QaaI0J4CQk8TQk8UQk+Ucofn1Ngi8inNLaJwNymA92luqarqYIs9RWf/uT/6N+D8yyxFnyVgAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

FilesIcon.displayName = "FilesIcon";
