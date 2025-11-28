import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box  position={"fixed"} sx={{ display: 'flex' , justifyContent: 'center', alignItems: 'center', 
    width: '100%', height: '100vh' ,backdropFilter: "blur(5px)"}}>
      <CircularProgress />
    </Box>
  );
}
