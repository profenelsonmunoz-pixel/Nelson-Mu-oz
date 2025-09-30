
import React from 'react';

export interface ContactDetail {
  label?: string;
  value: string;
  href?: string;
}

export interface ContactMethod {
  title: string;
  icon: React.ReactNode;
  details: ContactDetail[];
}

export interface Mechanism {
  title: string;
  description: string;
}
