export type ButtonType = {
  full?: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'half' | 'full';
  variant: 'primary' | 'secondary' | 'ghost' | 'text' | 'positive' | 'negative';
  label?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;
