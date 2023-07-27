import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Crypto Mining | Usage Policy',
  description: 'Crypto Mining usage policy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
