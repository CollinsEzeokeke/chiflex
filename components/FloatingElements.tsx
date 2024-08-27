'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode
  yOffset?: number
  xOffset?: number
  scale?: number
  rotate?: number
}

export const FloatingElementY: React.FC<FloatingElementProps> = ({ 
  children, 
  yOffset = 100, 
  scale = 1.1, 
  rotate = 0 
}) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -yOffset])
  const scaleValue = useTransform(scrollY, [0, 500], [1, scale])
  const rotateValue = useTransform(scrollY, [0, 500], [0, rotate])
  const opacity = useTransform(scrollY, [0, 250, 500], [0.5, 1, 0.5])

  return (
    <motion.div
      style={{
        y,
        scale: scaleValue,
        rotate: rotateValue,
        opacity,
      }}
    >
      {children}
    </motion.div>
  )
}


export const FloatingElementX: React.FC<FloatingElementProps> = ({ 
  children, 
  xOffset = 100, 
  scale = 1.1, 
  rotate = 0 
}) => {
  const { scrollX } = useScroll()
  const x = useTransform(scrollX, [0, 500], [0, -xOffset])
  const scaleValue = useTransform(scrollX, [0, 500], [1, scale])
  const rotateValue = useTransform(scrollX, [0, 500], [0, rotate])
  const opacity = useTransform(scrollX, [0, 250, 500], [0.5, 1, 0.5])

  return (
    <motion.div
      style={{
        x,
        scale: scaleValue,
        rotate: rotateValue,
        opacity,
      }}
    >
      {children}
    </motion.div>
  )
}