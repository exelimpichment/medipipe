import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class AuthenticationError extends Error {
  constructor() {
    super('You must be authenticated to do this action');
  }
}

export class ValidationError extends Error {
  constructor() {
    super('Inputted information is not valid');
  }
}
