import { LucideIcon } from 'lucide-react';

interface EmptyProps {
  icon: LucideIcon;
  label: string;
}

export const Empty = ({ label, icon: Icon }: EmptyProps) => {
  return (
    <div className='h-full -[20 flex flex-col items-center justify-center'>
      <Icon className='relative m-5 text-gray-500' size={148} />
      <p className='text-muted-foreground text-sm text-center'>{label}</p>
    </div>
  );
};
