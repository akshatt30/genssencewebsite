/** Design prop `motion` (default true): set to false to turn every animation and auto-play off. */
export const MOTION = true;

/** True when animations should not run: reduced-motion preference or MOTION=false. */
export function isStill(): boolean {
  let reduce = false;
  try {
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    /* no matchMedia */
  }
  return !MOTION || reduce;
}

/** Alternating class name used to restart a CSS animation whenever `tick` changes. */
export const alt = (tick: number, a = 'swapA', b = 'swapB') => (tick % 2 ? a : b);
