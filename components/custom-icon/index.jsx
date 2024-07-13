import { pascalCase } from "change-case";
import Account from "./account";
import Home from "./home";
import Report from "./report";
import Statistic from "./statistic";
import Qr from "./qr";
import Food from "./food";
import Bill from "./bill";
import Investment from "./investment";

const icons = {
  Account,
  Home,
  Report,
  Statistic,
  Qr,
  Food,
  Bill,
  Investment,
};

export default function CustomIcon({ name, size, color }) {
  const Icon = icons[pascalCase(name)];

  if (!Icon) return null;

  return <Icon size={size} color={color} />;
}
