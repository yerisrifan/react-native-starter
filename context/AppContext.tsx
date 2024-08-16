import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, useTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { CombinedDefaultTheme, CombinedDarkTheme } from "@/constants/Theme";

export const AppContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  return (
    <AppContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} independent={true}>
          {children}
          <StatusBar style={theme.dark ? "light" : "dark"} />
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

export type AppTheme = typeof CombinedDarkTheme | typeof CombinedDefaultTheme;

export const useAppTheme = () => useTheme<AppTheme>();
