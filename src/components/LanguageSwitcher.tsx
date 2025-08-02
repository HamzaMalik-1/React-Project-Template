// src/components/common/LanguageSwitcher.tsx

import React from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Form.Select
      size="sm"
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      defaultValue={i18n.language}
      style={{ maxWidth: "150px" }}
    >
      <option value="en">English</option>
      <option value="ur">اردو</option>
    </Form.Select>
  );
};

export default LanguageSwitcher;
