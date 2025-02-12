import { useState } from "react"
import {
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Modal,
  TextField
} from "@mui/material"
import { blue } from "@mui/material/colors"

function DashboardContent() {
  // ✅ User Profile State
  const [user, setUser] = useState({
    name: "Kevin",
    email: "kevin@example.com",
    phone: "+1234567890",
    address: "123 Main Street, City",
    course: "BSc in Hospitality Management",
    batch: "Batch 2025",
    intake: "January 2023",
    groupId: "G-12",
    waiNo: "WAI-45678",
    sliitNo: "SLIIT-12345"
  })

  // ✅ Modal State
  const [open, setOpen] = useState(false)

  // ✅ Store Original User Data (for cancel)
  const [originalUser, setOriginalUser] = useState(user)

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // ✅ Handle Save (Later, send this to backend)
  const handleSave = () => {
    console.log("Updated User Details:", user)
    setOriginalUser(user) // Update the original user after saving
    setOpen(false) // Close Modal
  }

  // ✅ Handle Cancel (Revert changes)
  const handleCancel = () => {
    setUser(originalUser) // Revert to original user data
    setOpen(false) // Close Modal
  }

  return (
    <Box>
      {/* Header Section with Edit Profile Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Hello, {user.name}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => { setOpen(true); setOriginalUser(user); }}>
          Edit Profile Details
        </Button>
      </Box>

      {/* Semester Overview */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, transition: "0.3s", "&:hover": { backgroundColor: "#e3f2fd" } }}>
            <Typography variant="h6">Semester Results</Typography>
            <Typography variant="h4">Passed</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, transition: "0.3s", "&:hover": { backgroundColor: "#e3f2fd" } }}>
            <Typography variant="h6">Attendance</Typography>
            <Typography variant="h4">65%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, transition: "0.3s", "&:hover": { backgroundColor: "#e3f2fd" } }}>
            <Typography variant="h6">Completed Semester Subjects</Typography>
            <ul>
              <li>Fundamentals of the hotel and catering industry</li>
              <li>Housekeeping and accommodation studies</li>
              <li>Restaurant services</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      {/* Upcoming Subjects */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Upcoming Semester Subjects
      </Typography>
      <Paper sx={{ p: 2, backgroundColor: blue[50] }}>
        <Typography variant="subtitle1">HM 101: Front office operations and administration</Typography>
        <Typography variant="body2">Prof. Hetiyarachi, 3:00 PM - 5:00 PM</Typography>
      </Paper>
      <Paper sx={{ p: 2, mt: 2, backgroundColor: blue[50] }}>
        <Typography variant="subtitle1">HM 105: Food and beverage management</Typography>
        <Typography variant="body2">Prof. Sanjeewa, 9:00 AM - 11:00 AM</Typography>
      </Paper>
      <Paper sx={{ p: 2, mt: 2, backgroundColor: blue[50] }}>
        <Typography variant="subtitle1">HM 102: Current issues and emerging trends in hospitality</Typography>
        <Typography variant="body2">Prof. Johnson, 12:00 PM - 2:00 PM</Typography>
      </Paper>

      {/* Edit Profile Modal */}
      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ width: 600, p: 3 }}>
          <Typography variant="h6" gutterBottom>Edit Profile Details</Typography>
          
          <Grid container spacing={3}>
            {/* Column 1 */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Course"
                name="course"
                value={user.course}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Intake"
                name="intake"
                value={user.intake}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="WAI No"
                name="waiNo"
                value={user.waiNo}
                onChange={handleChange}
              />
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Address"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Batch"
                name="batch"
                value={user.batch}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Group ID"
                name="groupId"
                value={user.groupId}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="SLIIT No"
                name="sliitNo"
                value={user.sliitNo}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  )
}

export default DashboardContent
