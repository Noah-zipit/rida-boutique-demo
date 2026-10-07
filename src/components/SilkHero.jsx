// Adapted from React Bits Silk (DavidHDev/react-bits, MIT) — free copy-paste component.
// Changes: accepts scroll-driven `intensity` (0..1) to raise speed/scale on scroll,
// honors prefers-reduced-motion, renders a static fallback when WebGL is unavailable.
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect, useState, Component } from 'react'
import { Color } from 'three'

const hexToNormalizedRGB = (hex) => {
  hex = hex.replace('#', '')
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ]
}

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;
const float e = 2.71828182845904523536;
float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}
vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}
void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;
  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
  float grain = rnd / 15.0 * uNoiseIntensity;
  vec3 result = uColor * pattern - vec3(grain);
  float fold = smoothstep(0.28, 0.9, pattern);
  float specular = smoothstep(0.72, 0.98, pattern);
  vec3 shadowColor = uColor * 0.72;
  vec3 bodyColor = min(uColor * 1.18, vec3(1.0));
  vec3 lightBase = mix(shadowColor, bodyColor, fold);
  lightBase = mix(lightBase, vec3(1.0), specular * 0.92);
  float fineNoise = noise(gl_FragCoord.xy * 0.63 + vec2(17.0, 41.0));
  float grainSignal = (rnd + fineNoise - 1.0);
  float grainStrength = clamp(uNoiseIntensity * 0.038, 0.0, 0.16);
  result = lightBase + grainSignal * grainStrength;
  gl_FragColor = vec4(clamp(result, 0.0, 1.0), 1.0);
}
`

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree()
  useLayoutEffect(() => {
    if (ref.current) ref.current.scale.set(viewport.width, viewport.height, 1)
  }, [ref, viewport])
  useFrame((_, delta) => {
    if (ref.current) ref.current.material.uniforms.uTime.value += 0.1 * delta
  })
  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  )
})
SilkPlane.displayName = 'SilkPlane'

function SilkInner({ speed, scale, color, noiseIntensity, rotation }) {
  const meshRef = useRef()
  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    []
  )
  useEffect(() => {
    uniforms.uSpeed.value = speed
    uniforms.uScale.value = scale
    uniforms.uNoiseIntensity.value = noiseIntensity
    uniforms.uColor.value.setRGB(...hexToNormalizedRGB(color))
    uniforms.uRotation.value = rotation
  }, [speed, scale, noiseIntensity, color, rotation, uniforms])
  return (
    <Canvas dpr={[1, 2]} frameloop="always" gl={{ antialias: true, alpha: false }}>
      <SilkPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  )
}

export default function SilkHero({ intensity = 0 }) {
  const [failed, setFailed] = useState(false)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || failed) {
    return <div className="silk-fallback" aria-hidden="true" />
  }
  // Scroll intensifies the silk: faster flow, tighter weave.
  const speed = 2.2 + intensity * 9
  const scale = 1.1 + intensity * 1.4
  return (
    <ErrorGuard onFail={() => setFailed(true)}>
      <SilkInner speed={speed} scale={scale} color="#E7D3A8" noiseIntensity={0.9} rotation={0.35} />
    </ErrorGuard>
  )
}

function ErrorGuard({ children, onFail }) {
  return <GuardInner onFail={onFail}>{children}</GuardInner>
}

class GuardInner extends Component {
  constructor(props) { super(props); this.state = { bad: false } }
  static getDerivedStateFromError() { return { bad: true } }
  componentDidCatch() { this.props.onFail() }
  render() { return this.state.bad ? null : this.props.children }
}
