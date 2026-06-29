from manim import *

FONT = "Segoe UI"


def make_aug_matrix(data, font_size=28, pivot_cells=None):
    if pivot_cells is None:
        pivot_cells = []

    rows = len(data)
    cols = len(data[0])

    cell_w = 0.85
    cell_h = 0.72

    entries = VGroup()
    highlights = VGroup()

    for r in range(rows):
        for c in range(cols):
            pos = [c * cell_w, -r * cell_h, 0]

            if (r, c) in pivot_cells:
                box = RoundedRectangle(
                    width=0.65,
                    height=0.5,
                    corner_radius=0.08,
                    color=YELLOW,
                    fill_opacity=0.18
                )
                box.move_to(pos)
                highlights.add(box)

            txt = Text(
                str(data[r][c]),
                font=FONT,
                font_size=font_size,
                color=WHITE
            )
            txt.move_to(pos)
            entries.add(txt)

    group = VGroup(highlights, entries)
    group.move_to(ORIGIN)

    left = min(m.get_left()[0] for m in entries) - 0.35
    right = max(m.get_right()[0] for m in entries) + 0.35
    top = max(m.get_top()[1] for m in entries) + 0.25
    bottom = min(m.get_bottom()[1] for m in entries) - 0.25

    sep_x = (entries[2].get_center()[0] + entries[3].get_center()[0]) / 2
    sep = Line([sep_x, top, 0], [sep_x, bottom, 0], color=GREY_B)

    left_bracket = VGroup(
        Line([left + 0.15, top, 0], [left, top, 0], color=WHITE),
        Line([left, top, 0], [left, bottom, 0], color=WHITE),
        Line([left, bottom, 0], [left + 0.15, bottom, 0], color=WHITE),
    )

    right_bracket = VGroup(
        Line([right - 0.15, top, 0], [right, top, 0], color=WHITE),
        Line([right, top, 0], [right, bottom, 0], color=WHITE),
        Line([right, bottom, 0], [right - 0.15, bottom, 0], color=WHITE),
    )

    return VGroup(highlights, entries, sep, left_bracket, right_bracket)


class VideoPivotRank(Scene):
    def construct(self):
        self.camera.background_color = "#020617"

        # =========================
        # 1. MỞ ĐẦU
        # =========================
        title = Text(
            "Các phần tử chốt",
            font=FONT,
            font_size=38,
            color=WHITE
        )
        title.to_edge(UP)

        subtitle = Text(
            "Và tính chất nghiệm của hệ",
            font=FONT,
            font_size=28,
            color=BLUE_B
        )
        subtitle.next_to(title, DOWN, buff=0.25)

        formula = Text(
            "rank(A) và rank([A|b])",
            font=FONT,
            font_size=36,
            color=YELLOW
        )
        formula.move_to(ORIGIN)

        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=DOWN))
        self.play(Write(formula))
        self.wait(1.4)

        self.play(FadeOut(title), FadeOut(subtitle), FadeOut(formula))
        self.wait(0.3)

        # =========================
        # 2. MA TRẬN BÊN TRÁI - GIỮ ĐẾN HẾT VIDEO
        # =========================
        matrix_title = Text(
            "Ma trận RREF",
            font=FONT,
            font_size=30,
            color=YELLOW
        )
        matrix_title.shift(LEFT * 3.45 + UP * 2.0)

        matrix = make_aug_matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            font_size=28,
            pivot_cells=[(0, 0), (1, 1)]
        )
        matrix.shift(LEFT * 3.45 + UP * 0.45)

        label = Text(
            "Cột cuối là vế phải",
            font=FONT,
            font_size=21,
            color=GREY_A
        )
        label.next_to(matrix, DOWN, buff=0.45)

        self.play(Write(matrix_title))
        self.play(Create(matrix))
        self.play(FadeIn(label, shift=UP))
        self.wait(1.0)

        # =========================
        # 3. CHỮ BÊN PHẢI - HIỆN DẦN VÀ GIỮ NGUYÊN
        # =========================
        right_title = Text(
            "Phân tích nghiệm",
            font=FONT,
            font_size=32,
            color=YELLOW
        )
        right_title.shift(RIGHT * 3.05 + UP * 2.35)

        steps = VGroup(
            Text("1. Có 3 biến: x, y, z", font=FONT, font_size=22, color=WHITE),
            Text("2. Có 2 vị trí chốt", font=FONT, font_size=22, color=WHITE),
            Text("3. Cột z không có chốt", font=FONT, font_size=22, color=WHITE),
            Text("4. Vậy z là biến tự do", font=FONT, font_size=22, color=GREEN),
            Text("5. Không có hàng dạng 0 = 1", font=FONT, font_size=22, color=WHITE),
            Text("6. Hệ có nghiệm", font=FONT, font_size=22, color=GREEN),
        )

        steps.arrange(DOWN, aligned_edge=LEFT, buff=0.22)
        steps.next_to(right_title, DOWN, aligned_edge=LEFT, buff=0.35)

        self.play(Write(right_title))

        for step in steps:
            self.play(FadeIn(step, shift=RIGHT), run_time=0.45)
            self.wait(0.15)

        self.wait(0.8)

        # =========================
        # 4. KẾT LUẬN - KHÔNG XÓA LỜI GIẢI
        # =========================
        final_box = RoundedRectangle(
            width=5.6,
            height=1.0,
            corner_radius=0.22,
            color=GREEN
        )
        final_box.next_to(steps, DOWN, buff=0.35)
        final_box.align_to(steps, LEFT)

        final_text = Text(
            "Kết luận: Hệ có vô số nghiệm",
            font=FONT,
            font_size=21,
            color=GREEN
        )
        final_text.move_to(final_box.get_center())

        meaning = Text(
            "Vì hệ có nghiệm và có biến tự do.",
            font=FONT,
            font_size=18,
            color=GREY_A
        )
        meaning.next_to(final_box, DOWN, buff=0.18)
        meaning.align_to(final_box, LEFT)

        self.play(Create(final_box), Write(final_text))
        self.play(FadeIn(meaning, shift=UP))

        self.wait(4)