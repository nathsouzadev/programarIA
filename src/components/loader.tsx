import { Brain } from 'lucide-react';

export const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <Brain className='fill-pink-300 relative animate-pulse' size={64}/>
      <p className='text-sm text-muted-foreground'>
        Processando...
      </p>
    </div>
  )
};
