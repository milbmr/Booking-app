import { GetServerSideProps } from "next";
import { Redirect } from "lib/client";
import { getIsAuthUser } from "lib/server/users";
import SettingsView from "views/settings";
import NavigationBar from "components/ui/navigation-bar";

const Settings = () => {
  return (
    <>
      <NavigationBar />
      <SettingsView />
    </>
  );
};

export default Settings;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const isAuthUser = await getIsAuthUser(ctx);

  if (!isAuthUser) return Redirect.NOT_FOUND;

  return {
    props: {},
  };
};
