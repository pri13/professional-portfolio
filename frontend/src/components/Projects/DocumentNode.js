import React, { useState } from 'react';
import {
  Box,
  Chip,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';

const folderColors = {
  'Software Engineering': '#1976d2',
  'Hardware Engineering': '#2e7d32',
  Frontend: '#ed6c02',
  Backend: '#9c27b0',
  'Learning Javascript': '#0288d1',
  'Learning CSS': '#d81b60',
};

const hexToRgba = (hex, alpha = 0.08) => {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getFolderColor = (node, level) => {
  if (folderColors[node.name]) return folderColors[node.name];

  if (level === 0) return '#1976d2';
  if (level === 1) return '#7b1fa2';
  if (level === 2) return '#00838f';

  return '#616161';
};

const countFiles = (node) => {
  if (!node.children || node.children.length === 0) return 0;

  let count = 0;

  node.children.forEach((child) => {
    if (child.type === 'file') {
      count += 1;
    } else if (child.type === 'folder') {
      count += countFiles(child);// Recursively count files in subfolders
    }
  });

  return count;
};

const DocumentNode = ({ node, level = 0 }) => {
  const [open, setOpen] = useState(level < 1);

  if (node.type === 'folder') {
    const folderColor = getFolderColor(node, level);
    const fileCount = countFiles(node);

    return (
      <>
        <ListItemButton
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            pl: 2 + level * 2,
            borderRadius: 2,
            mb: 0.5,
            ml: level > 0 ? 1 : 0,
            borderLeft:
              level > 0 ? `3px solid ${hexToRgba(folderColor, 0.35)}` : 'none',
            '&:hover': {
              backgroundColor: hexToRgba(folderColor, 0.12),
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <FolderIcon sx={{ color: folderColor }} />
          </ListItemIcon>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              mr: 1,
              gap: 1,
            }}
          >
            <ListItemText
              primary={node.name}
              primaryTypographyProps={{
                sx: {
                  color: folderColor,
                  fontWeight: level <= 1 ? 700 : 600,
                },
              }}
            />

            <Chip
              label={fileCount}
              size="small"
              sx={{
                backgroundColor: hexToRgba(folderColor, 0.15),
                color: folderColor,
                fontWeight: 700,
                minWidth: 36,
              }}
            />
          </Box>

          {open ? (
            <ExpandLess sx={{ color: folderColor }} />
          ) : (
            <ExpandMore sx={{ color: folderColor }} />
          )}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {node.children?.map((child) => (
              <DocumentNode key={child.id} node={child} level={level + 1} />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemButton
      sx={{
        pl: 2 + level * 2,
        borderRadius: 2,
        mb: 0.5,
        ml: level > 0 ? 1 : 0,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 36 }}>
        <DescriptionIcon sx={{ color: '#455a64' }} />
      </ListItemIcon>

      <ListItemText
        primary={`${node.number ? `${node.number}. ` : ''}${node.name}`}
        secondary="PDF document"
        primaryTypographyProps={{
          sx: {
            fontWeight: 500,
          },
        }}
      />

      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <Tooltip title="Open PDF">
          <IconButton
            component="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Download PDF">
          <IconButton component="a" href={node.url} download size="small">
            <DownloadIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </ListItemButton>
  );
};

export default DocumentNode;