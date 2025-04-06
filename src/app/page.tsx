'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Highlight = ({ children }: { children: string }) => {
  return <span className="text-[#F2502F] font-semibold">{children}</span>; // Laranja do ícone
};

export default function Home() {
  const appLink =
    'https://github.com/lesimoes/clip-save/releases/download/v2.0.0/clip-save.zip';

  return (
    <main className="bg-white text-black min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
        <div className="text-xl font-bold text-[#F2502F] flex items-center gap-2">
          <Image
            src="/clip-save-logo.png"
            alt="ClipSave logo"
            width={28}
            height={28}
          />
          ClipSave
        </div>
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#F2502F] text-[#F2502F] px-4 py-2 rounded-full text-sm hover:bg-[#F2502F] hover:text-white transition-all"
        >
          Download
        </a>
      </header>

      <section className="h-screen flex flex-col items-center justify-center text-center px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold max-w-4xl leading-tight"
        >
          Save your texts and shortcuts with <Highlight>ClipSave</Highlight>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-600 mt-6 max-w-xl"
        >
          Save text snippets and shortcuts for files or applications on your
          Mac. Simple and easy!
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-6 py-3 border border-[#F2502F] text-[#F2502F] rounded-full text-lg hover:bg-[#F2502F] hover:text-white transition-all"
        >
          ⬇️ Get ClipSave
        </motion.a>
      </section>

      <section className="flex flex-col  items-center justify-between px-6 md:px-12 py-24 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Quick access to <Highlight>texts and web pages</Highlight>
          </h2>
          <p className="text-lg text-gray-600">
            Save texts and copy them to your clipboard. You can save web page
            link and open it.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/screenshot.png"
            alt="Screenshot do ClipSave"
            width={800}
            height={100}
            className="rounded-xl shadow-md w-[300px]"
          />
        </motion.div>
      </section>

      <section className="flex flex-col  items-center justify-between px-6 md:px-12 py-24 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Quick access to <Highlight>files and applications</Highlight>
          </h2>
          <p className="text-lg text-gray-600">
            Create shortcuts to apps or files and open their folders directly.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/screenshot2.png"
            alt="Screenshot do ClipSave"
            width={800}
            height={100}
            className="rounded-xl shadow-md w-[300px]"
          />
        </motion.div>
      </section>

      <section className="flex flex-col items-center justify-between px-6 md:px-12 py-24 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Free and open source <Highlight>Mac App</Highlight>.
          </h2>
          <p className="text-lg text-gray-600">
            Minimum requirements: <Highlight>Mac OS Monterey</Highlight>
          </p>
          <br />
          <br />
          <p className="text-lg text-gray-600">
            Created by{' '}
            <Link
              href="https://www.github.com/lesimoes"
              className="cursor-pointer"
            >
              <Highlight>lesimoes</Highlight>
            </Link>{' '}
            with ❤️ and ☕
          </p>
        </motion.div>
      </section>
    </main>
  );
}
