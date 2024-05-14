'use client';

import * as z from 'zod';
import Heading from '@/src/components/heading';
import { useForm } from 'react-hook-form';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Empty } from '@/src/components/empty';
import { Loader } from '@/src/components/loader';
import { codeDetails } from '@/src/app/routes';
import { Code } from 'lucide-react';
import toast from 'react-hot-toast';
import { getAiResponse } from '@/src/service/getAiResponse';
import { Threads } from '@/src/components/threads';
import { Message } from '@/src/models/message.model';

const CodePage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = {
        role: 'user',
        content: values.prompt,
      };

      const data = await getAiResponse(values.prompt, '/api/code');

      setMessages((current) => [
        ...current,
        userMessage,
        { role: 'model', content: data },
      ]);
      form.reset();
    } catch (error: any) {
      console.log(error)
      toast.error('Failed to generate response');
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title={codeDetails.label}
        description={codeDetails.description}
        icon={codeDetails.icon}
        iconColor={codeDetails.color}
        bgColor={codeDetails.bgColor}
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-0 focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder={codeDetails.placeholder}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 lg:col-span-2 w-full'
                disabled={isLoading}
              >
                Gerar
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg 2-full flex items-center justify-center bg-muted'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty icon={Code} label={codeDetails.empty} />
          )}
          <Threads messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default CodePage;
