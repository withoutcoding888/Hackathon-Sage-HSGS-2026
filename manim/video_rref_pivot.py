from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#07111f"

FONT = "Arial"


class RREFPivotVideo(Scene):
    def t(self, content, size=32, color=WHITE, max_width=None, weight="NORMAL"):
        text = Text(
            str(content),
            font=FONT,
            font_size=size,
            color=color,
            weight=weight,
        )

        if max_width and text.width > max_width:
            text.scale_to_fit_width(max_width)

        return text

    def title(self, content):
        title = self.t(content, size=46, color="#F8FAFC", max_width=12.5, weight="BOLD")
        title.to_edge(UP, buff=0.35)
        return title

    def box(self, content, width=5.2, color="#1E293B", text_color=WHITE, size=28):
        label = self.t(content, size=size, color=text_color, max_width=width - 0.5, weight="BOLD")

        rect = RoundedRectangle(
            width=max(width, label.width + 0.7),
            height=label.height + 0.45,
            corner_radius=0.18,
            stroke_color=color,
            stroke_width=2,
            fill_color=color,
            fill_opacity=0.86,
        )

        label.move_to(rect.get_center())
        return VGroup(rect, label)

    def make_background(self):
        grid = VGroup()

        for x in range(-8, 9):
            line = Line(
                start=[x, -4.5, 0],
                end=[x, 4.5, 0],
                color="#1E293B",
                stroke_width=1,
            )
            line.set_opacity(0.42)
            grid.add(line)

        for y in range(-5, 6):
            line = Line(
                start=[-8, y, 0],
                end=[8, y, 0],
                color="#1E293B",
                stroke_width=1,
            )
            line.set_opacity(0.42)
            grid.add(line)

        glow1 = Circle(radius=1.45, stroke_width=0, fill_color="#2563EB", fill_opacity=0.13)
        glow2 = Circle(radius=1.25, stroke_width=0, fill_color="#7C3AED", fill_opacity=0.13)
        glow3 = Circle(radius=1.10, stroke_width=0, fill_color="#22C55E", fill_opacity=0.10)
        glow4 = Circle(radius=0.95, stroke_width=0, fill_color="#F59E0B", fill_opacity=0.10)

        glow1.move_to(LEFT * 5.8 + UP * 2.8)
        glow2.move_to(RIGHT * 5.5 + UP * 2.5)
        glow3.move_to(LEFT * 4.9 + DOWN * 2.9)
        glow4.move_to(RIGHT * 5.7 + DOWN * 2.8)

        return VGroup(grid, glow1, glow2, glow3, glow4)

    def move_background(self, bg, run_time=2):
        self.play(
            bg[1].animate.shift(RIGHT * 0.35 + DOWN * 0.08),
            bg[2].animate.shift(LEFT * 0.35 + DOWN * 0.06),
            bg[3].animate.shift(RIGHT * 0.22 + UP * 0.08),
            bg[4].animate.shift(LEFT * 0.22 + UP * 0.06),
            run_time=run_time,
            rate_func=there_and_back,
        )

    def clear_scene(self, bg):
        keep = [bg]
        remove = [mob for mob in self.mobjects if mob not in keep]
        self.play(*[FadeOut(mob) for mob in remove], run_time=0.55)

    def matrix(self, rows, divider_after=None, font_size=30, color="#F8FAFC"):
        row_groups = VGroup()
        cells = VGroup()

        cell_w = 0.82
        cell_h = 0.66

        n_rows = len(rows)
        n_cols = max(len(row) for row in rows)

        for i, row in enumerate(rows):
            row_group = VGroup()

            for j, value in enumerate(row):
                txt = self.t(value, size=font_size, color=color, weight="BOLD")
                txt.move_to(RIGHT * j * cell_w + DOWN * i * cell_h)
                row_group.add(txt)
                cells.add(txt)

            row_groups.add(row_group)

        cells.move_to(ORIGIN)
        row_groups.move_to(cells.get_center())

        width = (n_cols - 1) * cell_w + 1.05
        height = (n_rows - 1) * cell_h + 0.9

        left_x = -width / 2
        right_x = width / 2
        top_y = height / 2
        bottom_y = -height / 2

        left_bracket = VGroup(
            Line([left_x + 0.18, top_y, 0], [left_x, top_y, 0], color=color, stroke_width=4),
            Line([left_x, top_y, 0], [left_x, bottom_y, 0], color=color, stroke_width=4),
            Line([left_x, bottom_y, 0], [left_x + 0.18, bottom_y, 0], color=color, stroke_width=4),
        )

        right_bracket = VGroup(
            Line([right_x - 0.18, top_y, 0], [right_x, top_y, 0], color=color, stroke_width=4),
            Line([right_x, top_y, 0], [right_x, bottom_y, 0], color=color, stroke_width=4),
            Line([right_x, bottom_y, 0], [right_x - 0.18, bottom_y, 0], color=color, stroke_width=4),
        )

        group = VGroup(left_bracket, row_groups, right_bracket)

        if divider_after is not None:
            divider_x = left_x + 0.38 + divider_after * cell_w
            divider = Line(
                [divider_x, top_y - 0.05, 0],
                [divider_x, bottom_y + 0.05, 0],
                color="#94A3B8",
                stroke_width=3,
            )
            group.add(divider)
            group.divider = divider

        group.rows = row_groups
        group.cells = cells

        return group

    def construct(self):
        bg = self.make_background()
        self.add(bg)

        self.scene_intro(bg)
        self.scene_what_is_rref(bg)
        self.scene_pivot(bg)
        self.scene_free_variable(bg)
        self.scene_three_cases(bg)
        self.scene_example(bg)
        self.scene_question_map(bg)
        self.scene_summary(bg)

    def scene_intro(self, bg):
        title = self.title("RREF: đọc nghiệm bằng pivot")

        subtitle = self.t(
            "Thay vì đọc cả hệ dài, ta nhìn vào vị trí của các pivot.",
            size=30,
            color="#CBD5E1",
            max_width=11,
            weight="BOLD",
        )
        subtitle.next_to(title, DOWN, buff=0.35)

        m = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            divider_after=3,
            font_size=32,
        )
        m.move_to(ORIGIN + DOWN * 0.15)

        pivot1 = SurroundingRectangle(m.rows[0][0], color="#FACC15", buff=0.13, stroke_width=5)
        pivot2 = SurroundingRectangle(m.rows[1][1], color="#FACC15", buff=0.13, stroke_width=5)

        note = self.box("Pivot cho biết biến nào đã được kiểm soát", width=6.6, color="#713F12", text_color="#FEF3C7")
        note.to_edge(DOWN, buff=0.55)

        self.play(Write(title), FadeIn(subtitle, shift=UP * 0.2))
        self.play(FadeIn(m, scale=0.92))
        self.play(Create(pivot1), Create(pivot2))
        self.play(FadeIn(note, shift=UP * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_what_is_rref(self, bg):
        title = self.title("Một ma trận RREF có 4 dấu hiệu")

        m = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            divider_after=3,
            font_size=31,
        )
        m.shift(LEFT * 3.7 + DOWN * 0.15)

        rule1 = self.box("Hàng 0 nằm dưới cùng", width=4.6, color="#1D4ED8", text_color="#DBEAFE", size=26)
        rule2 = self.box("Pivot là số 1 đầu hàng", width=4.7, color="#166534", text_color="#DCFCE7", size=26)
        rule3 = self.box("Pivot đi dần sang phải", width=4.8, color="#7C3AED", text_color="#E9D5FF", size=26)
        rule4 = self.box("Cột pivot sạch số khác 0", width=5.0, color="#713F12", text_color="#FEF3C7", size=26)

        rules = VGroup(rule1, rule2, rule3, rule4).arrange(DOWN, buff=0.25)
        rules.shift(RIGHT * 3.3 + DOWN * 0.15)

        zero_row = SurroundingRectangle(m.rows[2], color="#38BDF8", buff=0.13, stroke_width=4)
        pivot1 = SurroundingRectangle(m.rows[0][0], color="#FACC15", buff=0.13, stroke_width=5)
        pivot2 = SurroundingRectangle(m.rows[1][1], color="#FACC15", buff=0.13, stroke_width=5)

        self.play(Write(title))
        self.play(FadeIn(m, scale=0.92))
        self.play(FadeIn(rule1, shift=LEFT * 0.2), Create(zero_row))
        self.play(FadeOut(zero_row))
        self.play(FadeIn(rule2, shift=LEFT * 0.2), Create(pivot1), Create(pivot2))
        self.play(FadeIn(rule3, shift=LEFT * 0.2))
        self.play(FadeIn(rule4, shift=LEFT * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_pivot(self, bg):
        title = self.title("Pivot giống như điểm neo của một biến")

        m = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            divider_after=3,
            font_size=32,
        )
        m.move_to(ORIGIN + DOWN * 0.1)

        x_label = self.box("x có pivot", width=2.7, color="#1D4ED8", text_color="#DBEAFE", size=25)
        y_label = self.box("y có pivot", width=2.7, color="#166534", text_color="#DCFCE7", size=25)
        z_label = self.box("z không có pivot", width=3.5, color="#BE123C", text_color="#FFE4E6", size=25)

        labels = VGroup(x_label, y_label, z_label).arrange(RIGHT, buff=0.45)
        labels.to_edge(DOWN, buff=0.65)

        x_col = SurroundingRectangle(VGroup(m.rows[0][0], m.rows[1][0], m.rows[2][0]), color="#1D4ED8", buff=0.15, stroke_width=4)
        y_col = SurroundingRectangle(VGroup(m.rows[0][1], m.rows[1][1], m.rows[2][1]), color="#166534", buff=0.15, stroke_width=4)
        z_col = SurroundingRectangle(VGroup(m.rows[0][2], m.rows[1][2], m.rows[2][2]), color="#BE123C", buff=0.15, stroke_width=4)

        self.play(Write(title))
        self.play(FadeIn(m, scale=0.92))

        self.play(Create(x_col), FadeIn(x_label, shift=UP * 0.2))
        self.play(ReplacementTransform(x_col, y_col), FadeIn(y_label, shift=UP * 0.2))
        self.play(ReplacementTransform(y_col, z_col), FadeIn(z_label, shift=UP * 0.2))

        note = self.t(
            "Biến không có pivot là biến tự do.",
            size=31,
            color="#FEF3C7",
            max_width=9,
            weight="BOLD",
        )
        note.next_to(m, UP, buff=0.45)

        self.play(FadeIn(note, shift=DOWN * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_free_variable(self, bg):
        title = self.title("Biến tự do tạo ra vô số nghiệm")

        m = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            divider_after=3,
            font_size=31,
        )
        m.shift(LEFT * 3.8 + DOWN * 0.1)

        z_box = self.box("Đặt z = t", width=2.6, color="#BE123C", text_color="#FFE4E6", size=29)
        y_box = self.box("y - z = 0  →  y = t", width=4.8, color="#166534", text_color="#DCFCE7", size=29)
        x_box = self.box("x + 2z = 3  →  x = 3 - 2t", width=5.7, color="#1D4ED8", text_color="#DBEAFE", size=29)

        steps = VGroup(z_box, y_box, x_box).arrange(DOWN, buff=0.33)
        steps.shift(RIGHT * 3.15 + DOWN * 0.1)

        final = self.box("t chọn được nhiều giá trị → vô số nghiệm", width=7.0, color="#713F12", text_color="#FEF3C7", size=28)
        final.to_edge(DOWN, buff=0.55)

        z_col = SurroundingRectangle(VGroup(m.rows[0][2], m.rows[1][2], m.rows[2][2]), color="#BE123C", buff=0.15, stroke_width=4)

        self.play(Write(title))
        self.play(FadeIn(m, scale=0.92))
        self.play(Create(z_col), FadeIn(z_box, shift=LEFT * 0.2))
        self.play(FadeIn(y_box, shift=LEFT * 0.2))
        self.play(FadeIn(x_box, shift=LEFT * 0.2))
        self.play(FadeIn(final, shift=UP * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.4)
        self.clear_scene(bg)

    def scene_three_cases(self, bg):
        title = self.title("Ba kết quả khi nhìn RREF")

        self.play(Write(title))

        # =========================
        # CASE 1: NGHIỆM DUY NHẤT
        # =========================
        unique = self.matrix(
            [
                [1, 0, 0, 2],
                [0, 1, 0, 3],
                [0, 0, 1, -1],
            ],
            divider_after=3,
            font_size=31,
        )
        unique.shift(LEFT * 3.6 + DOWN * 0.1)

        p1 = SurroundingRectangle(unique.rows[0][0], color="#FACC15", buff=0.13, stroke_width=5)
        p2 = SurroundingRectangle(unique.rows[1][1], color="#FACC15", buff=0.13, stroke_width=5)
        p3 = SurroundingRectangle(unique.rows[2][2], color="#FACC15", buff=0.13, stroke_width=5)

        u1 = self.box("3 biến", width=2.4, color="#1E293B", text_color="#F8FAFC", size=27)
        u2 = self.box("3 pivot", width=2.6, color="#713F12", text_color="#FEF3C7", size=27)
        u3 = self.box("Đọc thẳng nghiệm", width=3.8, color="#1D4ED8", text_color="#DBEAFE", size=27)
        u4 = self.box("x=2, y=3, z=-1", width=4.4, color="#166534", text_color="#DCFCE7", size=29)

        unique_steps = VGroup(u1, u2, u3, u4).arrange(DOWN, buff=0.28)
        unique_steps.shift(RIGHT * 3.4 + DOWN * 0.1)

        case_label = self.box("Trường hợp 1: nghiệm duy nhất", width=5.4, color="#1D4ED8", text_color="#DBEAFE", size=28)
        case_label.to_edge(DOWN, buff=0.55)

        self.play(FadeIn(case_label, shift=UP * 0.2))
        self.play(FadeIn(unique, scale=0.92))
        self.play(FadeIn(u1, shift=LEFT * 0.2))
        self.play(Create(p1), Create(p2), Create(p3), FadeIn(u2, shift=LEFT * 0.2))
        self.play(FadeIn(u3, shift=LEFT * 0.2))
        self.play(FadeIn(u4, shift=LEFT * 0.2))
        self.move_background(bg, 1.5)
        self.wait(1.0)

        self.play(
            FadeOut(unique),
            FadeOut(p1),
            FadeOut(p2),
            FadeOut(p3),
            FadeOut(unique_steps),
            FadeOut(case_label),
            run_time=0.55,
        )

        # =========================
        # CASE 2: VÔ SỐ NGHIỆM
        # =========================
        free = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            divider_after=3,
            font_size=31,
        )
        free.shift(LEFT * 3.6 + DOWN * 0.1)

        fp1 = SurroundingRectangle(free.rows[0][0], color="#FACC15", buff=0.13, stroke_width=5)
        fp2 = SurroundingRectangle(free.rows[1][1], color="#FACC15", buff=0.13, stroke_width=5)

        z_col = SurroundingRectangle(
            VGroup(free.rows[0][2], free.rows[1][2], free.rows[2][2]),
            color="#BE123C",
            buff=0.16,
            stroke_width=5,
        )

        f1 = self.box("3 biến", width=2.4, color="#1E293B", text_color="#F8FAFC", size=27)
        f2 = self.box("chỉ 2 pivot", width=3.0, color="#713F12", text_color="#FEF3C7", size=27)
        f3 = self.box("z không có pivot", width=3.8, color="#BE123C", text_color="#FFE4E6", size=27)
        f4 = self.box("đặt z = t", width=2.8, color="#7C3AED", text_color="#E9D5FF", size=28)

        free_steps = VGroup(f1, f2, f3, f4).arrange(DOWN, buff=0.28)
        free_steps.shift(RIGHT * 3.4 + UP * 0.4)

        values_title = self.t("t có thể đổi:", size=25, color="#CBD5E1", weight="BOLD")
        v1 = self.box("t = -1", width=2.2, color="#1E293B", text_color="#F8FAFC", size=23)
        v2 = self.box("t = 0", width=2.0, color="#1E293B", text_color="#F8FAFC", size=23)
        v3 = self.box("t = 1", width=2.0, color="#1E293B", text_color="#F8FAFC", size=23)

        values = VGroup(values_title, VGroup(v1, v2, v3).arrange(RIGHT, buff=0.18)).arrange(DOWN, buff=0.18)
        values.shift(RIGHT * 3.4 + DOWN * 2.15)

        case_label = self.box("Trường hợp 2: vô số nghiệm", width=5.0, color="#166534", text_color="#DCFCE7", size=28)
        case_label.to_edge(DOWN, buff=0.55)

        self.play(FadeIn(case_label, shift=UP * 0.2))
        self.play(FadeIn(free, scale=0.92))
        self.play(FadeIn(f1, shift=LEFT * 0.2))
        self.play(Create(fp1), Create(fp2), FadeIn(f2, shift=LEFT * 0.2))
        self.play(Create(z_col), FadeIn(f3, shift=LEFT * 0.2))
        self.play(FadeIn(f4, shift=LEFT * 0.2))
        self.play(FadeIn(values, shift=UP * 0.2))

        highlight_v1 = SurroundingRectangle(v1, color="#FACC15", buff=0.08, stroke_width=4)
        highlight_v2 = SurroundingRectangle(v2, color="#FACC15", buff=0.08, stroke_width=4)
        highlight_v3 = SurroundingRectangle(v3, color="#FACC15", buff=0.08, stroke_width=4)

        result_text = self.box("Mỗi t cho một nghiệm khác nhau", width=5.9, color="#7C3AED", text_color="#E9D5FF", size=26)
        result_text.next_to(values, UP, buff=0.25)

        self.play(Create(highlight_v1))
        self.play(ReplacementTransform(highlight_v1, highlight_v2))
        self.play(ReplacementTransform(highlight_v2, highlight_v3))
        self.play(FadeIn(result_text, shift=DOWN * 0.2))
        self.move_background(bg, 1.5)
        self.wait(1.0)

        self.play(
            FadeOut(free),
            FadeOut(fp1),
            FadeOut(fp2),
            FadeOut(z_col),
            FadeOut(free_steps),
            FadeOut(values),
            FadeOut(highlight_v3),
            FadeOut(result_text),
            FadeOut(case_label),
            run_time=0.55,
        )

        # =========================
        # CASE 3: VÔ NGHIỆM
        # =========================
        none = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 1],
            ],
            divider_after=3,
            font_size=31,
        )
        none.shift(LEFT * 3.6 + DOWN * 0.1)

        bad_row = SurroundingRectangle(none.rows[2], color="#FB7185", buff=0.14, stroke_width=5)

        n1 = self.box("Hàng cuối nói:", width=3.4, color="#1E293B", text_color="#F8FAFC", size=27)
        n2 = self.box("0x + 0y + 0z = 1", width=5.1, color="#BE123C", text_color="#FFE4E6", size=27)
        n3 = self.box("0 = 1", width=2.4, color="#BE123C", text_color="#FFE4E6", size=33)
        n4 = self.box("Điều này không thể xảy ra", width=5.4, color="#713F12", text_color="#FEF3C7", size=27)

        no_steps = VGroup(n1, n2, n3, n4).arrange(DOWN, buff=0.28)
        no_steps.shift(RIGHT * 3.4 + DOWN * 0.1)

        cross1 = Line(n3.get_left() + LEFT * 0.1, n3.get_right() + RIGHT * 0.1, color="#F43F5E", stroke_width=7)
        cross2 = Line(
            n3.get_left() + LEFT * 0.1 + UP * 0.25,
            n3.get_right() + RIGHT * 0.1 + DOWN * 0.25,
            color="#F43F5E",
            stroke_width=7,
        )

        case_label = self.box("Trường hợp 3: vô nghiệm", width=4.6, color="#BE123C", text_color="#FFE4E6", size=28)
        case_label.to_edge(DOWN, buff=0.55)

        self.play(FadeIn(case_label, shift=UP * 0.2))
        self.play(FadeIn(none, scale=0.92))
        self.play(Create(bad_row), FadeIn(n1, shift=LEFT * 0.2))
        self.play(FadeIn(n2, shift=LEFT * 0.2))
        self.play(FadeIn(n3, shift=LEFT * 0.2))
        self.play(Create(cross1), Create(cross2))
        self.play(FadeIn(n4, shift=LEFT * 0.2))
        self.move_background(bg, 1.5)
        self.wait(1.2)

        final = self.box("Có mâu thuẫn → không có nghiệm nào thỏa mãn", width=7.2, color="#BE123C", text_color="#FFE4E6", size=29)
        final.to_edge(DOWN, buff=0.55)

        self.play(ReplacementTransform(case_label, final))
        self.wait(1.2)
        self.clear_scene(bg)
    def scene_example(self, bg):
        title = self.title("Ví dụ: 3 biến, 2 pivot")

        m = self.matrix(
            [
                [1, 0, 2, 3],
                [0, 1, -1, 0],
                [0, 0, 0, 0],
            ],
            divider_after=3,
            font_size=31,
        )
        m.shift(LEFT * 3.45 + DOWN * 0.15)

        p1 = SurroundingRectangle(m.rows[0][0], color="#FACC15", buff=0.13, stroke_width=5)
        p2 = SurroundingRectangle(m.rows[1][1], color="#FACC15", buff=0.13, stroke_width=5)

        z_col = SurroundingRectangle(
            VGroup(m.rows[0][2], m.rows[1][2], m.rows[2][2]),
            color="#BE123C",
            buff=0.15,
            stroke_width=4,
        )

        step1 = self.box("Có 3 biến: x, y, z", width=4.2, color="#1E293B", text_color="#F8FAFC", size=26)
        step2 = self.box("Có 2 pivot", width=3.2, color="#713F12", text_color="#FEF3C7", size=26)
        step3 = self.box("z không có pivot", width=3.8, color="#BE123C", text_color="#FFE4E6", size=26)
        step4 = self.box("z là biến tự do", width=3.6, color="#7C3AED", text_color="#E9D5FF", size=26)

        steps = VGroup(step1, step2, step3, step4).arrange(DOWN, buff=0.32)
        steps.shift(RIGHT * 3.35 + UP * 0.2)

        final = self.box(
            "Kết luận: vô số nghiệm",
            width=4.8,
            color="#166534",
            text_color="#DCFCE7",
            size=29,
        )
        final.to_edge(DOWN, buff=0.65)

        self.play(Write(title))
        self.play(FadeIn(m, scale=0.92))

        self.play(FadeIn(step1, shift=LEFT * 0.2))

        self.play(Create(p1), Create(p2))
        self.play(FadeIn(step2, shift=LEFT * 0.2))

        self.play(Create(z_col))
        self.play(FadeIn(step3, shift=LEFT * 0.2))

        self.play(FadeIn(step4, shift=LEFT * 0.2))
        self.play(FadeIn(final, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.5)
        self.clear_scene(bg)
    def scene_question_map(self, bg):
        title = self.title("Cách dùng video này để làm 10 câu")

        c1 = VGroup(
            self.box("Câu 1–3", width=2.8, color="#1D4ED8", text_color="#DBEAFE", size=27),
            self.t("Nhớ định nghĩa RREF và pivot", size=26, color="#DBEAFE", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.22)

        c2 = VGroup(
            self.box("Câu 4–5", width=2.8, color="#166534", text_color="#DCFCE7", size=27),
            self.t("Đếm biến, đếm pivot, tìm biến tự do", size=26, color="#DCFCE7", max_width=4.0, weight="BOLD"),
        ).arrange(DOWN, buff=0.22)

        c3 = VGroup(
            self.box("Câu 6", width=2.3, color="#BE123C", text_color="#FFE4E6", size=27),
            self.t("Thấy [0,0,0,1] là 0 = 1", size=26, color="#FFE4E6", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.22)

        c4 = VGroup(
            self.box("Câu 7–10", width=3.0, color="#7C3AED", text_color="#E9D5FF", size=27),
            self.t("Đọc nghiệm hoặc kết luận từ RREF", size=26, color="#E9D5FF", max_width=4.0, weight="BOLD"),
        ).arrange(DOWN, buff=0.22)

        cards = VGroup(c1, c2, c3, c4).arrange(RIGHT, buff=0.35)
        cards.move_to(ORIGIN + DOWN * 0.05)

        bottom = self.box("Một câu hỏi luôn bắt đầu bằng: pivot ở đâu?", width=6.8, color="#713F12", text_color="#FEF3C7", size=29)
        bottom.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=UP * 0.2) for card in cards], lag_ratio=0.12))
        self.play(FadeIn(bottom, shift=UP * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.5)
        self.clear_scene(bg)

    def scene_summary(self, bg):
        title = self.title("Tóm tắt cực ngắn")

        s1 = self.box("Pivot = số 1 dẫn đầu của hàng", width=5.6, color="#1D4ED8", text_color="#DBEAFE", size=29)
        s2 = self.box("Biến không có pivot = biến tự do", width=6.0, color="#BE123C", text_color="#FFE4E6", size=29)
        s3 = self.box("[0,0,0,1] nghĩa là 0 = 1 → vô nghiệm", width=7.0, color="#713F12", text_color="#FEF3C7", size=29)
        s4 = self.box("RREF giúp đọc nghiệm nhanh hơn", width=5.6, color="#166534", text_color="#DCFCE7", size=29)

        steps = VGroup(s1, s2, s3, s4).arrange(DOWN, buff=0.33)
        steps.move_to(ORIGIN)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(step, shift=UP * 0.2) for step in steps], lag_ratio=0.13))
        self.move_background(bg, 2.2)
        self.wait(2.4)