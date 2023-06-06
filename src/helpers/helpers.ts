export const getImage = (img: string) =>
  `${import.meta.env.VITE_BASE_URL}${img}`;

export const getRatio = (size: string): number =>
  size
    .split('x')
    .map(parseFloat)
    .reduce((h: number, w: number) => h / w);
