"use client"

import { useState } from "react"
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  School,
  CalendarToday,
  Assessment,
  CreditCard,
  Person,
  ExitToApp,
} from "@mui/icons-material"
import DashboardContent from "./DashboardContent"
import EnrollmentContent from "./EnrollmentContent"
import SchedulesContent from "./SchedulesContent"
import ResultsContent from "./ResultsContent"
import PaymentContent from "./PaymentContent"
import ProfileContent from "./ProfileContent"

const drawerWidth = 240

function Dashboard({ userType, onLogout }) {
  const [selectedContent, setSelectedContent] = useState("dashboard")

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, content: "dashboard" },
    { text: "Enrollment", icon: <School />, content: "enrollment" },
    { text: "Schedules", icon: <CalendarToday />, content: "schedules" },
    { text: "Results", icon: <Assessment />, content: "results" },
    { text: "Payment Details", icon: <CreditCard />, content: "payment" },
    { text: "Profile", icon: <Person />, content: "profile" },
  ]

  const renderContent = () => {
    switch (selectedContent) {
      case "dashboard":
        return <DashboardContent />
      case "enrollment":
        return <EnrollmentContent />
      case "schedules":
        return <SchedulesContent />
      case "results":
        return <ResultsContent />
      case "payment":
        return <PaymentContent />
      case "profile":
        return <ProfileContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Box component="img" src="/CAHM-CRM-Logo.png" alt="Logo" sx={{ height: 40, marginRight: 2 }} />
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Colombo Academy
          </Typography>
          <IconButton color="inherit" onClick={onLogout}>
            <ExitToApp />
          </IconButton>
          <Avatar src="/user.png" sx={{ marginLeft: 2 }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={() => setSelectedContent(item.content)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  )
}

export default Dashboard

