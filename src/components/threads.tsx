import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';
import { BotAvatar } from './bot-avatar';
import { UserAvatar } from './user-avatar';
import { Message } from '../models/message.model';

interface ThreadsProps {
  messages: Message[];
}

export const Threads = ({ messages }: ThreadsProps) => {
  return (
    <div className='flex flex-col-reverse gap-y-4'>
      {messages.map((message, id) => {
        return (
          <div
            key={id}
            className={cn(
              'p-8 w-full flex items-start gap-x-8 rounded-lg',
              message.role === 'user'
                ? 'bg-white border border-black/10'
                : 'bg-muted',
            )}
          >
            {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
            <ReactMarkdown
              components={{
                pre: ({ ...props }) => (
                  <div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg'>
                    <pre {...props} />
                  </div>
                ),
                code: ({ ...props }) => (
                  <code className='bg-black/10 rounded-lg p-1' {...props} />
                ),
              }}
              className='text-sm overflow-hidden leading-7'
            >
              {message.content}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
};
