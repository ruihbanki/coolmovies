import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Box,
  Rating,
} from "@mui/material";
import React from "react";
import { useReviewDialog } from "./review-dialog.hook";

export interface Review {
  title: string;
  body: string;
  rating: number;
}

export interface ReviewDialogProps {
  open: boolean;
  review?: Review;
  onClose: () => void;
  onSave: (review: Review) => void;
}

const ReviewDialog = (props: ReviewDialogProps) => {
  const {
    changeBody,
    changeRating,
    changeTitle,
    form,
    onClose,
    open,
    saveReview,
  } = useReviewDialog(props);

  return (
    <Dialog open={open} maxWidth="md" fullWidth disableScrollLock>
      <DialogTitle>Review</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Rating size="large" value={form.rating} onChange={changeRating} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="title"
              value={form.title}
              onChange={changeTitle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={10}
              label="Body"
              value={form.body}
              onChange={changeBody}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box display="flex" gap={2} pr={2} pb={2}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={saveReview}>
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewDialog;
