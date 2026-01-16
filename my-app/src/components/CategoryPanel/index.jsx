import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function CategoryPanel({ open, onClose }) {

  const Items = ['Men', 'Women', 'Electronics', 'Bag', 'Beauty', 'Wellness', 'Jewellery'];

  return (
        <Drawer
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: 260,
              bgcolor: 'background.default',
              color: 'text.primary',
            },
          }}
        >


      <Box role="presentation">
        <List>
          {Items.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={onClose}
                sx={{
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
