import { motion } from 'framer-motion'

export default function ProfileAvatar() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative"
    >
      <div className="relative w-36 h-36 md:w-40 md:h-40">
        <div className="absolute inset-0 rounded-full animate-pulse-glow">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-gold via-blush to-petal p-[4px]">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-100 to-white p-[3px]">
              <img
                src="./image/SaveClip.App_486650809_18496467469033323_4544908881282292195_n.jpg (1).jpeg"
                alt="Dra. Carollina Borges"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-rose-200/20 via-blush/20 to-rose-100/20 blur-2xl animate-drift" />
        <div className="absolute -inset-12 rounded-full bg-gradient-to-tr from-petal/30 to-blush/30 blur-3xl animate-drift-delayed" />
        
        <div className="absolute top-0 right-2 w-3 h-3">
          <div className="w-full h-full rounded-full bg-white/60 animate-sparkle" />
        </div>
        <div className="absolute bottom-4 left-0 w-2 h-2">
          <div className="w-full h-full rounded-full bg-blush/50 animate-sparkle" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </motion.div>
  )
}