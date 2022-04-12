import React, { useState } from "react";
import { Review, ReviewDialogProps } from "./review-dialog";

export const useReviewDialog = (props: ReviewDialogProps) => {
  const { review, onClose, open, onSave } = props;

  const [form, setForm] = useState<Review>(review || {});

  const saveReview = () => {
    onSave(form);
  };

  const changeRating = (_e: any, value: number | null) => {
    setForm((prev) => ({
      ...prev,
      rating: value || undefined,
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

  return {
    changeBody,
    changeRating,
    changeTitle,
    form,
    onClose,
    open,
    review,
    saveReview,
  };
};
