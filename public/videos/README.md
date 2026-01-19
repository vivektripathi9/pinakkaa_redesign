# Hero Video Background Setup

## Video Requirements

To use a video background in the hero section, place your video files in this directory:

- **File name**: `hero-background.mp4` (primary)
- **File name**: `hero-background.webm` (fallback for better compression)

## Video Specifications

### Recommended Settings:
- **Format**: MP4 (H.264) and WebM (VP9)
- **Resolution**: 1920x1080 (Full HD) minimum, 4K preferred
- **Aspect Ratio**: 16:9
- **Frame Rate**: 24-30 fps
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Optimize for web (aim for < 5MB per format)

### Content Guidelines:
- Abstract, tech-focused visuals work best
- Avoid fast-moving or distracting content
- Dark/industrial aesthetic matches the site theme
- Consider particle effects, data visualizations, or abstract tech patterns

## Video Sources

You can find free stock videos at:
- Pexels Videos: https://www.pexels.com/videos/
- Pixabay: https://pixabay.com/videos/
- Coverr: https://coverr.co/

Search terms: "technology", "abstract", "particles", "data", "futuristic"

## Fallback

If no video is provided, the hero section will automatically use a gradient background that matches the site's aesthetic.

## Optimization Tips

1. Use HandBrake or FFmpeg to compress videos
2. Convert to WebM for better compression: `ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 output.webm`
3. Consider using a poster image for faster initial load
