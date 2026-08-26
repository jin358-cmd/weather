#!/usr/bin/env python3
"""Generate dusk-navy PWA splash PNGs from icons/icon-512.png."""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "icons" / "splash"
BG = (22, 29, 39)


def round_icon(im, radius_ratio=0.22):
    im = im.convert("RGBA")
    w, h = im.size
    radius = max(8, int(min(w, h) * radius_ratio))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius=radius, fill=255)
    out = im.copy()
    out.putalpha(mask)
    return out


def make_square(rounded, size):
    canvas = Image.new("RGBA", (size, size), BG + (255,))
    ic = rounded.resize((size, size), Image.Resampling.LANCZOS)
    canvas.alpha_composite(ic)
    return canvas.convert("RGB")


def make_splash(rounded, width, height, icon_frac=0.32):
    canvas = Image.new("RGB", (width, height), BG)
    icon_px = max(96, int(min(width, height) * icon_frac))
    ic = rounded.resize((icon_px, icon_px), Image.Resampling.LANCZOS)
    x = (width - icon_px) // 2
    y = int(height * 0.42 - icon_px / 2)
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    layer.paste(ic, (x, y), ic)
    return Image.alpha_composite(canvas.convert("RGBA"), layer).convert("RGB")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    rounded = round_icon(Image.open(ROOT / "icons" / "icon-512.png"))
    for size, name in (
        (1024, "splash-icon-1024.png"),
        (512, "splash-icon-512.png"),
        (192, "splash-icon-192.png"),
        (180, "apple-touch-icon.png"),
    ):
        make_square(rounded, size).save(OUT / name, "PNG", optimize=True)
    for name, w, h in (
        ("splash-750x1334.png", 750, 1334),
        ("splash-828x1792.png", 828, 1792),
        ("splash-1080x1920.png", 1080, 1920),
        ("splash-1125x2436.png", 1125, 2436),
        ("splash-1170x2532.png", 1170, 2532),
        ("splash-1284x2778.png", 1284, 2778),
        ("splash-1290x2796.png", 1290, 2796),
        ("splash-1536x2048.png", 1536, 2048),
        ("splash-2048x2732.png", 2048, 2732),
    ):
        make_splash(rounded, w, h).save(OUT / name, "PNG", optimize=True)


if __name__ == "__main__":
    main()
