import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavItem } from "@/types/NavItem";

export const Sidebar = ({
  items,
  open,
  onClose,
}: {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {items.map((item, index) => (
          <ListItem
            component="button"
            key={index}
            onClick={() => item.onClick()}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
