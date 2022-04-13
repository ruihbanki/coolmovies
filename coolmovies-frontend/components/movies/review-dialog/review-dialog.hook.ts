import React, { useState } from "react";
import { Review, ReviewDialogProps } from "./review-dialog";

const EMPTY_REVIEW = {
  rating: 0,
  title: "",
  body: "",
};

export const useReviewDialog = (props: ReviewDialogProps) => {
  const { review, onClose, open, onSave } = props;

  const [form, setForm] = useState<Review>(review || EMPTY_REVIEW);

  const saveReview = () => {
    onSave(form);
  };

  const changeRating = (_e: any, value: number | null) => {
    setForm((prev) => ({
      ...prev,
      rating: value || 0,
    }));
  };

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };

  const changeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      body: event.target.value,
    }));
  };

  const resetForm = () => {
    setForm(EMPTY_REVIEW);
  };

  return {
    changeBody,
    changeRating,
    changeTitle,
    form,
    onClose,
    open,
    resetForm,
    saveReview,
  };
};
