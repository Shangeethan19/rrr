import { Typography, Paper, Box } from "@mui/material"

function EnrollmentContent() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Enrollment Details
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Current Enrollment Status</Typography>
        <Typography>Program: Hospitality Management</Typography>
        <Typography>Semester: 2nd Semester</Typography>
        <Typography>Academic Year: 2023/24</Typography>
      </Paper>
    </Box>
  )
}

export default EnrollmentContent

