import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function CategoryPanel({ open, onClose }) {
  const { data, loading } = useFetch("/categories/root");
  const categories = data?.categories || [];
  const navigate = useNavigate();

  const handleClick = (categoryId) => {
    navigate(`/productlisting?category=${categoryId}`);
    onClose(); 
  };

  const isDark = localStorage.getItem('theme') == 'dark';


  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          bgcolor: isDark ? 'grey.900' : 'white', 
          color: isDark ? 'common.white' : 'text.primary', 
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, px: 1, py: 1 }}>
          Categories
        </Typography>
      </Box>
      <Divider />

      <Box role="presentation">
        <List>
          {loading ? (
            <ListItem sx={{ px: 3, py: 2 }}>
              <Typography variant="body2" color="text.secondary">Loading...</Typography>
            </ListItem>
          ) : categories.length > 0 ? (
            categories.map((category) => (
              <ListItem key={category._id} disablePadding>
                <ListItemButton
                  onClick={() => handleClick(category._id)}
                  sx={{
                    py: 1.5,
                    px: 3,
                    '&:hover': {
                        bgcolor: 'grey',
                    },
                  }}
                >
                  {category.images?.[0] && (
                    <Box
                      component="img"
                      src={category.images[0]}
                      alt=""
                      sx={{ width: 24, height: 24, mr: 2, objectFit: 'contain' }}
                    />
                  )}
                  <ListItemText
                    primary={category.name}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem> 
            ))
          ) : (
            <ListItem sx={{ px: 3, py: 2 }}>
              <Typography variant="body2" color="text.secondary">Loading...</Typography>
            </ListItem>
          )}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}