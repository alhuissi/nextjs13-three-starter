'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, Stars } from '@react-three/drei'
import { r3f } from '@/helpers/global'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
      <Stars radius={500} depth={50} count={1000} factor={10} />
    </Canvas>
  )
}