import { motion } from 'framer-motion'

const buttonIcons = {
  'Quero ser mentorada': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'Agendamento': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  'Site': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

const buttonVariants = {
  initial: { y: 40, opacity: 0, scale: 0.9 },
  animate: { y: 0, opacity: 1, scale: 1 }
}

export default function LinkButton({ label, index, href = '#' }) {
  return (
    <motion.a
      href={href}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.7,
        delay: 0.5 + (index * 0.12),
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="link-button text-center flex items-center justify-center gap-3 group"
    >
      <span className="text-rose-gold/70 group-hover:text-rose-gold transition-colors duration-300">
        {buttonIcons[label]}
      </span>
      <span className="relative z-10">{label}</span>
    </motion.a>
  )
}