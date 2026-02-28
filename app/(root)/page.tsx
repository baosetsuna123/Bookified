import React from 'react';
import HeroSection from '@/components/HeroSection';
import BookCard from '@/components/BookCard';
import { searchBooks } from '@/lib/actions/book.actions';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { q } = await searchParams;
  const bookResults = await searchBooks(q || '');
  const books = bookResults.success ? (bookResults.data ?? []) : [];

  return (
    <main className="wrapper container">
      <HeroSection />

      <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl md:text-3xl font-bold text-[#212a3b]">
          {q ? 'Search Results' : 'Recent Books'}
        </h2>
      </div>

      {books.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {q ? `No books found for "${q}"` : 'No books available yet.'}
          </p>
        </div>
      ) : (
        <div className="library-books-grid">
          {books.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              author={book.author}
              coverURL={book.coverURL}
              slug={book.slug}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Page;
