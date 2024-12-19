import { cn } from "@/이전 파일들/lib/utils";

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn('bg-white-100 rounded-lg p-6', className)}>{children}</div>
);

export default Section;
