// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Trains",
    path: "/trains",
  },
  {
    icon: UilUsersAlt,
    heading: "Routes",
    path: "/routes",
  },
  {
    icon: UilPackage,
    heading: 'Stations',
    path: "/stations",
  },
  {
    icon: UilChart,
    heading: 'Analytics',
    path: "/analytics",
  },
  {
    icon: UilUsersAlt,
    heading: 'Profile',
    path: "/profile",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "On-time Performance",
    color: {
      backGround: "linear-gradient(180deg, #323643 0%, #606470 100%)",
      boxShadow: "0px 10px 20px 0px rgba(82, 90, 117, 0.50)",
    },
    barValue: 92,
    value: "92%",
    png: UilUsdSquare,
    series: [
      {
        name: "On-time %",
        data: [85, 88, 90, 91, 93, 92, 94],
      },
    ],
  },
  {
    title: "Active Trains",
    color: {
      backGround: "linear-gradient(180deg,rgb(64, 81, 152) 0%,rgb(62, 53, 54) 100%)",
      boxShadow: "0px 10px 20px 0px rgb(47, 47, 79, 0.50)",
    },
    barValue: 76,
    value: "143",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Active",
        data: [120, 128, 130, 135, 140, 142, 143],
      },
    ],
  },
  {
    title: "Track Occupancy",
    color: {
      backGround:
        "linear-gradient(180deg,rgb(115, 137, 208) 0%,rgb(72, 81, 108) 100%)",
      boxShadow: "0px 10px 20px 0px rgba(96, 100, 112, 0.50)",
    },
    barValue: 68,
    value: "68%",
    png: UilClipboardAlt,
    series: [
      {
        name: "Occupancy %",
        data: [55, 58, 60, 62, 65, 66, 68],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Ops Bot",
    noti: "Track maintenance scheduled on Line 2 between A–D.",
    time: "15 minutes ago",
  },
  {
    img: img2,
    name: "Dispatch",
    noti: "Train 1287 delayed by 6 min due to congestion.",
    time: "28 minutes ago",
  },
  {
    img: img3,
    name: "Signals",
    noti: "Signal fault cleared near Central Yard.",
    time: "1 hour ago",
  },
];
