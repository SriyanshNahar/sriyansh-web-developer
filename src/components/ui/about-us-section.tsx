import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Zap } from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export interface AboutService {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  position: "left" | "right"
}

export interface AboutStat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
}

export interface AboutUsSectionProps {
  eyebrow?: string
  heading?: string
  intro?: string
  services: AboutService[]
  imageSrc: string
  imageAlt?: string
  portfolioHref?: string
  portfolioLabel?: string
  stats: AboutStat[]
  ctaHeading?: string
  ctaText?: string
  ctaButtonLabel?: string
  ctaHref?: string
}

export default function AboutUsSection({
  eyebrow = "DISCOVER OUR STORY",
  heading = "About Us",
  intro = "We are a passionate team dedicated to creating beautiful, functional work that inspires and elevates everyday living.",
  services,
  imageSrc,
  imageAlt = "Selected work",
  portfolioHref = "#",
  portfolioLabel = "Our Portfolio",
  stats,
  ctaHeading = "Ready to start your next project?",
  ctaText = "Let's create something beautiful together.",
  ctaButtonLabel = "Get Started",
  ctaHref = "#",
}: AboutUsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 text-[var(--text-primary)] overflow-hidden relative"
    >
      {/* Decorative parallax blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--accent-color)]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[var(--accent-color)]/30"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white/20"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-[var(--accent-color)] font-medium mb-2 flex items-center gap-2 font-mono text-sm tracking-[0.15em] uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            {eyebrow}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">{heading}</h2>
          <motion.div
            className="w-24 h-1 bg-[var(--accent-color)]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-[var(--text-secondary)]" variants={itemVariants}>
          {intro}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  {...service}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-sm" variants={itemVariants}>
              <motion.div
                className="relative rounded-md overflow-hidden shadow-xl aspect-[4/5]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover object-[50%_22%]" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.a
                    href={portfolioHref}
                    className="bg-white text-[#111] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {portfolioLabel} <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-white/15 rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[var(--accent-color)]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-white/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />

              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-color)]"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  {...service}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} delay={index * 0.1} />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-primary)] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">{ctaHeading}</h3>
            <p className="text-[var(--text-secondary)]">{ctaText}</p>
          </div>
          <motion.a
            href={ctaHref}
            className="bg-[var(--accent-color)] hover:opacity-90 text-[#111] px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaButtonLabel} <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps extends AboutService {
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[var(--accent-color)] bg-[var(--accent-color)]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[var(--accent-color)]/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[var(--text-secondary)] leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface StatCounterProps extends AboutStat {
  delay: number
}

function StatCounter({ icon, value, label, suffix = "", delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/[0.03] border border-[var(--border-color)] backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/[0.06] transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-[var(--accent-color)] group-hover:bg-[var(--accent-color)]/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[var(--text-primary)] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[var(--text-secondary)] text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[var(--accent-color)] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}
