import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 5,
        mt: 'auto',
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
        // color: (theme) => theme.palette.text.primary,
      }}
    >
      <Grid className="container mx-auto"  container spacing={4} justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            MyWebsite
          </Typography>
          <Typography variant="body2" color="aicent">
            Building awesome web apps with React and MUI. Responsive and clean design.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" underline="hover" color="inherit">Home</Link>
            <Link href="#" underline="hover" color="inherit">About</Link>
            <Link href="#" underline="hover" color="inherit">Services</Link>
            <Link href="#" underline="hover" color="inherit">Contact</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="#" color="inherit"><Facebook /></IconButton>
            <IconButton href="#" color="inherit"><Twitter /></IconButton>
            <IconButton href="#" color="inherit"><Instagram /></IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" color="aicent">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
