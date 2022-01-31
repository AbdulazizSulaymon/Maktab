import React from "react";

const DarkModeContext = React.createContext({ dark: false, setDark: () => {} });

export default DarkModeContext;
