import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { UserInfo } from "@/types/UserInfo";
import "@/styles/header/header.css";

export const DashboardHeader = ({
  user,
  onMenuToggle,
}: {
  user: UserInfo;
  onMenuToggle: () => void;
}) => {
  return (
    <AppBar position="static" color="default" className="dashboard-header">
      <Toolbar className="toolbar">
        <Box display="flex" alignItems="center">
          <IconButton onClick={onMenuToggle}>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center">
          <Avatar className="avatar">
            <PersonIcon />
          </Avatar>
          <Box ml={1}>
            <Typography variant="caption">Pozdrav,</Typography>
            <Typography variant="subtitle2">{user.name}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
