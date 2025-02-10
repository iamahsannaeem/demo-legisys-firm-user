import { BusinessAssistantIcon } from "@/assets/icons/business-assistant";
import { DashboardIcon } from "@/assets/icons/dashboard";
import { FileAnalysisIcon } from "@/assets/icons/file-analysis";
import { FilesIcon } from "@/assets/icons/files";
import { LibraryIcon } from "@/assets/icons/library";
import { OrganizationIcon } from "@/assets/icons/organization";
import { ResearchIcon } from "@/assets/icons/research";

export const NAV_LINKS = [
  {
    id: 1,
    imagesrc: "dashoardicon.svg",
    title: "Dashboard",
    alt: "dashboardImage",
    icon: <DashboardIcon />,
    activeIcon: <DashboardIcon color="#000000" />,
    hreflink: "/dashboard",
  },
  {
    id: 2,
    imagesrc: "researchicon.svg",
    title: "Onderzoek",
    alt: "dashboardImage",
    icon: <ResearchIcon />,
    activeIcon: <ResearchIcon color="#000000" />,
    hreflink: "/",
  },
  {
    id: 3,
    imagesrc: "fileanalysisicon.svg",
    title: "Dossieranalyse",
    alt: "dashboardImage",
    icon: <FileAnalysisIcon />,
    activeIcon: <FileAnalysisIcon color="#000000" />,
    hreflink: "/file-analysis",
  },
  {
    id: 4,
    imagesrc: "businessassistanicon.svg",
    title: "Assistent van het bedrijf",
    alt: "dashboardImage",
    icon: <BusinessAssistantIcon />,
    activeIcon: <BusinessAssistantIcon color="#000000" />,
    hreflink: "/business-assistant",
  },
  {
    id: 5,
    imagesrc: "filesicon.svg",
    title: "Bestanden",
    alt: "dashboardImage",
    icon: <FilesIcon />,
    activeIcon: <FilesIcon color="#000000" />,
    hreflink: "/files",
  },
  {
    id: 6,
    imagesrc: "libraryicon.svg",
    title: "Library",
    alt: "dashboardImage",
    icon: <LibraryIcon />,
    activeIcon: <LibraryIcon color="#000000" />,
    hreflink: "/library",
  },
  {
    id: 7,
    imagesrc: "organizationicon.svg",
    title: "Kantoor",
    alt: "dashboardImage",
    icon: <OrganizationIcon />,
    activeIcon: <OrganizationIcon color="#000000" />,
    hreflink: "/organization",
  },
];
