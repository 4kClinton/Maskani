// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
// import { Link } from 'react-router-dom';


// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    // route: '/dashboard'
  },
  {
    icon: UilUsersAlt,
    heading: "Tenants",
    // route: '/tenants'
  },
  {
    icon: UilClipboardAlt,
    heading: "Payments",
    // route: 'payments'
  },
  {
    icon: UilPackage,
    heading: 'Maintenance',
    // route: 'maintenance'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Occupied Units",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "70 Units",
    png: UilEstate,
    series: [
      {
        name: "Occupied Units",
        data: [10, 16, 5, 23, 9, 1, 6],
      },
    ],
  },
  {
    title: "Vacant Units",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 30,
    value: "30 Units",
    png: UilEstate,
    series: [
      {
        name: "Vacant Units",
        data: [1, 4, 7, 5, 3, 8, 2],
      },
    ],
  },
  {
    title: "Maintenance Tickets",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "127",
    png: UilPackage,
    series: [
      {
        name: "Maintenance Tickets",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Ryan Mwangi",
    noti: "Has submitted a maintenance ticket (Fumigation).",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Justin Maina",
    noti: "Has requested to talk to the property manager.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Edward Mwangi",
    noti: "Has requested an extension of the rent payment deadline.",
    time: "2 hours ago",
  },
];
