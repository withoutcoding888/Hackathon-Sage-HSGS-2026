from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#07111f"

FONT = "Arial"


class GaussAugmentedPro(Scene):
    def t(self, text, size=32, color=WHITE, max_width=None, weight="NORMAL"):
        obj = Text(
            str(text),
            font=FONT,
            font_size=size,
            color=color,
            weight=weight,
        )

        if max_width and obj.width > max_width:
            obj.scale_to_fit_width(max_width)

        return obj

    def title(self, text):
        obj = self.t(text, size=48, color="#F8FAFC", max_width=12.5, weight="BOLD")
        obj.to_edge(UP, buff=0.35)
        return obj

    def small_note(self, text):
        return self.t(text, size=25, color="#CBD5E1", max_width=10.5)

    def glass_box(self, text, width=5.5, color="#1E293B", text_color=WHITE, size=28):
        label = self.t(text, size=size, color=text_color, max_width=width - 0.45, weight="BOLD")
        box = RoundedRectangle(
            width=max(width, label.width + 0.7),
            height=label.height + 0.45,
            corner_radius=0.18,
            stroke_color=color,
            stroke_width=2,
            fill_color=color,
            fill_opacity=0.82,
        )
        label.move_to(box.get_center())
        return VGroup(box, label)

    def make_background(self):
        grid = VGroup()

        for x in range(-8, 9):
            line = Line(
                start=np.array([x, -4.5, 0]),
                end=np.array([x, 4.5, 0]),
                color="#1E293B",
                stroke_width=1,
            )
            line.set_opacity(0.45)
            grid.add(line)

        for y in range(-5, 6):
            line = Line(
                start=np.array([-8, y, 0]),
                end=np.array([8, y, 0]),
                color="#1E293B",
                stroke_width=1,
            )
            line.set_opacity(0.45)
            grid.add(line)

        glow1 = Circle(
            radius=1.45,
            stroke_width=0,
            fill_color="#2563EB",
            fill_opacity=0.14,
        ).move_to(LEFT * 5.8 + UP * 2.8)

        glow2 = Circle(
            radius=1.25,
            stroke_width=0,
            fill_color="#7C3AED",
            fill_opacity=0.14,
        ).move_to(RIGHT * 5.5 + UP * 2.5)

        glow3 = Circle(
            radius=1.15,
            stroke_width=0,
            fill_color="#22C55E",
            fill_opacity=0.10,
        ).move_to(LEFT * 4.9 + DOWN * 2.9)

        glow4 = Circle(
            radius=0.95,
            stroke_width=0,
            fill_color="#F59E0B",
            fill_opacity=0.10,
        ).move_to(RIGHT * 5.7 + DOWN * 2.8)

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
        objs = [m for m in self.mobjects if m is not bg]
        self.play(*[FadeOut(m) for m in objs], run_time=0.55)

    def matrix(self, rows, divider_after=None, font_size=31, color="#F8FAFC"):
        cells = VGroup()
        row_groups = VGroup()

        cell_w = 0.82
        cell_h = 0.66

        n_rows = len(rows)
        n_cols = max(len(row) for row in rows)

        for i, row in enumerate(rows):
            row_group = VGroup()

            for j, value in enumerate(row):
                value_text = self.t(value, size=font_size, color=color, weight="BOLD")
                value_text.move_to(RIGHT * j * cell_w + DOWN * i * cell_h)
                row_group.add(value_text)
                cells.add(value_text)

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

        self.scene_1_hook(bg)
        self.scene_2_matrix_meaning(bg)
        self.scene_3_row_ops(bg)
        self.scene_4_pivot_action(bg)
        self.scene_5_read_solution(bg)
        self.scene_6_graph_meaning(bg)
        self.scene_7_exercise_map(bg)
        self.scene_8_summary(bg)

    def scene_1_hook(self, bg):
        title = self.title("Khử Gauss không phải là học thuộc")
        subtitle = self.small_note("Nó là cách biến một hệ rối thành dạng dễ nhìn nghiệm.")
        subtitle.next_to(title, DOWN, buff=0.35)

        left_eq = VGroup(
            self.glass_box("x + 2y = 4", width=3.5, color="#0C4A6E", text_color="#E0F2FE"),
            self.glass_box("2x + y = 5", width=3.5, color="#14532D", text_color="#DCFCE7"),
        ).arrange(DOWN, buff=0.35)
        left_eq.shift(LEFT * 4.0 + DOWN * 0.25)

        arrow = Arrow(
            LEFT * 1.4,
            RIGHT * 1.2,
            color="#F8FAFC",
            stroke_width=6,
            buff=0.1,
        )

        result = self.glass_box("x = 2,  y = 1", width=4.0, color="#713F12", text_color="#FEF3C7", size=31)
        result.shift(RIGHT * 3.7 + DOWN * 0.25)

        tag = self.glass_box("Ý tưởng: biến đổi nhưng không đổi nghiệm", width=6.8, color="#312E81", text_color="#E0E7FF", size=27)
        tag.to_edge(DOWN, buff=0.55)

        self.play(Write(title), FadeIn(subtitle, shift=UP * 0.2))
        self.play(LaggedStart(*[FadeIn(eq, shift=RIGHT) for eq in left_eq], lag_ratio=0.18))
        self.play(GrowArrow(arrow))
        self.play(FadeIn(result, scale=0.9))
        self.play(FadeIn(tag, shift=UP * 0.2))
        self.move_background(bg, 2.0)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_2_matrix_meaning(self, bg):
        title = self.title("Bước 1: chuyển hệ thành ma trận mở rộng")

        eq1 = self.t("x + 2y = 4", size=34, color="#E0F2FE", weight="BOLD")
        eq2 = self.t("2x + y = 5", size=34, color="#DCFCE7", weight="BOLD")
        eqs = VGroup(eq1, eq2).arrange(DOWN, aligned_edge=LEFT, buff=0.4)
        eqs.shift(LEFT * 4.7 + DOWN * 0.25)

        matrix = self.matrix([[1, 2, 4], [2, 1, 5]], divider_after=2)
        matrix.shift(RIGHT * 3.35 + DOWN * 0.25)

        arrow = Arrow(eqs.get_right() + RIGHT * 0.2, matrix.get_left() + LEFT * 0.2, color="#F8FAFC", stroke_width=5)

        a_label = self.glass_box("A", width=1.0, color="#1D4ED8", text_color=WHITE, size=26)
        b_label = self.glass_box("b", width=1.0, color="#BE123C", text_color=WHITE, size=26)

        a_label.next_to(matrix, UP, buff=0.35).shift(LEFT * 0.4)
        b_label.next_to(matrix, UP, buff=0.35).shift(RIGHT * 1.0)

        note = self.glass_box("[A | b] = hệ số của biến + cột kết quả", width=6.7, color="#1E293B", text_color="#F8FAFC", size=27)
        note.to_edge(DOWN, buff=0.5)

        self.play(Write(title))
        self.play(FadeIn(eqs, shift=RIGHT))
        self.play(GrowArrow(arrow))
        self.play(FadeIn(matrix, scale=0.92))
        self.play(FadeIn(a_label, shift=DOWN * 0.2), FadeIn(b_label, shift=DOWN * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))
        self.move_background(bg, 2.0)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_3_row_ops(self, bg):
        title = self.title("Bước 2: chỉ dùng 3 phép biến đổi hàng")

        cards = VGroup(
            self.glass_box("Đổi chỗ hai hàng", width=4.2, color="#1D4ED8", text_color="#DBEAFE"),
            self.glass_box("Nhân một hàng với số khác 0", width=5.6, color="#166534", text_color="#DCFCE7"),
            self.glass_box("Cộng một hàng với bội của hàng khác", width=6.6, color="#7C3AED", text_color="#E9D5FF"),
        ).arrange(DOWN, buff=0.35)
        cards.shift(LEFT * 3.2 + DOWN * 0.25)

        m = self.matrix([[1, 2, 4], [2, 1, 5]], divider_after=2)
        m.shift(RIGHT * 3.6 + DOWN * 0.2)

        row1 = SurroundingRectangle(m.rows[0], color="#38BDF8", buff=0.12, stroke_width=4)
        row2 = SurroundingRectangle(m.rows[1], color="#22C55E", buff=0.12, stroke_width=4)

        note = self.t(
            "Mỗi phép là một bước hợp lệ: hệ mới vẫn có cùng nghiệm.",
            size=29,
            color="#FEF3C7",
            max_width=10,
            weight="BOLD",
        )
        note.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=RIGHT * 0.25) for card in cards], lag_ratio=0.15))
        self.play(FadeIn(m, scale=0.92))
        self.play(Create(row1), Create(row2))
        self.play(row1.animate.set_color("#FACC15"), row2.animate.set_color("#FACC15"), run_time=0.6)
        self.play(row1.animate.set_color("#38BDF8"), row2.animate.set_color("#22C55E"), run_time=0.6)
        self.play(FadeIn(note, shift=UP * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_4_pivot_action(self, bg):
        title = self.title("Bước 3: dùng pivot để tạo số 0")

        old_m = self.matrix([[1, 2, 4], [2, 1, 5]], divider_after=2)
        old_m.shift(LEFT * 3.0 + DOWN * 0.15)

        new_m = self.matrix([[1, 2, 4], [0, -3, -3]], divider_after=2)
        new_m.shift(RIGHT * 3.0 + DOWN * 0.15)

        pivot = SurroundingRectangle(old_m.rows[0][0], color="#FACC15", buff=0.12, stroke_width=5)
        target = SurroundingRectangle(old_m.rows[1][0], color="#FB7185", buff=0.12, stroke_width=5)

        op = self.glass_box("R2 → R2 - 2R1", width=4.1, color="#713F12", text_color="#FEF3C7", size=31)
        op.move_to(UP * 1.45)

        arrow = Arrow(old_m.get_right() + RIGHT * 0.35, new_m.get_left() + LEFT * 0.35, color="#F8FAFC", stroke_width=6)

        zero_flash = SurroundingRectangle(new_m.rows[1][0], color="#22C55E", buff=0.13, stroke_width=5)

        note = self.t(
            "Mục tiêu là biến số 2 dưới pivot thành 0.",
            size=29,
            color="#CBD5E1",
            max_width=9,
            weight="BOLD",
        )
        note.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(FadeIn(old_m, scale=0.92))
        self.play(Create(pivot))
        self.play(Create(target))
        self.play(FadeIn(op, shift=DOWN * 0.2))
        self.play(GrowArrow(arrow))
        self.play(TransformFromCopy(old_m, new_m), run_time=1.25)
        self.play(Create(zero_flash))
        self.play(FadeIn(note, shift=UP * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_5_read_solution(self, bg):
        title = self.title("Bước 4: đọc nghiệm từ ma trận mới")

        m = self.matrix([[1, 2, 4], [0, -3, -3]], divider_after=2)
        m.shift(LEFT * 3.6 + DOWN * 0.1)

        row2_box = SurroundingRectangle(m.rows[1], color="#22C55E", buff=0.14, stroke_width=4)
        row1_box = SurroundingRectangle(m.rows[0], color="#38BDF8", buff=0.14, stroke_width=4)

        step1 = self.glass_box("-3y = -3", width=3.0, color="#14532D", text_color="#DCFCE7", size=31)
        step2 = self.glass_box("y = 1", width=2.0, color="#166534", text_color="#DCFCE7", size=31)
        step3 = self.glass_box("x + 2(1) = 4", width=3.8, color="#0C4A6E", text_color="#E0F2FE", size=31)
        step4 = self.glass_box("x = 2", width=2.0, color="#1D4ED8", text_color="#DBEAFE", size=31)

        steps = VGroup(step1, step2, step3, step4).arrange(DOWN, buff=0.3)
        steps.shift(RIGHT * 3.6 + DOWN * 0.1)

        answer = self.glass_box("Nghiệm: (2, 1)", width=3.8, color="#713F12", text_color="#FEF3C7", size=34)
        answer.to_edge(DOWN, buff=0.45)

        self.play(Write(title))
        self.play(FadeIn(m, scale=0.92))
        self.play(Create(row2_box))
        self.play(FadeIn(step1, shift=LEFT * 0.25))
        self.play(FadeIn(step2, shift=LEFT * 0.25))
        self.play(ReplacementTransform(row2_box, row1_box))
        self.play(FadeIn(step3, shift=LEFT * 0.25))
        self.play(FadeIn(step4, shift=LEFT * 0.25))
        self.play(FadeIn(answer, shift=UP * 0.2))
        self.move_background(bg, 1.8)
        self.wait(1.3)
        self.clear_scene(bg)

    def scene_6_graph_meaning(self, bg):
        title = self.title("Hình học: nghiệm là giao điểm")

        axes = Axes(
            x_range=[-0.5, 4.5, 1],
            y_range=[-0.5, 4.5, 1],
            x_length=6.4,
            y_length=6.4,
            tips=True,
            axis_config={"color": "#94A3B8", "stroke_width": 3},
        )
        axes.shift(LEFT * 3.2 + DOWN * 0.35)

        x_axis_label = self.t("x", size=24, color="#94A3B8")
        y_axis_label = self.t("y", size=24, color="#94A3B8")
        x_axis_label.next_to(axes.x_axis.get_end(), RIGHT, buff=0.1)
        y_axis_label.next_to(axes.y_axis.get_end(), UP, buff=0.1)

        line1 = axes.plot(lambda x: (4 - x) / 2, x_range=[-0.2, 4.2], color="#38BDF8", stroke_width=6)
        line2 = axes.plot(lambda x: 5 - 2 * x, x_range=[0.4, 2.75], color="#22C55E", stroke_width=6)

        dot = Dot(axes.c2p(2, 1), radius=0.1, color="#FACC15")
        label = self.t("(2,1)", size=31, color="#FACC15", weight="BOLD")
        label.next_to(dot, UR, buff=0.18)

        eqs = VGroup(
            self.glass_box("x + 2y = 4", width=3.4, color="#0C4A6E", text_color="#E0F2FE", size=29),
            self.glass_box("2x + y = 5", width=3.4, color="#14532D", text_color="#DCFCE7", size=29),
            self.glass_box("Giao điểm = nghiệm", width=3.8, color="#713F12", text_color="#FEF3C7", size=29),
        ).arrange(DOWN, buff=0.35)
        eqs.shift(RIGHT * 3.8 + DOWN * 0.25)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(x_axis_label), FadeIn(y_axis_label))
        self.play(Create(line1), FadeIn(eqs[0], shift=LEFT * 0.25))
        self.play(Create(line2), FadeIn(eqs[1], shift=LEFT * 0.25))
        self.play(FadeIn(dot, scale=1.4), Write(label))
        self.play(FadeIn(eqs[2], shift=LEFT * 0.25))
        self.move_background(bg, 1.8)
        self.wait(1.5)
        self.clear_scene(bg)

    def scene_7_exercise_map(self, bg):
        title = self.title("Áp dụng vào bài tập")

        card1 = VGroup(
            self.glass_box("Câu 1–4", width=2.6, color="#1D4ED8", text_color="#DBEAFE", size=28),
            self.t("Nhớ 3 phép biến đổi hàng", size=27, color="#DBEAFE", max_width=4.0, weight="BOLD"),
        ).arrange(DOWN, buff=0.18)

        card2 = VGroup(
            self.glass_box("Câu 5–7", width=2.6, color="#166534", text_color="#DCFCE7", size=28),
            self.t("Tính R2 - 2R1 rồi đọc nghiệm", size=27, color="#DCFCE7", max_width=4.0, weight="BOLD"),
        ).arrange(DOWN, buff=0.18)

        card3 = VGroup(
            self.glass_box("Câu 8–10", width=2.8, color="#7C3AED", text_color="#E9D5FF", size=28),
            self.t("Hiểu mục tiêu và vì sao phép biến đổi hợp lệ", size=27, color="#E9D5FF", max_width=4.3, weight="BOLD"),
        ).arrange(DOWN, buff=0.18)

        cards = VGroup(card1, card2, card3).arrange(RIGHT, buff=0.7)
        cards.move_to(ORIGIN + UP * 0.25)

        bottom = self.glass_box(
            "Thấy R2 → R2 - 2R1 thì nghĩ ngay: tạo số 0 dưới pivot.",
            width=8.4,
            color="#1E293B",
            text_color="#F8FAFC",
            size=29,
        )
        bottom.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=UP * 0.25) for card in cards], lag_ratio=0.18))
        self.play(FadeIn(bottom, shift=UP * 0.2))
        self.move_background(bg, 2.0)
        self.wait(1.5)
        self.clear_scene(bg)

    def scene_8_summary(self, bg):
        title = self.title("Tóm tắt trong 4 bước")

        steps = VGroup(
            self.glass_box("1. Viết hệ thành [A | b]", width=4.6, color="#0C4A6E", text_color="#E0F2FE", size=29),
            self.glass_box("2. Chọn pivot", width=3.2, color="#713F12", text_color="#FEF3C7", size=29),
            self.glass_box("3. Dùng hàng pivot để tạo số 0", width=5.5, color="#166534", text_color="#DCFCE7", size=29),
            self.glass_box("4. Đọc nghiệm từ ma trận mới", width=5.0, color="#7C3AED", text_color="#E9D5FF", size=29),
        ).arrange(DOWN, buff=0.35)

        steps.move_to(ORIGIN + UP * 0.05)

        final = self.t(
            "Khử Gauss = biến đổi có kiểm soát để nghiệm hiện ra rõ ràng.",
            size=31,
            color="#F8FAFC",
            max_width=11,
            weight="BOLD",
        )
        final.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(step, shift=UP * 0.2) for step in steps], lag_ratio=0.13))
        self.play(FadeIn(final, shift=UP * 0.2))
        self.move_background(bg, 2.3)
        self.wait(2.5)