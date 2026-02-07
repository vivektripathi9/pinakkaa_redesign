import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils/cn'

const TypewriterEffectSmooth = ({
  words,
  className = undefined,
  cursorClassName = undefined,
}) => {
  const [visibleChars, setVisibleChars] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }))

  const totalChars = wordsArray.reduce((acc, word) => acc + word.text.length + 1, 0)

  useEffect(() => {
    setIsStarted(true)
    // Start typing immediately with faster speed
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= totalChars) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 50) // Faster typing speed (reduced from 100ms to 50ms)

    return () => clearInterval(interval)
  }, [totalChars])

  // Calculate character positions
  const getCharIndex = (wordIdx, charIdx) => {
    let index = 0
    for (let i = 0; i < wordIdx; i++) {
      index += wordsArray[i].text.length + 1 // +1 for space
    }
    return index + charIdx
  }

  return (
    <div
      className={cn(
        'text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isStarted ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0 }}
        className="inline"
      >
        <div className="inline">
          {wordsArray.map((word, wordIdx) => (
            <div key={`word-${wordIdx}`} className="inline-block">
              {word.text.map((char, charIdx) => {
                const currentCharIndex = getCharIndex(wordIdx, charIdx)
                const isVisible = currentCharIndex < visibleChars
                return (
                  <span
                    key={`char-${charIdx}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: 'opacity 0.1s ease-in',
                    }}
                    className={cn(
                      'text-white',
                      word.className
                    )}
                  >
                    {char}
                  </span>
                )
              })}
              &nbsp;
            </div>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10',
          cursorClassName
        )}
      />
    </div>
  )
}

export default TypewriterEffectSmooth
