// react hooks
import { createContext, useEffect, useState } from "react";

const CreateContext1 = createContext();

const CreateProvider1 = ({ children }) => {
  const [trackLogin, setTrackLogin] = useState(0);
  const [tracktoken, setTracktoken] = useState(0);
  const [query, setQuery] = useState("");
  const [DocName, setDocName] = useState("");

  // console.log("DocName", DocName);

  // console.log("traclklogin", trackLogin);
  //   console.log("isUser", isUser);

  return (
    <CreateContext1.Provider
      value={{
        trackLogin,
        setTrackLogin,
        query,
        setQuery,
        tracktoken,
        setTracktoken,
        DocName,
        setDocName,
      }}
    >
      {children}
    </CreateContext1.Provider>
  );
};

export { CreateContext1, CreateProvider1 };
