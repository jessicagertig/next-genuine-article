"use client"

import React, { StrictMode } from "react";
// import { ThemeProvider } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import { ModalProvider } from "@/app/context/ModalContext";
// import { WindowSizeProvider } from "@/app/context/WindowSizeContext";
// import { AuthProvider } from "src/context/AuthContext";

import myTheme from "@/app/theme";
// import customTheme from "src/styles/customTheme";

/* REACT QUERY
--===================================================-- */
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// export function AppWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <StrictMode>
//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider theme={customTheme}>
//           <EmotionThemeProvider theme={myTheme}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <WindowSizeProvider>
//                 <ModalProvider>
//                   <AuthProvider>
//                     {children}
//                   </AuthProvider>
//                 </ModalProvider>
//               </WindowSizeProvider>
//             </LocalizationProvider>
//           </EmotionThemeProvider>
//         </ThemeProvider>
//       </QueryClientProvider>
//     </StrictMode>
//   );
// }

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <EmotionThemeProvider theme={myTheme}>
          {/* <WindowSizeProvider>
            <ModalProvider> */}
              {children}
            {/* </ModalProvider>
          </WindowSizeProvider> */}
      </EmotionThemeProvider>
    </StrictMode>
  );
}