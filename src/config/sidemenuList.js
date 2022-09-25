import { BiCategoryAlt } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiCoupon3Line, RiLuggageCartLine, RiPagesLine } from 'react-icons/ri';
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
    childList: [],
    icon: <FiUser />
  },
  {
    heading: "Pages",
    childList: [],
    icon: <RiPagesLine />
  },
  {
    heading: "Email",
    childList: ["OutBox", "SMTP Informations", "Email Templates", "Compose Email"],
    icon: <HiOutlineMail />
  },
  {
    heading: "SMS",
    childList: ["SMS Gateway", "SMS Templates"],
    icon: <MdOutlineTextsms />
  },
  {
    heading: "Settings",
    childList: ['Site Informations', "Invoice Informations", "Site, Brand, App Logo", "Admin User", "User Profile", "Componenets", "Locale"],
    icon: <BsGear />
  }
]