import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useLazyGetUserQuery } from "store/slices/api-slice";
import { User } from "types";
import { ObjectId } from "mongodb";

export const useIsAuthenticated = () => {
  const [user, setUser] = useState<User | null>(null);
  const [getUser] = useLazyGetUserQuery();
  const { data: session, status } = useSession();

  const email = session?.user?.email;

  useEffect(() => {
    if (email) {
      getUser(email)
        .unwrap()
        .then((user) => setUser(user));
    }
  }, [email, getUser]);

  return { user, status };
};
