import {
  Code,
  LucideIcon,
  MessageSquare,
} from 'lucide-react';

interface ITools {
  label: string;
  icon: LucideIcon;
  href: string;
  color: string;
  bgColor: string;
  description: string;
  empty: string
  placeholder: string;
}

interface IRoutes {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
  bgColor?: string;
}

export const conversationDetails: ITools = {
  label: 'Chatbot',
  icon: MessageSquare,
  href: '/conversation',
  color: 'text-orange-500',
  bgColor: 'bg-orange-500/10',
  description: 'Nosso modelo de conversa',
  empty: 'Nenhuma conversa iniciada',
  placeholder: 'Como calcular o raio de um círculo?'
}

export const codeDetails: ITools = {
  label: 'Gerador de código',
  icon: Code,
  href: '/code',
  color: 'text-green-700',
  bgColor: 'bg-green-700/10',
  description: 'Gere códigos usando um texto descritivo',
  empty: 'Nenhum código gerado',
  placeholder: 'Uma função com JS para definir se o mês tem 31 dias'
}

export const tools: IRoutes[] = [
  { ...conversationDetails },
];

export const routes: IRoutes[] = [
  ...tools
];
