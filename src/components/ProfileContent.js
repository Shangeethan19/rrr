import { Typography, Box, Paper, Grid, Avatar } from "@mui/material"

function ProfileContent() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Avatar alt="Kevin Smith" src="/user.png" sx={{ width: 150, height: 150, margin: "auto" }} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h5">Kevin Smith</Typography>
            <Typography variant="body1">kevinsmith@gmail.com</Typography>
            <Typography variant="body2" color="textSecondary">
              WAI No: WAI01/0025, SLIIT No: EM/19/002
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Contact Information</Typography>
            <Typography>Phone: (123) 456-7890</Typography>
            <Typography>Address: 123 Main St</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Academic Information</Typography>
            <Typography>Course: Hospitality Management (Advanced)</Typography>
            <Typography>Batch: 1</Typography>
            <Typography>Intake: January 2024</Typography>
            <Typography>Group ID: GR/02</Typography>
          </Paper>
        </Grid>
      </Grid>
       {/* Guardian Details Section - One Large Box */}
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>Guardian Details</Typography>
        
        {/* Guardian Box */}
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Paper sx={{ p: 2, backgroundColor: "#f1f8e9" }}>
              {/* <Typography variant="h6">Guardian Information</Typography> */}
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Avatar alt="Guardian" src="/guardian.png" sx={{ width: 80, height: 80 }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">James Smith</Typography>
                  <Typography variant="body2">Parent</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Guardian 1 Box */}
          <Grid item xs={12} >
            <Paper sx={{ p: 2, backgroundColor: "#e8f5e9" }}>
              {/* <Typography variant="h6">Guardian 1 Information</Typography> */}
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Avatar alt="Guardian 1" src="/guardian1.png" sx={{ width: 80, height: 80 }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6" >Alex Smith</Typography>
                  <Typography variant="body2">Parent</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ProfileContent