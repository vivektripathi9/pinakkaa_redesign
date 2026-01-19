# Premium Cinematic Hero Section

## Overview

A high-end, cinematic hero section with full-screen video background, advanced GSAP animations, and premium motion effects.

## Features Implemented

### ✅ Video Background
- Full-screen responsive video (100vh)
- Autoplay, muted, looped
- Object-fit: cover for perfect scaling
- Dark gradient overlay for text readability
- Fallback gradient if video doesn't load

### ✅ Animations & Effects

1. **Video Fade-In**
   - Smooth 1.5s fade-in on page load
   - Ease: power2.out

2. **Staggered Headline Animation**
   - Each word animates individually
   - 3D rotation effect (rotationX)
   - Stagger delay: 0.1s between words
   - Mobile: Simplified fade-in

3. **Subheadline Blur-to-Clear**
   - Starts with 10px blur
   - Fades up while clearing blur
   - Duration: 1.2s

4. **CTA Buttons Slide-Up**
   - Staggered animation (0.15s delay)
   - Smooth slide-up with fade-in
   - Duration: 0.8s per button

5. **Animated Grain/Noise Overlay**
   - Canvas-based animated grain
   - Very subtle (3% opacity)
   - Disabled on mobile for performance
   - Mix-blend-mode: overlay

6. **Light Sweep Effect**
   - Horizontal sweep across headline
   - Repeats every 4 seconds
   - Terminal green glow
   - Disabled on mobile

7. **Parallax on Scroll**
   - Content moves with scroll
   - Opacity fade as you scroll
   - Smooth scrub effect
   - Disabled on mobile

### ✅ Interactions

1. **Primary Button (Get Started)**
   - Glow effect on hover
   - Scale: 1.05
   - Enhanced shadow
   - Smooth transitions

2. **Secondary Button (Discover More)**
   - Outline-to-filled animation
   - Border color intensifies
   - Background fills subtly
   - Smooth transitions

3. **Smooth Scroll**
   - Clicking buttons scrolls to sections
   - Native smooth scroll behavior

### ✅ Performance Optimizations

- **Mobile Detection**: Automatically detects mobile devices
- **Conditional Effects**: Heavy effects disabled on mobile
- **Canvas Optimization**: Grain effect only on desktop
- **Will-Change**: CSS hints for better performance
- **Video Optimization**: Plays inline, muted for autoplay

## Technical Stack

- **GSAP 3.12+**: For all animations
- **ScrollTrigger**: For parallax effects
- **React Hooks**: useEffect for lifecycle management
- **Canvas API**: For grain effect
- **CSS**: For layout and base styles

## File Structure

```
src/sections/hero/
├── Hero.jsx          # Main hero component
└── README.md         # This file

public/videos/
├── hero-background.mp4   # Primary video (add your video here)
├── hero-background.webm  # Fallback video (optional)
└── README.md            # Video setup instructions
```

## Usage

### Adding Your Video

1. Place your video file in `/public/videos/hero-background.mp4`
2. Optionally add WebM version for better compression
3. The component will automatically use the video if available
4. If no video, gradient fallback will show

### Customization

#### Change Headline
Edit the `headline` variable in Hero.jsx:
```jsx
const headline = 'Your Custom Headline Here.'
```

#### Change Subheadline
Edit the paragraph text:
```jsx
<p>Your custom subheadline text</p>
```

#### Adjust Animation Timing
Modify delay values in useEffect hooks:
- Headline delay: `delay: 0.3`
- Subheadline delay: `delay: 0.8`
- Buttons delay: `delay: 1.2`

#### Change Colors
Update Tailwind classes:
- Terminal green: `text-terminal-green`
- Background: `bg-terminal-green`

## Animation Timeline

```
0.0s  - Video starts fading in
0.3s  - Headline words start animating (staggered)
0.8s  - Subheadline blur-to-clear starts
1.2s  - CTA buttons slide up (staggered)
1.5s  - Light sweep effect begins
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (with optimizations)

## Performance Notes

- Grain effect uses requestAnimationFrame for smooth 60fps
- Parallax uses ScrollTrigger with scrub for smooth scrolling
- All animations use GSAP's optimized easing functions
- Mobile devices get simplified animations for better performance

## Troubleshooting

### Video Not Playing
- Check file path: `/public/videos/hero-background.mp4`
- Ensure video is MP4 (H.264) format
- Check browser autoplay policies
- Video must be muted for autoplay

### Animations Not Working
- Ensure GSAP is installed: `npm install gsap`
- Check browser console for errors
- Verify ScrollTrigger is registered

### Performance Issues
- Reduce video file size
- Disable grain effect on slower devices
- Use WebM format for better compression
