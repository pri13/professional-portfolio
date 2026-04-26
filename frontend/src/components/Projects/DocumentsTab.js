import React, { useEffect, useMemo, useState } from 'react';
// React = library for building UI
// useState = stores changing data in the component
// useEffect = runs code after the component renders
// useMemo = remembers a computed value so React does not recalculate it unnecessarily

import {
  Alert,
  Box,
  CircularProgress,
  InputAdornment,
  List,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
// These are Material UI components used to build the page layout and styling

import SearchIcon from '@mui/icons-material/Search';
import DocumentNode from './DocumentNode';
import api from '../../api.js';
import { useLoader } from '../../context/LoaderContext.js';

// This helper function takes a flat array of documents from the backend
// and converts it into a nested tree structure:
// topCategory -> section -> subgroup -> file
const buildTreeFromDocuments = (documents) => {
  const root = [];
  // root will store the top-level folders

  // Helper function:
  // Look for a folder in "children"
  // If it does not exist, create it
  const getOrCreateFolder = (children, name, pathKey) => {
    let existing = children.find(
      (item) => item.type === 'folder' && item.pathKey === pathKey
    );

    // If folder not found, create a new one
    if (!existing) {
      existing = {
        id: pathKey,
        pathKey,
        name,
        type: 'folder',
        children: [],
      };
      children.push(existing);
    }

    return existing;
  };

  // Loop through every document from the API
  documents.forEach((doc,index) => {
    // Create or find the top-level folder
    const topFolder = getOrCreateFolder(
      root,
      doc.topCategory,
      `top-${doc.topCategory}`
    );

    // Create or find the section folder inside the top folder
    const sectionFolder = getOrCreateFolder(
      topFolder.children,
      doc.section,
      `section-${doc.topCategory}-${doc.section}`
    );

    // By default, files go inside the section folder
    let parentFolder = sectionFolder;

    // If subgroup exists and is not blank, create/find subgroup folder
    if (doc.subgroup && doc.subgroup.trim()) {
      parentFolder = getOrCreateFolder(
        sectionFolder.children,
        doc.subgroup,
        `group-${doc.topCategory}-${doc.section}-${doc.subgroup}`
      );
    }

    // Add the actual file as a child of the final folder
    parentFolder.children.push({
      id: `file-${doc._id}`,
      name: doc.title,
      type: 'file',
      url: doc.fileUrl,
      number: parentFolder.children.length + 1
    });
  });

  return root;
};


// This helper filters the folder/file tree based on search text
const filterTree = (nodes, query) => {
  // If the user has not typed anything, return the full tree
  if (!query.trim()) return nodes;

  const lower = query.toLowerCase();

  return nodes
    .map((node) => {
      // If this node is a file, keep it only if its name matches the search
      if (node.type === 'file') {
        return node.name.toLowerCase().includes(lower) ? node : null;
      }

      // If this node is a folder, recursively filter its children
      const filteredChildren = filterTree(node.children || [], query);

      // Keep the folder if:
      // 1. the folder name matches, OR
      // 2. any of its children match
      if (
        node.name.toLowerCase().includes(lower) ||
        filteredChildren.length > 0
      ) {
        return {
          ...node,
          children: filteredChildren,
        };
      }

      // Otherwise remove it
      return null;
    })
    .filter(Boolean); // remove null values from the array
};


// React component
// A component is just a function that returns UI
const DocumentsTab = () => {
  const [documents, setDocuments] = useState([]);

  const [search, setSearch] = useState('');
  // search = whatever the user types in the search box

  const { showLoader, hideLoader } = useLoader();

  const [error, setError] = useState('');
  // error = stores an error message if the request fails


  // useEffect runs after the component first appears on screen
  // The empty [] means: run only once on mount
  useEffect(() => {
    let timer;
    const fetchDocuments = async () => {
      try {
        showLoader("Fetching documents....");
        setError('');

        const { data } = await api.get('/api/documents');

        // Wait for API response
        setDocuments(data);
        hideLoader();
      } catch (err) {
        console.error(err);
        setError('Failed to load documents.');
        hideLoader();
      } finally {
        hideLoader();
      }
    };

    fetchDocuments();
  }, []);


  // useMemo remembers a calculated value
  // This prevents rebuilding the tree on every render
  // It only rebuilds when "documents" changes
  const treeData = useMemo(() => buildTreeFromDocuments(documents), [documents]);

  // This also uses useMemo
  // It only re-filters when the tree changes or the search text changes
  const filteredTree = useMemo(() => filterTree(treeData, search), [treeData, search]);


  // return = what gets shown on screen
  return (
    <Box sx={{ p: 3, borderRadius: 3, mt: 3 }}>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
        align="center"
      >
        Browse engineering notes and download PDF files.
      </Typography>

      <TextField
        fullWidth
        placeholder="Search documents..."
        value={search}
        // This is a controlled input:
        // React controls the value using state
        onChange={(e) => setSearch(e.target.value)}
        // When user types, search state updates
        // Updating state causes a re-render
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {error ? (
        // If there is an error, show error alert
        <Alert severity="error">{error}</Alert>
      ) : filteredTree.length === 0 ? (
        // If search returns nothing, show info message
        <Alert severity="info">No documents found.</Alert>
      ) : (
        // Otherwise show the document tree
        <List>
          {filteredTree.map((node) => (
            // Pass each node into DocumentNode as a prop
            // Props = data passed from parent component to child component
            <DocumentNode key={node.id} node={node} />
          ))}
        </List>
      )}
    </Box>
  );
};

export default DocumentsTab;