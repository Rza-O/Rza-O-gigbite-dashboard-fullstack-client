import React from 'react';
import { cn } from '@/lib/utils';
import { IoSend } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

const Button_v5 = ({
   children,
   Icon = <IoSend size="20" />,
   ...rest
}) => {
   return (
      <Button
         {...rest}
         className={cn(
            'relative overflow-hidden border shadow group',
            // light mode
            'border-zinc-300 text-zinc-800 bg-zinc-50',
            // dark mode
            'dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-950',
            rest.className,
         )}
      >
         <span className="absolute inset-0 rounded-sm flex items-center justify-center size-full duration-700 ease-[cubic-bezier(0.50,0.20,0,1)] -translate-x-full group-hover:translate-x-0 bg-primary-light dark:bg-zinc-100 text-primary-content dark:text-zinc-800">
            {Icon}
         </span>
         <span className="absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-out transform group-hover:translate-x-full ">
            {children}
         </span>
         <span className="relative invisible">{children}</span>
      </Button>
   );
};

export default Button_v5;
