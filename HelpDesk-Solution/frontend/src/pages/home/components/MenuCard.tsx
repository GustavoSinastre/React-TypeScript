// src/pages/home/MenuCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface MenuCardProps {
  title: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, onClick }) => {
  return (
    <Card
      onClick={onClick}
      style={{ cursor: 'pointer', textAlign: 'center', padding: '20px', transition: 'transform 0.3s', borderRadius: '15px' }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <CardContent>
        {icon}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
