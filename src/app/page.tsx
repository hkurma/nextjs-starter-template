import { Github } from 'lucide-react';
import Link from 'next/link';

import { METADATA } from './constants';

const Index = () => {
  return (
    <div className="h-screen max-w-screen-lg m-auto flex flex-col justify-center items-center text-center gap-4">
      <div className="text-4xl font-bold">{METADATA.TITLE}</div>
      <div className="text-2xl">{METADATA.DESCRIPTION}</div>
      <Link
        href="https://github.com/hkurma/nextjs-starter-template"
        target="_blank"
        className="my-8"
      >
        <Github size={32} />
      </Link>
    </div>
  );
};

export default Index;
