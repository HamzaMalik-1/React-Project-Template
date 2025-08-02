import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-4">
      <h2>{t("users")}</h2>
      {loading && <p>{t("loading")}</p>}
      {error && <p className="text-danger">{t("error")}</p>}
      <UserList users={users} />
    </div>
  );
};
