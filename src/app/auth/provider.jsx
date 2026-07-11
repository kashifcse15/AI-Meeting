"use client";
import React, { useEffect, useState, useContext } from "react";
import { supabase } from "@/services/supabaseClient";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: Users, error } = await supabase
      .from("Users")
      .select("*")
      .eq("email", user.email);

    if (error) {
      console.log(error);
      return;
    }

    if (Users.length === 0) {
      const { data, error } = await supabase
        .from("Users")
        .insert([
          {
            name: user.user_metadata?.name,
            email: user.email,
            picture: user.user_metadata?.picture,
          },
        ])
        .select();

      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        setUser(data[0]);
      }
    } else {
      setUser(Users[0]);
    }
  };

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUser = () => {
  return useContext(UserDetailContext);
};