// FIX: Add import for React to use React.ReactNode type.
import React from 'react';

export interface NavLink {
  path: string;
  label: string;
}

export interface CommonSpace {
  name: string;
  description: string;
  icon: React.ReactNode;
}