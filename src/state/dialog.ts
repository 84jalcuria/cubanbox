import { createGalactic } from 'galactic-state';

export const [useSignUpDialog, toggleSignUpDialog] =
  createGalactic<boolean>(false);

export const [useSignInDialog, toggleSignInDialog] =
  createGalactic<boolean>(false);

export const [useEditProfileDialog, toggleEditProfileDialog] =
  createGalactic<boolean>(false);
