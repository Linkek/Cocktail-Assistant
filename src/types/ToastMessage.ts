/**
 * Toast message interface for user notifications
 * Author: Linus Karlsson
 */

import { ToastType } from './enums.js';

export interface ToastMessage {
  type: ToastType;
  message: string;
}
