import { Button, ButtonProps } from "app/src/components/ui/button";

type Props = {
  label: string;
} & ButtonProps

const TenButton = ({ label, ...props }: Props) => {
  return (
    <Button
      {...props}
    >
      {label}
    </Button>
  )
};

export default TenButton;