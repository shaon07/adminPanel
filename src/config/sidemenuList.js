import { BiCategoryAlt } from 'react-icons/bi';
import { RiCoupon3Line, RiLuggageCartLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';

export const sideMenu = [
  {
    heading: "Catelog",
    childList: ["Products", "Inventory", "Bundle", "Tags", "Categories", "Brand", "Tags", "Attribute"],
    icon: <BiCategoryAlt />
  },
  {
    heading: "Coupon",
    childList: [],
    icon: <RiCoupon3Line />
  },
  {
    heading: "Delivery Zone",
    childList: [],
    icon: <TbTruckDelivery />
  },
  {
    heading: "Orders",
    childList: ["Order Lists", "Order Status"],
    icon: <RiLuggageCartLine />
  },
  {
    heading: "Customers",
    childList: []
  },
  {
    heading: "Pages",
    childList: []
  },
  {
    heading: "Email",
    childList: ["OutBox", "SMTP Informations", "Email Templates", "Compose Email"]
  },
  {
    heading: "SMS",
    childList: ["SMS Gateway", "SMS Templates"]
  },
  {
    heading: "Settings",
    childList: ['Site Informations', "Invoice Informations", "Site, Brand, App Logo", "Admin User", "User Profile", "Componenets", "Locale"]
  }
]