import { motion } from 'framer-motion'

export default function ProfileHeader() {
  return (
    <motion.header
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="text-center space-y-5"
    >
      <div className="space-y-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-dusty-rose text-xs tracking-[0.3em] uppercase font-light"
        >
          Bem-vinda ao meu universo
        </motion.p>
        
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gradient tracking-wide leading-tight">
          Dra. Carollina Borges
        </h1>
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="ornament-line"
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
        <div className="ornament-dot" />
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="font-sans text-base md:text-lg text-dusty-rose tracking-wider font-light"
      >
        Harmonização Orofacial
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center gap-2 pt-1"
      >
        <span className="text-rose-200 text-lg">✦</span>
        <span className="text-blush text-sm">✦</span>
        <span className="text-rose-200 text-lg">✦</span>
      </motion.div>
    </motion.header>
  )
}