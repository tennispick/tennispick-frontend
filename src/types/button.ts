export type ButtonType = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant: 'primary' | 'secondary' | 'ghost' | 'text' | 'positive' | 'negative';
  label?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;
