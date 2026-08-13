#!/usr/bin/env python3
"""Generate Andrasta Marine public technical datasheets."""

from __future__ import annotations

from dataclasses import dataclass
from io import BytesIO
from pathlib import Path
import shutil

from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public" / "datasheets"

pdfmetrics.registerFont(TTFont("AndrastaSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("AndrastaSans-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

PAGE_W, PAGE_H = A4
MARGIN = 34
CONTENT_W = PAGE_W - (MARGIN * 2)

NAVY = HexColor("#071421")
NAVY_2 = HexColor("#10283B")
CYAN = HexColor("#25B7CC")
CYAN_PALE = HexColor("#E2F5F7")
WHITE = HexColor("#FFFFFF")
PAPER = HexColor("#F5F7F8")
ROW_ALT = HexColor("#E9EEF1")
INK = HexColor("#152331")
MID = HexColor("#4C5D69")
LINE = HexColor("#B4C0C8")
LIGHT_LINE = HexColor("#D5DDE2")


@dataclass(frozen=True)
class Datasheet:
    slug: str
    code: str
    name: str
    subtitle: str
    status: str
    image: str
    summary: str
    programme: tuple[tuple[str, str], ...]
    specifications: tuple[tuple[str, str], ...]
    features: tuple[str, ...]
    interfaces: tuple[str, ...]
    applications: tuple[str, ...]
    architecture: tuple[tuple[str, str], ...]


DATASHEETS = (
    Datasheet(
        slug="andrasta-manta-datasheet",
        code="AM-DS-MAN-001",
        name="Manta",
        subtitle="Compact Hydrogen-Electric Development Platform",
        status="Physical development",
        image="manta-wireframe.webp",
        summary=(
            "Manta is a compact, winged autonomous subsea development platform for rapid physical "
            "iteration, subsystem proving and payload integration. The programme closes vehicle, "
            "energy, controls and manufacturing risk before those decisions are carried into "
            "mission-scale systems."
        ),
        programme=(
            ("Programme status", "Physical development"),
            ("Prototype milestone", "First prototype completed Q2 2026"),
            ("Next milestone", "First water trials planned Q4 2026"),
            ("Development role", "Rapid build-test iteration"),
            ("Verification approach", "Incremental component and vehicle testing"),
            ("Scale pathway", "Learning transferred to mission-scale systems"),
        ),
        specifications=(
            ("Overall form", "Approx. 1.8 m winged platform"),
            ("Mass", "60-110 kg configuration range"),
            ("Propulsion", "Twin wing-tip electric propulsion"),
            ("Energy architecture", "Hydrogen-electric hybrid"),
            ("Hydrogen storage", "Conformal, low-pressure metal hydride"),
            ("Payload provision", "Configurable sensor and payload integration"),
            ("Construction", "Fast-turn modular construction"),
            ("Lifecycle intent", "Recoverable, serviceable and reusable"),
        ),
        features=(
            "Nature-informed winged geometry",
            "Direct electric propulsion",
            "Configurable payload integration",
            "Model-based iterative development",
        ),
        interfaces=(
            "Defined payload power and data interfaces",
            "Modular energy and propulsion assemblies",
            "Configurable sensor integration",
            "Service access for repeated development cycles",
        ),
        applications=(
            "Vehicle and control development",
            "Payload and sensor trials",
            "Energy-system integration",
            "Manufacturing and serviceability development",
        ),
        architecture=(
            ("Primary storage", "Low-pressure metal-hydride hydrogen"),
            ("Conversion", "Electrochemical energy conversion"),
            ("Electrical domain", "Managed hybrid battery and power domain"),
            ("Outputs", "Propulsion, control and payload services"),
        ),
    ),
    Datasheet(
        slug="andrasta-andrasound-datasheet",
        code="AM-DS-ASD-001",
        name="AndraSound",
        subtitle="Persistent Mission Platform",
        status="Pre-integration design",
        image="andrasound-wireframe.webp",
        summary=(
            "AndraSound is Andrasta Marine's lead persistent autonomous subsea platform. Its "
            "architecture combines conformal hydride hydrogen storage, electrochemical conversion, "
            "a managed battery power domain, low-signature electric propulsion and configurable "
            "mission interfaces."
        ),
        programme=(
            ("Programme status", "Pre-integration design defined"),
            ("Development", "Research, design and development ongoing"),
            ("System role", "Persistent survey and maritime awareness"),
            ("Configuration", "Mission-configurable architecture"),
            ("Verification approach", "Independent validation pathway"),
            ("Development basis", "Model-based iterative engineering"),
        ),
        specifications=(
            ("Overall length", "Approx. 8.5 m"),
            ("Mass", "1,100-3,000 kg configuration range"),
            ("Depth", "1,000 / 2,500 / 6,500 m configurations"),
            ("Endurance target", ">20 days"),
            ("Energy architecture", "Metal-hydride hydrogen-electric hybrid"),
            ("Energy storage", "Twin conformal O<sub>2</sub> and metal-hydride H<sub>2</sub> pods"),
            ("Propulsion", "Low-signature direct electric"),
            ("Payload provision", "Modular power, data and thermal interfaces"),
        ),
        features=(
            "Energy domains sized by duty cycle",
            "Low moving-part count",
            "Long-life reusable platform intent",
            "Defined autonomy and command interfaces",
        ),
        interfaces=(
            "Payload power, data and thermal services",
            "Specialist autonomy and command integration",
            "Portable replenishment pathway",
            "Configurable sensing and communications",
        ),
        applications=(
            "Environmental and infrastructure survey",
            "Subsea asset observation",
            "Maritime awareness and seabed security",
            "Long-duration sensing and inspection support",
        ),
        architecture=(
            ("Primary storage", "Conformal O<sub>2</sub> and metal-hydride H<sub>2</sub> pods"),
            ("Conversion", "Electrochemical energy conversion"),
            ("Electrical domain", "Managed hybrid battery and power domain"),
            ("Outputs", "Quiet propulsion and configurable mission services"),
        ),
    ),
)


def paragraph(text: str, *, size: float = 8, leading: float = 11, colour=INK, bold: bool = False, alignment: int = TA_LEFT) -> Paragraph:
    return Paragraph(
        text,
        ParagraphStyle(
            "body",
            fontName="AndrastaSans-Bold" if bold else "AndrastaSans",
            fontSize=size,
            leading=leading,
            textColor=colour,
            alignment=alignment,
            spaceBefore=0,
            spaceAfter=0,
        ),
    )


def draw_paragraph(pdf: canvas.Canvas, text: str, x: float, y_top: float, width: float, *, size: float = 8, leading: float = 11, colour=INK, bold: bool = False, alignment: int = TA_LEFT) -> float:
    item = paragraph(text, size=size, leading=leading, colour=colour, bold=bold, alignment=alignment)
    _, item_height = item.wrap(width, PAGE_H)
    item.drawOn(pdf, x, y_top - item_height)
    return item_height


def image_reader(path: Path) -> ImageReader:
    with Image.open(path) as source:
        image = source.convert("RGB")
        buffer = BytesIO()
        image.save(buffer, format="JPEG", quality=95, optimize=True, progressive=True)
    buffer.seek(0)
    return ImageReader(buffer)


def draw_contained_image(pdf: canvas.Canvas, reader: ImageReader, x: float, y: float, width: float, height: float) -> None:
    source_w, source_h = reader.getSize()
    scale = min(width / source_w, height / source_h)
    draw_w = source_w * scale
    draw_h = source_h * scale
    pdf.drawImage(reader, x + ((width - draw_w) / 2), y + ((height - draw_h) / 2), width=draw_w, height=draw_h, preserveAspectRatio=True, mask="auto")


def draw_page_background(pdf: canvas.Canvas) -> None:
    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def draw_header(pdf: canvas.Canvas, sheet: Datasheet, page_number: int) -> None:
    pdf.setFillColor(NAVY)
    pdf.rect(0, 770, PAGE_W, 72, fill=1, stroke=0)
    pdf.drawImage(str(ROOT / "public" / "andrasta-logo.png"), MARGIN, 786, width=174, height=56, preserveAspectRatio=True, mask="auto")
    draw_paragraph(pdf, f"TECHNICAL DATASHEET<br/><b>{sheet.code}</b>", 374, 829, 187, size=6.5, leading=10, colour=WHITE, alignment=TA_RIGHT)
    draw_paragraph(pdf, f"REV A&nbsp;&nbsp;|&nbsp;&nbsp;AUGUST 2026&nbsp;&nbsp;|&nbsp;&nbsp;PAGE {page_number} OF 2", 335, 794, 226, size=5.8, leading=8, colour=HexColor("#B9CAD4"), bold=True, alignment=TA_RIGHT)
    pdf.setFillColor(CYAN_PALE)
    pdf.rect(0, 754, PAGE_W, 16, fill=1, stroke=0)
    draw_paragraph(pdf, "UNCONTROLLED PUBLIC RELEASE", MARGIN, 766, CONTENT_W, size=6.6, leading=8, colour=NAVY_2, bold=True, alignment=TA_CENTER)


def draw_footer(pdf: canvas.Canvas, sheet: Datasheet, page_number: int) -> None:
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.55)
    pdf.line(MARGIN, 56, PAGE_W - MARGIN, 56)
    draw_paragraph(pdf, "UNCONTROLLED PUBLIC RELEASE", MARGIN, 46, 170, size=5.5, leading=7, colour=NAVY_2, bold=True)
    draw_paragraph(pdf, "ANDRASTA MARINE LTD&nbsp;&nbsp;|&nbsp;&nbsp;SC887793&nbsp;&nbsp;|&nbsp;&nbsp;EDINBURGH, SCOTLAND", 190, 46, 268, size=5.2, leading=7, colour=MID, bold=True, alignment=TA_CENTER)
    draw_paragraph(pdf, f"ANDRASTAMARINE.COM&nbsp;&nbsp;|&nbsp;&nbsp;{sheet.code}&nbsp;&nbsp;|&nbsp;&nbsp;{page_number}/2", 430, 46, 131, size=5.2, leading=7, colour=NAVY_2, bold=True, alignment=TA_RIGHT)


def draw_section_heading(pdf: canvas.Canvas, title: str, x: float, y_top: float, width: float) -> float:
    height = 22
    pdf.setFillColor(NAVY_2)
    pdf.rect(x, y_top - height, width, height, fill=1, stroke=0)
    pdf.setFillColor(CYAN)
    pdf.rect(x, y_top - height, 4, height, fill=1, stroke=0)
    draw_paragraph(pdf, title.upper(), x + 12, y_top - 6, width - 20, size=7, leading=9, colour=WHITE, bold=True)
    return y_top - height


def measure_row(key: str, value: str, label_width: float, value_width: float, *, size: float, leading: float, padding: float) -> float:
    label = paragraph(key, size=size, leading=leading, colour=NAVY_2, bold=True)
    value_item = paragraph(value, size=size, leading=leading, colour=INK)
    _, label_h = label.wrap(label_width - (padding * 2), PAGE_H)
    _, value_h = value_item.wrap(value_width - (padding * 2), PAGE_H)
    return max(26, label_h + (padding * 2), value_h + (padding * 2))


def draw_kv_table(pdf: canvas.Canvas, rows: tuple[tuple[str, str], ...], x: float, y_top: float, width: float, *, label_width: float, size: float = 7.3, leading: float = 10, padding: float = 8, bottom_limit: float | None = None) -> float:
    value_width = width - label_width
    y = y_top
    for index, (key, value) in enumerate(rows):
        row_height = measure_row(key, value, label_width, value_width, size=size, leading=leading, padding=padding)
        if bottom_limit is not None and y - row_height < bottom_limit:
            raise ValueError(f"Table '{key}' exceeds its allocated page region")
        pdf.setFillColor(WHITE if index % 2 == 0 else ROW_ALT)
        pdf.setStrokeColor(LIGHT_LINE)
        pdf.setLineWidth(0.45)
        pdf.rect(x, y - row_height, width, row_height, fill=1, stroke=1)
        pdf.setFillColor(CYAN_PALE)
        pdf.rect(x, y - row_height, label_width, row_height, fill=1, stroke=0)
        pdf.setStrokeColor(LIGHT_LINE)
        pdf.line(x + label_width, y - row_height, x + label_width, y)
        draw_paragraph(pdf, key, x + padding, y - padding, label_width - (padding * 2), size=size, leading=leading, colour=NAVY_2, bold=True)
        draw_paragraph(pdf, value, x + label_width + padding, y - padding, value_width - (padding * 2), size=size, leading=leading, colour=INK)
        y -= row_height
    return y


def draw_bullet_list(pdf: canvas.Canvas, items: tuple[str, ...], x: float, y_top: float, width: float, *, bottom_limit: float, size: float = 7.4, leading: float = 10.4, min_row_height: float = 28) -> float:
    y = y_top
    for index, text in enumerate(items):
        item = paragraph(text, size=size, leading=leading, colour=INK)
        _, item_h = item.wrap(width - 21, PAGE_H)
        row_h = max(min_row_height, item_h + 14)
        if y - row_h < bottom_limit:
            raise ValueError(f"Bullet '{text}' exceeds its allocated page region")
        pdf.setFillColor(WHITE if index % 2 == 0 else ROW_ALT)
        pdf.rect(x, y - row_h, width, row_h, fill=1, stroke=0)
        pdf.setStrokeColor(LIGHT_LINE)
        pdf.line(x, y - row_h, x + width, y - row_h)
        pdf.setFillColor(CYAN)
        pdf.rect(x + 8, y - 17, 4, 4, fill=1, stroke=0)
        item.drawOn(pdf, x + 20, y - 7 - item_h)
        y -= row_h
    return y


def draw_title_block(pdf: canvas.Canvas, sheet: Datasheet, second_page: bool = False) -> None:
    title = f"{sheet.name} | Technical data" if second_page else sheet.name
    pdf.setFillColor(INK)
    pdf.setFont("AndrastaSans-Bold", 25 if second_page else 29)
    pdf.drawString(MARGIN, 712, title)
    if not second_page:
        draw_paragraph(pdf, sheet.subtitle, MARGIN + 1, 690, 330, size=9.5, leading=12, colour=MID)
        pdf.setFillColor(WHITE)
        pdf.setStrokeColor(LINE)
        pdf.setLineWidth(0.6)
        pdf.rect(405, 672, 156, 43, fill=1, stroke=1)
        draw_paragraph(pdf, "PRODUCT STATUS", 414, 704, 138, size=5.5, leading=7, colour=MID, bold=True)
        draw_paragraph(pdf, sheet.status, 414, 688, 138, size=7.4, leading=9.5, colour=NAVY_2, bold=True)


def draw_overview_page(pdf: canvas.Canvas, sheet: Datasheet) -> None:
    draw_page_background(pdf)
    draw_header(pdf, sheet, 1)
    draw_title_block(pdf, sheet)
    image_x, image_y, image_w, image_h = MARGIN, 414, 330, 220
    pdf.setFillColor(WHITE)
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.7)
    pdf.rect(image_x, image_y, image_w, image_h, fill=1, stroke=1)
    draw_contained_image(pdf, image_reader(ROOT / "public" / sheet.image), image_x, image_y, image_w, image_h)
    pdf.setStrokeColor(CYAN)
    pdf.setLineWidth(2)
    pdf.line(image_x, image_y, image_x + image_w, image_y)
    overview_x = 381
    overview_w = PAGE_W - MARGIN - overview_x
    y = draw_section_heading(pdf, "Product overview", overview_x, 634, overview_w)
    used = draw_paragraph(pdf, sheet.summary, overview_x + 11, y - 14, overview_w - 22, size=8, leading=12, colour=INK)
    status_y = y - 14 - used - 23
    pdf.setStrokeColor(LIGHT_LINE)
    pdf.line(overview_x + 11, status_y + 12, overview_x + overview_w - 11, status_y + 12)
    draw_paragraph(pdf, "DEVELOPMENT STAGE", overview_x + 11, status_y, overview_w - 22, size=5.8, leading=8, colour=CYAN, bold=True)
    draw_paragraph(pdf, sheet.status, overview_x + 11, status_y - 17, overview_w - 22, size=7.8, leading=10, colour=NAVY_2, bold=True)
    left_x = MARGIN
    gap = 16
    left_w = 238
    right_x = left_x + left_w + gap
    right_w = CONTENT_W - left_w - gap
    y_left = draw_section_heading(pdf, "Key features", left_x, 387, left_w)
    features_bottom = draw_bullet_list(pdf, sheet.features, left_x, y_left, left_w, bottom_limit=123, min_row_height=39)
    pdf.setStrokeColor(LIGHT_LINE)
    pdf.rect(left_x, features_bottom, left_w, y_left - features_bottom, fill=0, stroke=1)
    y_right = draw_section_heading(pdf, "Programme status", right_x, 387, right_w)
    table_bottom = draw_kv_table(pdf, sheet.programme, right_x, y_right, right_w, label_width=102, size=6.7, leading=9.2, padding=7, bottom_limit=123)
    draw_footer(pdf, sheet, 1)
    pdf.showPage()


def draw_architecture_band(pdf: canvas.Canvas, sheet: Datasheet, x: float, y_top: float, width: float) -> float:
    y = draw_section_heading(pdf, "Public architecture view", x, y_top, width)
    gap = 8
    node_w = (width - (gap * 3)) / 4
    node_h = 60
    for index, (key, value) in enumerate(sheet.architecture):
        node_x = x + index * (node_w + gap)
        pdf.setFillColor(WHITE)
        pdf.setStrokeColor(LINE)
        pdf.setLineWidth(0.6)
        pdf.rect(node_x, y - node_h, node_w, node_h, fill=1, stroke=1)
        pdf.setFillColor(CYAN_PALE)
        pdf.rect(node_x, y - 18, node_w, 18, fill=1, stroke=0)
        draw_paragraph(pdf, key.upper(), node_x + 7, y - 6, node_w - 14, size=5.2, leading=7, colour=NAVY_2, bold=True)
        draw_paragraph(pdf, value, node_x + 7, y - 26, node_w - 14, size=6.2, leading=8.2, colour=INK)
        if index < len(sheet.architecture) - 1:
            line_y = y - (node_h / 2)
            pdf.setStrokeColor(CYAN)
            pdf.setLineWidth(1.3)
            pdf.line(node_x + node_w + 1, line_y, node_x + node_w + gap - 2, line_y)
            pdf.line(node_x + node_w + gap - 5, line_y + 2.5, node_x + node_w + gap - 2, line_y)
            pdf.line(node_x + node_w + gap - 5, line_y - 2.5, node_x + node_w + gap - 2, line_y)
    return y - node_h


def draw_contact_band(pdf: canvas.Canvas, x: float, y_top: float, width: float) -> None:
    y = draw_section_heading(pdf, "Technical engagement", x, y_top, width)
    box_h = 44
    pdf.setFillColor(WHITE)
    pdf.setStrokeColor(LIGHT_LINE)
    pdf.rect(x, y - box_h, width, box_h, fill=1, stroke=1)
    draw_paragraph(
        pdf,
        "Independent validation, payload integration, testing, licensing and distribution discussions.",
        x + 10,
        y - 11,
        width - 190,
        size=6.8,
        leading=9,
        colour=INK,
    )
    draw_paragraph(
        pdf,
        "INFO@ANDRASTAMARINE.COM",
        x + width - 176,
        y - 15,
        166,
        size=6.5,
        leading=9,
        colour=NAVY_2,
        bold=True,
        alignment=TA_RIGHT,
    )


def draw_technical_page(pdf: canvas.Canvas, sheet: Datasheet) -> None:
    draw_page_background(pdf)
    draw_header(pdf, sheet, 2)
    draw_title_block(pdf, sheet, second_page=True)
    y = draw_section_heading(pdf, "Technical characteristics", MARGIN, 684, CONTENT_W)
    table_bottom = draw_kv_table(pdf, sheet.specifications, MARGIN, y, CONTENT_W, label_width=148, size=7.5, leading=10, padding=8, bottom_limit=400)
    panels_top = table_bottom - 22
    gap = 16
    panel_w = (CONTENT_W - gap) / 2
    left_x = MARGIN
    right_x = MARGIN + panel_w + gap
    left_y = draw_section_heading(pdf, "System interfaces", left_x, panels_top, panel_w)
    right_y = draw_section_heading(pdf, "Intended applications", right_x, panels_top, panel_w)
    panel_bottom = 260
    interfaces_bottom = draw_bullet_list(pdf, sheet.interfaces, left_x, left_y, panel_w, bottom_limit=panel_bottom, size=7, leading=9.4, min_row_height=33)
    applications_bottom = draw_bullet_list(pdf, sheet.applications, right_x, right_y, panel_w, bottom_limit=panel_bottom, size=7, leading=9.4, min_row_height=33)
    pdf.setStrokeColor(LIGHT_LINE)
    pdf.rect(left_x, interfaces_bottom, panel_w, left_y - interfaces_bottom, fill=0, stroke=1)
    pdf.rect(right_x, applications_bottom, panel_w, right_y - applications_bottom, fill=0, stroke=1)
    architecture_bottom = draw_architecture_band(pdf, sheet, MARGIN, min(interfaces_bottom, applications_bottom) - 22, CONTENT_W)
    draw_contact_band(pdf, MARGIN, architecture_bottom - 20, CONTENT_W)
    draw_footer(pdf, sheet, 2)
    pdf.showPage()


def draw_datasheet(sheet: Datasheet, destination: Path) -> None:
    pdf = canvas.Canvas(str(destination), pagesize=A4, pageCompression=1)
    pdf.setTitle(f"{sheet.name} Technical Datasheet | Andrasta Marine")
    pdf.setAuthor("Andrasta Marine")
    pdf.setSubject(sheet.subtitle)
    pdf.setCreator("Andrasta Marine")
    draw_overview_page(pdf, sheet)
    draw_technical_page(pdf, sheet)
    pdf.save()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    for sheet in DATASHEETS:
        output = OUTPUT_DIR / f"{sheet.slug}.pdf"
        public = PUBLIC_DIR / f"{sheet.slug}.pdf"
        draw_datasheet(sheet, output)
        shutil.copy2(output, public)
        print(f"Generated {output.relative_to(ROOT)}")
        print(f"Synced {public.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
