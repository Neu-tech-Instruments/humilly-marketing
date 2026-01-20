// Import React to ensure the React namespace is available for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PinItem {
  id: string;
  imageUrl: string;
  title: string;
  size: 'short' | 'medium' | 'tall';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}
