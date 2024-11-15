import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [editedContact, setEditedContact] = useState({});

  const handleOpenEditDialog = (contact) => {
    setCurrentContact(contact);
    setEditedContact(contact);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setCurrentContact(null);
  };

  const handleOpenDeleteDialog = (contact) => {
    setCurrentContact(contact);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setCurrentContact(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = () => {
    onEdit(editedContact);
    handleCloseEditDialog();
  };

  const handleDeleteConfirm = () => {
    onDelete(currentContact._id);
    handleCloseDeleteDialog();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Contact List
      </Typography>
      {/* Responsive Scrollable Container */}
      <Box sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phoneNumber}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenEditDialog(contact)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleOpenDeleteDialog(contact)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Edit Modal */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="firstName"
              label="First Name"
              value={editedContact.firstName || ""}
              onChange={handleEditChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={editedContact.lastName || ""}
              onChange={handleEditChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              name="email"
              label="Email"
              value={editedContact.email || ""}
              onChange={handleEditChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              name="phoneNumber"
              label="Phone Number"
              value={editedContact.phoneNumber || ""}
              onChange={handleEditChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              name="company"
              label="Company"
              value={editedContact.company || ""}
              onChange={handleEditChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              name="jobTitle"
              label="Job Title"
              value={editedContact.jobTitle || ""}
              onChange={handleEditChange}
              fullWidth
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleEditSubmit}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this contact?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} variant="outlined">
            No
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactsTable;
