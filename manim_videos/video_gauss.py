from manim import *

FONT = "Arial"


def make_aug_matrix(data, font_size=28):
    rows = len(data)
    cols = len(data[0])

    entries = VGroup()
    cell_w = 0.95
    cell_h = 0.8

    for r in range(rows):
        for c in range(cols):
            txt = Text(str(data[r][c]), font=FONT, font_size=font_size, color=WHITE)
            txt.move_to([c * cell_w, -r * cell_h, 0])
            entries.add(txt)

    entries.move_to(ORIGIN)

    left = min(m.get_left()[0] for m in entries) - 0.38
    right = max(m.get_right()[0] for m in entries) + 0.38
    top = max(m.get_top()[1] for m in entries) + 0.22
    bottom = min(m.get_bottom()[1] for m in entries) - 0.22

    sep_x = (entries[1].get_center()[0] + entries[2].get_center()[0]) / 2
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

    matrix_group = VGroup(entries, sep, left_bracket, right_bracket)
    return matrix_group


class VideoGauss(Scene):
    def construct(self):
        self.camera.background_color = "#020617"

        # =========================
        # 1. MO DAU
        # =========================
        title = Text(
            "phương pháp khử Gauss",
            font=FONT,
            font_size=36,
            color=WHITE
        ).to_edge(UP)

        subtitle = Text(
            "và ma trận mở rộng",
            font=FONT,
            font_size=28,
            color=BLUE_B
        ).next_to(title, DOWN, buff=0.2)

        intro = Text(
            "chuyển hệ phương trình thành ma trận\nvà biến đổi hàng để tìm nghiệm.",
            font=FONT,
            font_size=24,
            color=GREY_A,
            line_spacing=0.8
        ).move_to(ORIGIN)

        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=DOWN))
        self.play(FadeIn(intro, shift=UP))
        self.wait(1.5)
        self.play(FadeOut(title), FadeOut(subtitle), FadeOut(intro))
        self.wait(0.3)

        # =========================
        # 2. HE PHUONG TRINH + MA TRAN BAN DAU
        # =========================
        section_title = Text(
            "hệ ban đầu",
            font=FONT,
            font_size=34,
            color=YELLOW
        ).to_edge(UP)

        eq1 = Text("x + 2y = 4", font=FONT, font_size=28, color=WHITE)
        eq2 = Text("2x + y = 5", font=FONT, font_size=28, color=WHITE)

        eq_group = VGroup(eq1, eq2)
        eq_group.arrange(DOWN, aligned_edge=LEFT, buff=0.25)
        eq_group.shift(RIGHT * 3.1 + UP * 1.3)

        note = Text(
            "ta viết hệ này thành ma trận mở rộng.",
            font=FONT,
            font_size=22,
            color=GREY_A
        )
        note.next_to(eq_group, DOWN, aligned_edge=LEFT, buff=0.35)

        mat0 = make_aug_matrix([[1, 2, 4], [2, 1, 5]], font_size=28)
        mat0.shift(LEFT * 3.5 + DOWN * 0.2)

        mat_label = Text(
            "Ma trận mở rộng",
            font=FONT,
            font_size=24,
            color=BLUE_B
        )
        mat_label.next_to(mat0, UP, buff=0.4)

        self.play(Write(section_title))
        self.play(FadeIn(eq_group, shift=RIGHT))
        self.play(FadeIn(note, shift=RIGHT))
        self.play(FadeIn(mat_label, shift=UP), Create(mat0))
        self.wait(1.5)

        # Xoa mo ta ban dau ben phai, GIU MA TRAN BEN TRAI
        self.play(FadeOut(section_title), FadeOut(eq_group), FadeOut(note))
        self.wait(0.3)

        # =========================
        # 3. CAC BUOC KHU GAUSS
        # =========================
        algebra_title = Text(
            "Các bước khử Gauss",
            font=FONT,
            font_size=32,
            color=YELLOW
        )
        algebra_title.shift(RIGHT * 3.0 + UP * 2.35)

        self.play(Write(algebra_title))

        step1 = Text("1. R2 <- R2 - 2R1", font=FONT, font_size=22, color=WHITE)
        step1.shift(RIGHT * 3.0 + UP * 1.7).align_to(algebra_title, LEFT)

        self.play(FadeIn(step1, shift=RIGHT))
        self.wait(0.3)

        mat1 = make_aug_matrix([[1, 2, 4], [0, -3, -3]], font_size=28)
        mat1.move_to(mat0.get_center())
        self.play(ReplacementTransform(mat0, mat1))
        mat0 = mat1
        self.wait(0.6)

        step2 = Text("2. R2 <- (-1/3)R2", font=FONT, font_size=22, color=WHITE)
        step2.next_to(step1, DOWN, aligned_edge=LEFT, buff=0.18)

        self.play(FadeIn(step2, shift=RIGHT))
        self.wait(0.3)

        mat2 = make_aug_matrix([[1, 2, 4], [0, 1, 1]], font_size=28)
        mat2.move_to(mat0.get_center())
        self.play(ReplacementTransform(mat0, mat2))
        mat0 = mat2
        self.wait(0.6)

        step3 = Text("3. R1 <- R1 - 2R2", font=FONT, font_size=22, color=WHITE)
        step3.next_to(step2, DOWN, aligned_edge=LEFT, buff=0.18)

        self.play(FadeIn(step3, shift=RIGHT))
        self.wait(0.3)

        mat3 = make_aug_matrix([[1, 0, 2], [0, 1, 1]], font_size=28)
        mat3.move_to(mat0.get_center())
        self.play(ReplacementTransform(mat0, mat3))
        mat0 = mat3
        self.wait(0.6)

        step4 = Text("4. đọc nghiệm cuối từ ma trận", font=FONT, font_size=22, color=WHITE)
        step4.next_to(step3, DOWN, aligned_edge=LEFT, buff=0.18)

        step5 = Text("5. x = 2, y = 1", font=FONT, font_size=22, color=GREEN)
        step5.next_to(step4, DOWN, aligned_edge=LEFT, buff=0.18)

        self.play(FadeIn(step4, shift=RIGHT))
        self.play(FadeIn(step5, shift=RIGHT))
        self.wait(1)

        # =========================
        # 4. KET LUAN - KHONG XOA LOI GIAI
        # =========================
        final_box = RoundedRectangle(
            width=5.8,
            height=1.0,
            corner_radius=0.22,
            color=GREEN
        )
        final_box.next_to(step5, DOWN, buff=0.35)
        final_box.align_to(step1, LEFT)

        final_text = Text(
            "Kết luận: nghiệm là (2, 1)",
            font=FONT,
            font_size=21,
            color=GREEN
        )
        final_text.move_to(final_box.get_center())

        meaning = Text(
            "sau khư Gauss, ta tìm được nghiệm duy nhất.",
            font=FONT,
            font_size=18,
            color=GREY_A
        )
        meaning.next_to(final_box, DOWN, buff=0.18)
        meaning.align_to(final_box, LEFT)

        self.play(Create(final_box), Write(final_text))
        self.play(FadeIn(meaning, shift=UP))

        self.wait(4)