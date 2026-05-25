'use client'

import { motion } from 'framer-motion'
import {
  Trophy,
  Fire,
  Crown,
  Medal,
  ArrowRight,
} from '@phosphor-icons/react'

export function LeaderboardSection() {
  const leaderboardData = [
    {
      rank: 1,
      name: 'Abdulloh M.',
      points: 2450,
      streak: 45,
      tests: 98,
    },
    {
      rank: 2,
      name: 'Shahzod K.',
      points: 2380,
      streak: 42,
      tests: 95,
    },
    {
      rank: 3,
      name: 'Madina A.',
      points: 2190,
      streak: 38,
      tests: 88,
    },
    {
      rank: 4,
      name: 'Diyorbek R.',
      points: 2050,
      streak: 35,
      tests: 82,
    },
    {
      rank: 5,
      name: 'Aziza T.',
      points: 1980,
      streak: 31,
      tests: 79,
    },
  ]

  return (
    <section
      id="leaderboard"
      className="
        relative
        py-24
        md:py-32

        overflow-hidden

        bg-[#fafafa]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-250px]
            right-[-150px]

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
            left-[-150px]

            w-[500px]
            h-[500px]

            rounded-full

            bg-indigo-100/30

            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
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

              border
              border-indigo-100

              bg-white

              text-[#4f46e5]
              text-sm
              font-semibold

              mb-6
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            <Trophy
              size={18}
              weight="duotone"
            />

            Jonli reyting tizimi
          </div>

          <h2
            className="
              text-5xl
              md:text-7xl

              text-black

              leading-none

              mb-5
            "
            style={{
              fontFamily: 'var(--font-bebas)',
              letterSpacing: '1px',
            }}
          >
            TOP
            <br />
            KITOBXONLAR
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
            Eng faol ishtirokchilar va eng yuqori natija
            qayd etgan kitobxonlar reytingi.
          </p>
        </motion.div>

        {/* TOP 3 */}
        <div
          className="
            grid
            md:grid-cols-3

            gap-6

            mb-8
          "
        >
          {leaderboardData.slice(0, 3).map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className={`
                relative

                rounded-[30px]

                border

                bg-white

                p-8

                transition-all

                ${user.rank === 1
                  ? 'border-yellow-200 shadow-xl'
                  : 'border-gray-100 shadow-md'
                }
              `}
            >
              {/* TOP ICON */}
              <div className="flex justify-between items-start mb-8">
                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-indigo-50

                    flex
                    items-center
                    justify-center
                  "
                >
                  {user.rank === 1 ? (
                    <Crown
                      size={28}
                      weight="fill"
                      className="text-yellow-500"
                    />
                  ) : (
                    <MedalIcon rank={user.rank} />
                  )}
                </div>

                <div
                  className="
                    text-sm
                    text-gray-400
                    font-semibold
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  #{user.rank}
                </div>
              </div>

              {/* NAME */}
              <h3
                className="
                  text-3xl

                  text-black

                  mb-2
                "
                style={{
                  fontFamily: 'var(--font-bebas)',
                }}
              >
                {user.name}
              </h3>

              {/* POINTS */}
              <div
                className="
                  text-6xl

                  text-[#4f46e5]

                  leading-none

                  mb-3
                "
                style={{
                  fontFamily: 'var(--font-bebas)',
                }}
              >
                {user.points}
              </div>

              <p
                className="
                  text-gray-500
                  text-sm

                  mb-8
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                umumiy ball
              </p>

              {/* FOOTER */}
              <div
                className="
                  flex
                  items-center
                  justify-between

                  pt-5

                  border-t
                  border-gray-100
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-1

                      text-orange-500

                      font-semibold
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    <Fire
                      size={16}
                      weight="fill"
                    />

                    {user.streak}
                  </div>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    streak
                  </p>
                </div>

                <div className="text-right">
                  <div
                    className="
                      text-lg
                      text-black
                      font-semibold
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {user.tests}
                  </div>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    test
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIST */}
        <div
          className="
            rounded-[30px]

            border
            border-gray-100

            bg-white

            overflow-hidden

            shadow-md
          "
        >
          {leaderboardData.slice(3).map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                flex
                items-center
                justify-between

                px-6
                md:px-8

                py-5

                border-b
                border-gray-100

                last:border-none

                hover:bg-gray-50

                transition-all
              "
            >
              {/* LEFT */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    w-12
                    h-12

                    rounded-2xl

                    bg-indigo-50

                    flex
                    items-center
                    justify-center

                    text-[#4f46e5]
                    font-semibold
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {user.rank}
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      text-black
                      font-semibold
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {user.name}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      text-sm
                      text-gray-500
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    <Fire
                      size={14}
                      weight="fill"
                      className="text-orange-500"
                    />

                    {user.streak} kunlik streak
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <div
                  className="
                    text-4xl

                    text-[#4f46e5]

                    leading-none
                  "
                  style={{
                    fontFamily: 'var(--font-bebas)',
                  }}
                >
                  {user.points}
                </div>

                <p
                  className="
                    text-sm
                    text-gray-500
                    mt-1
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {user.tests} ta test
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://t.me/yoshkitobchibot?start=register"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3

              px-8
              py-4

              rounded-2xl

              bg-[#4f46e5]

              text-white
              text-lg
              font-semibold

              hover:scale-[1.02]

              transition-all
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            Reytingga qo‘shilish

            <ArrowRight size={20} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function MedalIcon({
  rank,
}: {
  rank: number
}) {
  return (
    <Medal
      size={28}
      weight="duotone"
      className={
        rank === 2
          ? 'text-gray-500'
          : 'text-amber-600'
      }
    />
  )
}