import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="ur">اردو</option>
    </select>
  );
};

export default LanguageSwitcher;
