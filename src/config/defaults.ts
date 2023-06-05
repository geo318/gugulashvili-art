export const uploadInputDefaultValues = {
  year: new Date().getFullYear(),
  size: '29.5" x 41.5"',
  description: 'Watercolor on paper',
};

export const protectedRoutes = ['upload', 'update', 'delete'] as const;
