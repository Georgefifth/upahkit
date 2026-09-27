# UpahKit demo video

## Direction and duration

- Target: 2–3 minutes, per the LexHack project submission requirements.
- Finished runtime: 169.3 seconds (2:49).
- Visual direction: warm editorial slides using UpahKit's paper and forest-green palette.
- Narration: English, en-SG-LunaNeural; subtitles are burned in by demo-recorder.
- Capture: headless Chromium through demo-recorder, with its animated cursor and automatic focus zoom on UI actions.
- Data: fictional sample work only.

## Sequence

1. Hook: the shift ends, but the pay story continues.
2. Problem: platform, chat, bank, and memory hold different pieces.
3. Insight: one job, one transparent record.
4. Live dashboard: agreed, received, outstanding, and user-entered past dates.
5. Explain the calculation and date boundary.
6. Live add: record a fictional event shift and the evidence type.
7. Live update: enter a partial payment and show balances recalculate.
8. Export a portable summary.
9. Privacy boundary, validation plan, and GitHub close.

## Files

- `scenes.js` — full timed narration, captions, and recorded actions.
- `slides.html` — six designed 1920×1080 slides.
- `slides/*.png` — frames used in the video.
- `dashboard.png` and `record-added.png` — captured checkpoints visually reviewed after dry capture.
- Final MP4 is produced locally at `video/UpahKit-demo.mp4`; generated video and intermediate files are excluded from Git.

## Rebuild

From `/home/yap/tools/demo-recorder`, with the project HTTP server running at `127.0.0.1:4173`:

```sh
node record-demo.js /home/yap/Hack/LexHack/video/scenes.js --check
node record-demo.js /home/yap/Hack/LexHack/video/scenes.js --dry --out=/home/yap/Hack/LexHack/video/UpahKit-demo.mp4
node record-demo.js /home/yap/Hack/LexHack/video/scenes.js --voice=en-SG-LunaNeural --out=/home/yap/Hack/LexHack/video/UpahKit-demo.mp4
```
