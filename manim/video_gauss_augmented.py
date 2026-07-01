from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#081229"

FONT = "Arial"


class GaussAugmentedVideo(Scene):
    def make_text(self, content, size=32, color=WHITE, max_width=None, weight=NORMAL):
        text = Text(content, font=FONT, font_size=size, color=color, weight=weight)
        if max_width and text.width > max_width:
            text.scale_to_fit_width(max_width)
        return text

    def make_title(self, content):
        title = self.make_text(content, size=46, color="#F8FAFC", max_width=12, weight=BOLD)
        title.to_edge(UP)
        return title

    def make_subtitle(self, content):
        sub = self.make_text(content, size=26, color="#CBD5E1", max_width=12)
        return sub

    def pill(self, content, color="#2563EB"):
        text = self.make_text(content, size=22, color=WHITE, max_width=4, weight=BOLD)
        box = RoundedRectangle(
            corner_radius=0.18,
            width=text.width + 0.45,
            height=text.height + 0.28,
            stroke_width=0,
            fill_color=color,
            fill_opacity=0.95,
        )
        group = VGroup(box, text)
        text.move_to(box.get_center())
        return group

    def info_box(self, content, color="#1E293B", text_color=WHITE, width=5.5):
        text = self.make_text(content, size=28, color=text_color, max_width=width - 0.5)
        box = RoundedRectangle(
            corner_radius=0.2,
            width=max(width, text.width + 0.6),
            height=text.height + 0.45,
            stroke_color=color,
            stroke_width=2,
            fill_color=color,
            fill_opacity=0.85,
        )
        text.move_to(box.get_center())
        return VGroup(box, text)

    def make_background(self):
        c1 = Circle(radius=1.2, color="#60A5FA", fill_color="#60A5FA", fill_opacity=0.10, stroke_width=0)
        c2 = Circle(radius=0.9, color="#A855F7", fill_color="#A855F7", fill_opacity=0.10, stroke_width=0)
        c3 = Circle(radius=1.0, color="#22C55E", fill_color="#22C55E", fill_opacity=0.10, stroke_width=0)
        c4 = Circle(radius=0.7, color="#F59E0B", fill_color="#F59E0B", fill_opacity=0.08, stroke_width=0)

        c1.move_to(UP * 2.8 + LEFT * 5.8)
        c2.move_to(UP * 2.5 + RIGHT * 5.2)
        c3.move_to(DOWN * 2.8 + LEFT * 4.6)
        c4.move_to(DOWN * 2.6 + RIGHT * 5.4)

        return VGroup(c1, c2, c3, c4)

    def animate_background(self, bg, dx=0.4, run_time=2.5):
        self.play(
            bg[0].animate.shift(RIGHT * dx + DOWN * 0.05),
            bg[1].animate.shift(LEFT * dx + DOWN * 0.08),
            bg[2].animate.shift(RIGHT * dx * 0.6 + UP * 0.08),
            bg[3].animate.shift(LEFT * dx * 0.5 + UP * 0.06),
            run_time=run_time,
            rate_func=there_and_back,
        )

    def matrix_mobject(self, rows, divider_after=None, font_size=28, color=WHITE):
        row_groups = VGroup()
        all_cells = VGroup()

        n_rows = len(rows)
        n_cols = max(len(r) for r in rows)
        cell_w = 0.75
        cell_h = 0.62

        for i, row in enumerate(rows):
            row_group = VGroup()
            for j, val in enumerate(row):
                txt = self.make_text(str(val), size=font_size, color=color)
                txt.move_to(RIGHT * j * cell_w + DOWN * i * cell_h)
                row_group.add(txt)
                all_cells.add(txt)
            row_groups.add(row_group)

        all_cells.move_to(ORIGIN)
        row_groups.move_to(ORIGIN)

        width = (n_cols - 1) * cell_w + 0.9
        height = (n_rows - 1) * cell_h + 0.7

        left_x = -width / 2
        right_x = width / 2
        top_y = height / 2
        bottom_y = -height / 2

        left_bracket = VGroup(
            Line([left_x, top_y, 0], [left_x + 0.16, top_y, 0], color=color, stroke_width=3),
            Line([left_x, top_y, 0], [left_x, bottom_y, 0], color=color, stroke_width=3),
            Line([left_x, bottom_y, 0], [left_x + 0.16, bottom_y, 0], color=color, stroke_width=3),
        )

        right_bracket = VGroup(
            Line([right_x - 0.16, top_y, 0], [right_x, top_y, 0], color=color, stroke_width=3),
            Line([right_x, top_y, 0], [right_x, bottom_y, 0], color=color, stroke_width=3),
            Line([right_x - 0.16, bottom_y, 0], [right_x, bottom_y, 0], color=color, stroke_width=3),
        )

        group = VGroup(left_bracket, row_groups, right_bracket)

        if divider_after is not None:
            divider_x = left_x + 0.32 + divider_after * cell_w
            divider = Line(
                [divider_x, top_y - 0.02, 0],
                [divider_x, bottom_y + 0.02, 0],
                color="#94A3B8",
                stroke_width=2,
            )
            group.add(divider)
            group.divider = divider

        group.row_groups = row_groups
        return group

    def add_axis_numbers(self, axes, x_vals, y_vals):
        labels = VGroup()

        for x in x_vals:
            label = self.make_text(str(x), size=20, color="#94A3B8")
            label.next_to(axes.c2p(x, 0), DOWN, buff=0.08)
            labels.add(label)

        for y in y_vals:
            if y == 0:
                continue
            label = self.make_text(str(y), size=20, color="#94A3B8")
            label.next_to(axes.c2p(0, y), LEFT, buff=0.08)
            labels.add(label)

        return labels

    def clear_keep_bg(self, bg):
        remove_list = [m for m in self.mobjects if m is not bg]
        self.play(*[FadeOut(m) for m in remove_list], run_time=0.6)

    def construct(self):
        bg = self.make_background()
        self.add(bg)

        self.scene_intro(bg)
        self.scene_big_idea(bg)
        self.scene_augmented_matrix(bg)
        self.scene_row_operations(bg)
        self.scene_example(bg)
        self.scene_question_bridge(bg)
        self.scene_summary(bg)

    def scene_intro(self, bg):
        title = self.make_title("Khử Gauss và ma trận mở rộng")
        chip = self.pill("Hệ phương trình", color="#4F46E5")
        chip.to_corner(UL).shift(RIGHT * 0.4 + DOWN * 0.55)

        formula = self.make_text("[A | b]", size=74, color="#38BDF8", weight=BOLD)
        formula.move_to(UP * 0.6)

        sub = self.make_subtitle("Biến hệ phương trình thành dạng dễ đọc nghiệm hơn.")
        sub.next_to(formula, DOWN, buff=0.45)

        eq1 = self.info_box("x + 2y = 4", color="#0C4A6E", text_color="#E0F2FE", width=3.2)
        eq2 = self.info_box("2x + y = 5", color="#14532D", text_color="#DCFCE7", width=3.2)
        eqs = VGroup(eq1, eq2).arrange(DOWN, buff=0.35)
        eqs.move_to(DOWN * 1.7)

        self.play(FadeIn(chip, shift=DOWN), Write(title))
        self.animate_background(bg, dx=0.25, run_time=1.8)
        self.play(FadeIn(formula, scale=0.9), FadeIn(sub, shift=UP * 0.2))
        self.play(LaggedStart(FadeIn(eq1, shift=UP), FadeIn(eq2, shift=UP), lag_ratio=0.18))
        self.wait(1.6)
        self.clear_keep_bg(bg)

    def scene_big_idea(self, bg):
        title = self.make_title("Ý tưởng chính")
        line1 = self.info_box("Giải hệ = biến đổi dần để đọc nghiệm dễ hơn", color="#1D4ED8", text_color=WHITE, width=7.4)
        line2 = self.info_box("Chỉ dùng các phép biến đổi hàng sơ cấp", color="#166534", text_color=WHITE, width=6.0)
        line3 = self.info_box("Các phép này không làm đổi tập nghiệm", color="#7C2D12", text_color="#FEF3C7", width=5.6)

        stack = VGroup(line1, line2, line3).arrange(DOWN, buff=0.35)
        stack.move_to(ORIGIN)

        self.play(Write(title))
        self.play(FadeIn(line1, shift=UP * 0.3))
        self.animate_background(bg, dx=0.35, run_time=1.2)
        self.play(FadeIn(line2, shift=UP * 0.3))
        self.play(FadeIn(line3, shift=UP * 0.3))
        self.wait(1.8)
        self.clear_keep_bg(bg)

    def scene_augmented_matrix(self, bg):
        title = self.make_title("Bước 1: Viết hệ dưới dạng ma trận mở rộng")

        eq1 = self.make_text("x + 2y = 4", size=34, color="#E0F2FE", weight=BOLD)
        eq2 = self.make_text("2x + y = 5", size=34, color="#DCFCE7", weight=BOLD)
        equations = VGroup(eq1, eq2).arrange(DOWN, aligned_edge=LEFT, buff=0.4)
        equations.shift(LEFT * 3.6 + DOWN * 0.1)

        arrow = Arrow(start=LEFT, end=RIGHT, color="#F8FAFC", buff=0.1, stroke_width=5)
        arrow.scale(0.8)
        arrow.move_to(ORIGIN + DOWN * 0.1)

        matrix = self.matrix_mobject([[1, 2, 4], [2, 1, 5]], divider_after=2, font_size=30, color="#F8FAFC")
        matrix.shift(RIGHT * 3.1 + DOWN * 0.05)

        note = self.info_box("[A | b] = ghép ma trận hệ số A với cột vế phải b", color="#1E293B", text_color="#F8FAFC", width=7.2)
        note.to_edge(DOWN)

        self.play(Write(title))
        self.play(FadeIn(equations, shift=RIGHT))
        self.play(GrowArrow(arrow))
        self.play(FadeIn(matrix, scale=0.9))
        self.play(FadeIn(note, shift=UP * 0.2))
        self.animate_background(bg, dx=0.3, run_time=2)
        self.wait(1.8)
        self.clear_keep_bg(bg)

    def scene_row_operations(self, bg):
        title = self.make_title("Bước 2: Ba phép biến đổi hàng sơ cấp")

        op1 = self.info_box("1. Đổi chỗ hai hàng", color="#1D4ED8", text_color=WHITE, width=4.3)
        op2 = self.info_box("2. Nhân một hàng với số khác 0", color="#166534", text_color=WHITE, width=5.8)
        op3 = self.info_box("3. Lấy một hàng cộng với bội của hàng khác", color="#7C3AED", text_color=WHITE, width=7.0)
        ops = VGroup(op1, op2, op3).arrange(DOWN, buff=0.35)
        ops.to_edge(LEFT).shift(RIGHT * 0.9 + DOWN * 0.3)

        m = self.matrix_mobject([[1, 2, 4], [2, 1, 5]], divider_after=2, font_size=28, color="#F8FAFC")
        m.shift(RIGHT * 3.4 + DOWN * 0.2)

        row1_box = SurroundingRectangle(m.row_groups[0], color="#38BDF8", buff=0.12, stroke_width=3)
        row2_box = SurroundingRectangle(m.row_groups[1], color="#22C55E", buff=0.12, stroke_width=3)

        note = self.make_text(
            "Điều quan trọng: những phép này giữ nguyên tập nghiệm.",
            size=28,
            color="#FDE68A",
            max_width=9,
        )
        note.to_edge(DOWN)

        self.play(Write(title))
        self.play(LaggedStart(FadeIn(op1, shift=RIGHT), FadeIn(op2, shift=RIGHT), FadeIn(op3, shift=RIGHT), lag_ratio=0.15))
        self.play(FadeIn(m, scale=0.9))
        self.play(Create(row1_box), Create(row2_box))
        self.play(
            row1_box.animate.shift(DOWN * 0.62),
            row2_box.animate.shift(UP * 0.62),
            run_time=1.0
        )
        self.play(
            row1_box.animate.move_to(m.row_groups[0]),
            row2_box.animate.move_to(m.row_groups[1]),
            run_time=0.8
        )
        self.play(FadeIn(note, shift=UP * 0.2))
        self.animate_background(bg, dx=0.35, run_time=2)
        self.wait(1.7)
        self.clear_keep_bg(bg)

    def scene_example(self, bg):
        title = self.make_title("Bước 3: Làm ví dụ thật")

        system_title = self.make_text("Hệ ví dụ", size=28, color="#CBD5E1", weight=BOLD)
        system_title.shift(LEFT * 5.0 + UP * 2.0)

        eq1 = self.make_text("x + 2y = 4", size=34, color="#E0F2FE", weight=BOLD)
        eq2 = self.make_text("2x + y = 5", size=34, color="#DCFCE7", weight=BOLD)
        eqs = VGroup(eq1, eq2).arrange(DOWN, aligned_edge=LEFT, buff=0.35)
        eqs.next_to(system_title, DOWN, aligned_edge=LEFT, buff=0.35)

        old_m = self.matrix_mobject([[1, 2, 4], [2, 1, 5]], divider_after=2, font_size=30, color="#F8FAFC")
        old_m.shift(LEFT * 2.2 + DOWN * 0.1)

        op = self.info_box("R2 → R2 - 2R1", color="#7C2D12", text_color="#FEF3C7", width=3.9)
        op.move_to(ORIGIN + DOWN * 0.1)

        new_m = self.matrix_mobject([[1, 2, 4], [0, -3, -3]], divider_after=2, font_size=30, color="#F8FAFC")
        new_m.shift(RIGHT * 2.8 + DOWN * 0.1)

        row2_old = SurroundingRectangle(old_m.row_groups[1], color="#22C55E", buff=0.12, stroke_width=3)
        row1_old = SurroundingRectangle(old_m.row_groups[0], color="#38BDF8", buff=0.12, stroke_width=3)

        infer1 = self.info_box("-3y = -3  →  y = 1", color="#14532D", text_color="#DCFCE7", width=4.0)
        infer2 = self.info_box("x + 2(1) = 4  →  x = 2", color="#0C4A6E", text_color="#E0F2FE", width=5.0)
        infer_stack = VGroup(infer1, infer2).arrange(DOWN, buff=0.35)
        infer_stack.to_corner(DR).shift(LEFT * 0.5 + UP * 1.5)

        answer = self.info_box("Nghiệm của hệ là (2,1)", color="#713F12", text_color="#FEF3C7", width=4.8)
        answer.to_edge(DOWN, buff=0.18)

        self.play(Write(title))
        self.play(FadeIn(system_title), FadeIn(eqs, shift=UP * 0.2))
        self.play(FadeIn(old_m, scale=0.9))
        self.play(Create(row1_old), Create(row2_old))
        self.play(FadeIn(op, shift=UP * 0.2))
        self.animate_background(bg, dx=0.3, run_time=1.2)
        self.play(TransformFromCopy(old_m, new_m), run_time=1.4)
        self.play(FadeIn(infer1, shift=UP * 0.2))
        self.play(FadeIn(infer2, shift=UP * 0.2))
        self.play(FadeIn(answer, shift=UP * 0.2))
        self.wait(2)
        self.clear_keep_bg(bg)

    def scene_question_bridge(self, bg):
        title = self.make_title("Vậy làm bài tập bằng cách nào?")

        left = VGroup(
            self.info_box("Câu 1, 3, 4", color="#1D4ED8", text_color=WHITE, width=2.5),
            self.make_text("Nhớ 3 phép biến đổi hàng sơ cấp", size=28, color="#DBEAFE", max_width=4.5),
        ).arrange(DOWN, buff=0.18)

        mid = VGroup(
            self.info_box("Câu 2", color="#166534", text_color=WHITE, width=2.0),
            self.make_text("Nhớ ma trận mở rộng viết là [A | b]", size=28, color="#DCFCE7", max_width=4.5),
        ).arrange(DOWN, buff=0.18)

        right = VGroup(
            self.info_box("Câu 5 → 10", color="#7C3AED", text_color=WHITE, width=2.8),
            self.make_text("Biết khử hàng, đọc y trước rồi thế ngược lại để tìm x", size=28, color="#E9D5FF", max_width=4.8),
        ).arrange(DOWN, buff=0.18)

        cards = VGroup(left, mid, right).arrange(RIGHT, buff=0.6)
        cards.move_to(ORIGIN + UP * 0.2)

        bottom = self.info_box("Nhìn thấy R2 = R2 - 2R1 là phải nghĩ ngay: tạo số 0 dưới pivot", color="#1E293B", text_color="#F8FAFC", width=7.6)
        bottom.to_edge(DOWN)

        self.play(Write(title))
        self.play(LaggedStart(FadeIn(left, shift=UP * 0.2), FadeIn(mid, shift=UP * 0.2), FadeIn(right, shift=UP * 0.2), lag_ratio=0.18))
        self.play(FadeIn(bottom, shift=UP * 0.2))
        self.animate_background(bg, dx=0.35, run_time=2)
        self.wait(2)
        self.clear_keep_bg(bg)

    def scene_summary(self, bg):
        title = self.make_title("Tóm tắt cực ngắn")

        s1 = self.info_box("1. Viết hệ dưới dạng [A | b]", color="#0C4A6E", text_color="#E0F2FE", width=4.7)
        s2 = self.info_box("2. Dùng phép biến đổi hàng để tạo số 0", color="#14532D", text_color="#DCFCE7", width=5.7)
        s3 = self.info_box("3. Đưa về dạng dễ đọc nghiệm", color="#7C2D12", text_color="#FEF3C7", width=4.6)
        s4 = self.info_box("4. Các phép biến đổi hàng không đổi tập nghiệm", color="#4C1D95", text_color="#E9D5FF", width=7.0)

        steps = VGroup(s1, s2, s3, s4).arrange(DOWN, buff=0.35)
        steps.move_to(ORIGIN)

        final_line = self.make_text(
            "Chỉ cần nhớ 4 ý này là bạn đã làm được phần lớn bài tập Gauss cơ bản.",
            size=30,
            color="#F8FAFC",
            max_width=12,
            weight=BOLD
        )
        final_line.to_edge(DOWN)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(item, shift=UP * 0.2) for item in steps], lag_ratio=0.12))
        self.play(FadeIn(final_line, shift=UP * 0.2))
        self.animate_background(bg, dx=0.4, run_time=2.5)
        self.wait(3)