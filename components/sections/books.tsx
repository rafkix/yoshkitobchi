'use client'

import { motion } from 'framer-motion'
import { Star, BookOpen } from 'lucide-react'

export function BooksSection() {
  const books = [
    {
      title: "O‘tkan kunlar",
      author: 'Abdulla Qodiriy',
      rating: 4.9,
      tests: 45,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633431014i/59207757.jpg',
    },
    {
      title: 'Mehrobdan chayon',
      author: 'Abdulla Qodiriy',
      rating: 4.8,
      tests: 38,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628245337i/58762447.jpg',
    },
    {
      title: 'Kichkina shahzoda',
      author: 'Antoine de Saint-Exupéry',
      rating: 4.9,
      tests: 52,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg',
    },
    {
      title: 'Ikki eshik orasi',
      author: 'O‘tkir Hoshimov',
      rating: 4.9,
      tests: 41,
      image:
        'https://kitobxon.com/img_knigi/1962.jpg',
    },
  ]

  return (
    <section
      id="books"
      className="
        relative
        py-24
        md:py-32
        overflow-hidden
        bg-gradient-to-b
        from-[#f8faff]
        to-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-200px]
            left-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            right-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5
              py-2

              rounded-full

              bg-indigo-50
              border
              border-indigo-100

              text-[#4f46e5]
              text-sm
              font-semibold

              mb-6
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            <BookOpen className="w-4 h-4" />
            Tavsiya etilgan asarlar
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl

              text-black

              mb-5
            "
            style={{
              fontFamily: 'var(--font-bebas)',
              letterSpacing: '1px',
            }}
          >
            BADIY ASARLAR
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto

              text-gray-600
              text-lg
              md:text-xl

              leading-relaxed
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            O‘zbek va jahon adabiyotining eng sara asarlari asosida
            tayyorlangan online testlar va kitobxonlik muhitiga qo‘shiling.
          </p>
        </motion.div>

        {/* BOOKS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-8
          "
        >
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                group

                bg-white/90
                backdrop-blur-xl

                rounded-3xl

                border
                border-gray-100

                overflow-hidden

                shadow-lg
                hover:shadow-2xl

                transition-all
                duration-300
              "
            >
              {/* COVER */}
              <div
                className="
                  relative
                  h-[360px]
                  overflow-hidden
                "
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="
                    w-full
                    h-full
                    object-cover

                    group-hover:scale-105

                    transition-transform
                    duration-500
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* TEST BADGE */}
                <div
                  className="
                    absolute
                    top-4
                    right-4

                    px-3
                    py-1.5

                    rounded-full

                    bg-white/90
                    backdrop-blur-md

                    text-[#4f46e5]
                    text-sm
                    font-bold

                    shadow-lg
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {book.tests} test
                </div>

                {/* BOOK INFO ON IMAGE */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3
                    className="
                      text-3xl
                      leading-none
                      mb-2
                    "
                    style={{
                      fontFamily: 'var(--font-bebas)',
                    }}
                  >
                    {book.title}
                  </h3>

                  <p
                    className="
                      text-white/80
                      text-sm
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {book.author}
                  </p>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  {/* RATING */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`
                            w-4
                            h-4
                            ${i < Math.floor(book.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                            }
                          `}
                        />
                      ))}
                    </div>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-gray-700
                      "
                      style={{
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {book.rating}
                    </span>
                  </div>

                  {/* STATUS */}
                  <div
                    className="
                      text-xs
                      font-semibold

                      text-emerald-600
                      bg-emerald-50

                      px-3
                      py-1

                      rounded-full
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    Faol
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}