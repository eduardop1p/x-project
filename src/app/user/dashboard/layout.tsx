import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Mining | User Dashboard',
  description: 'Crypto Mining Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
