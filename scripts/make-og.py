"""Génère public/og.png (1200x630), l'image affichée quand le lien est partagé."""

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PINE = (14, 43, 40)
PINE_MID = (22, 64, 59)
GOLD = (224, 166, 63)
ON_PINE = (233, 238, 233)
ON_PINE_2 = (157, 178, 172)
RULE = (44, 74, 69)

SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SANS_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

img = Image.new("RGB", (W, H), PINE)
d = ImageDraw.Draw(img)

# Dégradé radial discret en haut à droite
for i in range(240, 0, -1):
    t = i / 240
    r = int(PINE[0] + (PINE_MID[0] - PINE[0]) * (1 - t))
    g = int(PINE[1] + (PINE_MID[1] - PINE[1]) * (1 - t))
    b = int(PINE[2] + (PINE_MID[2] - PINE[2]) * (1 - t))
    d.ellipse([1000 - i * 3, -300 - i * 2, 1000 + i * 3, 300 + i * 2], fill=(r, g, b))

f_name = ImageFont.truetype(SANS_B, 30)
f_role = ImageFont.truetype(SANS, 22)
f_big = ImageFont.truetype(SERIF, 60)
f_small = ImageFont.truetype(SANS, 20)
f_label = ImageFont.truetype(SANS_B, 17)

M = 80
d.text((M, 70), "DIKERS AMOKO", font=f_name, fill=ON_PINE)
d.text((M, 112), "Data Scientist senior  ·  MLOps  ·  Product Owner Data & IA",
       font=f_role, fill=ON_PINE_2)
d.line([M, 162, W - M, 162], fill=RULE, width=1)

lines = [
    ("Je cadre le besoin.", 0, ON_PINE),
    ("Je conçois le modèle.", 60, ON_PINE),
    ("Je le mets en production.", 120, GOLD),
]
y = 210
for text, indent, color in lines:
    d.line([M + indent, y + 34, M + indent + 34, y + 34], fill=RULE if color != GOLD else GOLD, width=2)
    d.text((M + indent + 54, y), text, font=f_big, fill=color)
    y += 78

d.line([M, 500, W - M, 500], fill=RULE, width=1)
facts = [
    ("EXPÉRIENCE", "10 ans"),
    ("SECTEURS", "Banque, énergie, stat. publique, SaaS"),
    ("PUBLICATIONS", "2 ouvrages + statAfrikR (CRAN)"),
]
x = M
widths = [180, 460, 400]
for (label, value), w in zip(facts, widths):
    d.text((x, 522), label, font=f_label, fill=GOLD)
    d.text((x, 550), value, font=f_small, fill=ON_PINE)
    x += w

img.save("public/og.png", optimize=True)
print("public/og.png écrit")
