import { motion } from 'framer-motion'
import ProfileAvatar from './components/ProfileAvatar'
import ProfileHeader from './components/ProfileHeader'
import LinkButton from './components/LinkButton'
import SocialIcons from './components/SocialIcons'

const buttons = [
  { label: 'Quero ser mentorada', href: 'https://wa.me/5521981676320?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20mentoria.' },
  { label: 'Agendamento', href: 'https://wa.me/5521981676320?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.' },
  { label: 'Site', href: 'https://site-carollina-borges.vercel.app/' }
]

function App() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      <div className="floating-orb w-72 h-72 bg-blush/30 -top-20 -left-20 animate-drift-slow" />
      <div className="floating-orb w-96 h-96 bg-petal/40 top-1/2 -right-40 animate-drift" />
      <div className="floating-orb w-64 h-64 bg-rose-100/30 -bottom-20 left-1/3 animate-drift-delayed" />
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="glass-container w-full max-w-md px-8 py-12 space-y-10 relative z-10"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center -mt-4"
        >
          <ProfileAvatar />
        </motion.div>

        <ProfileHeader />

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 pt-2"
        >
          {buttons.map((button, index) => (
            <LinkButton
              key={button.label}
              label={button.label}
              href={button.href}
              index={index}
            />
          ))}
        </motion.nav>

        <SocialIcons />

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center pt-2"
        >
          <p className="text-xs text-dusty-rose/50 font-light tracking-wide">
            © 2026 Dra. Carollina Borges
          </p>
        </motion.footer>
      </motion.div>
    </motion.main>
  )
}

export default App