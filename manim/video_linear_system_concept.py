from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#0f172a"

FONT = "Arial"


class LinearSystemConcept(Scene):
    def make_text(self, content, size=34, color=WHITE, max_width=12):
        text = Text(content, font=FONT, font_size=size, color=color)
        if text.width > max_width:
            text.scale_to_fit_width(max_width)
        return text

    def make_title(self, content):
        title = self.make_text(content, size=48, color="#f8fafc", max_width=13)
        title.to_edge(UP)
        return title

    def make_box_text(self, content, size=32, color=WHITE, box_color="#1e293b"):
        text = self.make_text(content, size=size, color=color, max_width=11)
        box = RoundedRectangle(
            corner_radius=0.18,
            width=text.width + 0.7,
            height=text.height + 0.45,
            color=box_color,
            fill_color=box_color,
            fill_opacity=0.75,
        )
        box.move_to(text)
        return VGroup(box, text)

    def clear_scene(self):
        self.play(*[FadeOut(mob) for mob in self.mobjects], run_time=0.6)
    def make_axis_numbers(self, axes, x_values=None, y_values=None):
        if x_values is None:
            x_values = [-1, 0, 1, 2, 3, 4]

        if y_values is None:
            y_values = [-1, 0, 1, 2, 3, 4]

        labels = VGroup()

        for x in x_values:
            label = Text(str(x), font=FONT, font_size=20, color="#94a3b8")
            label.next_to(axes.c2p(x, 0), DOWN, buff=0.12)
            labels.add(label)

        for y in y_values:
            if y == 0:
                continue

            label = Text(str(y), font=FONT, font_size=20, color="#94a3b8")
            label.next_to(axes.c2p(0, y), LEFT, buff=0.12)
            labels.add(label)

        return labels
    def construct(self):
        self.intro()
        self.linear_vs_nonlinear()
        self.one_equation_is_line()
        self.solve_system_example()
        self.three_solution_cases()
        self.final_rules()

    def intro(self):
        title = self.make_title("Khái niệm hệ phương trình tuyến tính")

        formula = self.make_text("A · x = b", size=72, color="#38bdf8")
        formula.move_to(ORIGIN + UP * 0.4)

        subtitle = self.make_text(
            "Một hệ tuyến tính là nhiều phương trình tuyến tính dùng chung các ẩn.",
            size=32,
            color="#cbd5e1",
        )
        subtitle.next_to(formula, DOWN, buff=0.5)

        self.play(Write(title))
        self.play(Write(formula), run_time=1.2)
        self.play(FadeIn(subtitle, shift=UP * 0.2))
        self.wait(1.5)

        idea = self.make_box_text(
            "Ý tưởng chính: giải hệ = tìm giá trị của các ẩn thỏa mãn tất cả phương trình.",
            size=30,
            color="#fef9c3",
            box_color="#334155",
        )
        idea.next_to(subtitle, DOWN, buff=0.7)

        self.play(FadeIn(idea, shift=UP * 0.2))
        self.wait(2)
        self.clear_scene()

    def linear_vs_nonlinear(self):
        title = self.make_title("1. Phương trình tuyến tính là gì?")

        good = self.make_box_text("2x - 3y = 7", size=42, color="#bbf7d0", box_color="#14532d")
        good.shift(UP * 1.2)

        good_note = self.make_text(
            "Tuyến tính: biến chỉ ở bậc 1",
            size=32,
            color="#bbf7d0",
        )
        good_note.next_to(good, DOWN, buff=0.3)

        bad_title = self.make_text("Không tuyến tính:", size=34, color="#fecaca")
        bad_title.shift(DOWN * 0.7)

        bad_examples = VGroup(
            self.make_text("x² + y = 3", size=30, color="#fecaca"),
            self.make_text("xy = 5", size=30, color="#fecaca"),
            self.make_text("1/x + y = 2", size=30, color="#fecaca"),
        ).arrange(RIGHT, buff=0.8)
        bad_examples.next_to(bad_title, DOWN, buff=0.35)

        reason = self.make_text(
            "Vì có x², xy hoặc 1/x nên chúng không phải phương trình tuyến tính.",
            size=28,
            color="#cbd5e1",
            max_width=12,
        )
        reason.next_to(bad_examples, DOWN, buff=0.55)

        self.play(Write(title))
        self.play(FadeIn(good, shift=UP), FadeIn(good_note, shift=UP))
        self.wait(1)
        self.play(FadeIn(bad_title), FadeIn(bad_examples, shift=UP))
        self.play(FadeIn(reason, shift=UP))
        self.wait(2.2)
        self.clear_scene()

    def one_equation_is_line(self):
        title = self.make_title("2. Một phương trình hai ẩn là một đường thẳng")

        axes = Axes(
            x_range=[-1, 5, 1],
            y_range=[-1, 5, 1],
            x_length=7,
            y_length=7,
            axis_config={"color": "#94a3b8"},
        )
        axes.shift(DOWN * 0.3)
        axis_numbers = self.make_axis_numbers(axes)

        line = axes.plot(lambda x: 3 - x, x_range=[-0.5, 4.5], color="#38bdf8")

        eq = self.make_box_text("x + y = 3", size=38, color="#e0f2fe", box_color="#0c4a6e")
        eq.to_corner(UR)
        eq.shift(LEFT * 0.8 + DOWN * 1.2)

        point1 = Dot(axes.c2p(0, 3), color="#facc15")
        point2 = Dot(axes.c2p(3, 0), color="#facc15")
        label1 = self.make_text("(0,3)", size=24, color="#facc15")
        label2 = self.make_text("(3,0)", size=24, color="#facc15")
        label1.next_to(point1, LEFT)
        label2.next_to(point2, DOWN)

        note = self.make_text(
            "Mỗi điểm trên đường thẳng đều làm phương trình đúng.",
            size=30,
            color="#cbd5e1",
            max_width=11,
        )
        note.to_edge(DOWN)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(axis_numbers), run_time=1.2)
        self.play(FadeIn(eq, shift=LEFT))
        self.play(Create(line), run_time=1.4)
        self.play(FadeIn(point1), FadeIn(point2), Write(label1), Write(label2))
        self.play(FadeIn(note, shift=UP))
        self.wait(2)
        self.clear_scene()

    def solve_system_example(self):
        title = self.make_title("3. Giải hệ = tìm giao điểm")

        axes = Axes(
            x_range=[-1, 5, 1],
            y_range=[-1, 5, 1],
            x_length=7,
            y_length=7,
            axis_config={"color": "#94a3b8"},
        )
        axes.shift(LEFT * 2.8 + DOWN * 0.25)
        axis_numbers = self.make_axis_numbers(axes)

        line1 = axes.plot(lambda x: 3 - x, x_range=[-0.5, 4.5], color="#38bdf8")
        line2 = axes.plot(lambda x: x - 1, x_range=[-0.5, 4.5], color="#22c55e")

        eq1 = self.make_text("x + y = 3", size=30, color="#38bdf8")
        eq2 = self.make_text("x - y = 1", size=30, color="#22c55e")
        equations = VGroup(eq1, eq2).arrange(DOWN, aligned_edge=LEFT, buff=0.25)
        equations.to_corner(UR)
        equations.shift(LEFT * 0.7 + DOWN * 1.1)

        dot = Dot(axes.c2p(2, 1), color="#facc15", radius=0.09)
        dot_label = self.make_text("(2,1)", size=30, color="#facc15")
        dot_label.next_to(dot, UR, buff=0.15)

        algebra = VGroup(
            self.make_text("Cộng hai phương trình:", size=28, color="#e2e8f0"),
            self.make_text("(x + y) + (x - y) = 3 + 1", size=26, color="#e2e8f0"),
            self.make_text("2x = 4  →  x = 2", size=30, color="#facc15"),
            self.make_text("Thay vào x + y = 3  →  y = 1", size=28, color="#facc15"),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.22)
        algebra.to_corner(DR)
        algebra.shift(LEFT * 0.4 + UP * 1.4)

        answer = self.make_box_text(
            "Nghiệm của hệ là (2,1)",
            size=34,
            color="#fef9c3",
            box_color="#713f12",
        )
        answer.to_edge(DOWN)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(axis_numbers))
        self.play(Write(equations))
        self.play(Create(line1), Create(line2), run_time=1.5)
        self.play(FadeIn(dot, scale=1.5), Write(dot_label))
        self.wait(0.7)
        self.play(FadeIn(algebra, shift=UP))
        self.play(FadeIn(answer, shift=UP))
        self.wait(2.5)
        self.clear_scene()

    def three_solution_cases(self):
        title = self.make_title("4. Ba khả năng về nghiệm")

        axes = Axes(
            x_range=[-2, 4, 1],
            y_range=[-2, 4, 1],
            x_length=6.5,
            y_length=6.5,
            axis_config={"color": "#94a3b8"},
        )
        axes.shift(DOWN * 0.2)
        axis_numbers = self.make_axis_numbers(axes, x_values=[-2, -1, 0, 1, 2, 3, 4], y_values=[-2, -1, 0, 1, 2, 3, 4])

        self.play(Write(title))
        self.play(Create(axes), FadeIn(axis_numbers))

        case_text = self.make_box_text(
            "Trường hợp 1: Hai đường thẳng cắt nhau → đúng một nghiệm",
            size=30,
            color="#dcfce7",
            box_color="#14532d",
        )
        case_text.to_edge(DOWN)

        l1 = axes.plot(lambda x: x + 0.5, x_range=[-2, 3.5], color="#38bdf8")
        l2 = axes.plot(lambda x: -x + 2.5, x_range=[-1, 4], color="#22c55e")
        p = Dot(axes.c2p(1, 1.5), color="#facc15")

        self.play(Create(l1), Create(l2))
        self.play(FadeIn(p, scale=1.4), FadeIn(case_text, shift=UP))
        self.wait(1.8)

        self.play(FadeOut(l1), FadeOut(l2), FadeOut(p), FadeOut(case_text))

        case_text = self.make_box_text(
            "Trường hợp 2: Hai đường thẳng song song → vô nghiệm",
            size=30,
            color="#fecaca",
            box_color="#7f1d1d",
        )
        case_text.to_edge(DOWN)

        l1 = axes.plot(lambda x: x, x_range=[-1.5, 3.5], color="#38bdf8")
        l2 = axes.plot(lambda x: x + 1, x_range=[-2, 3], color="#f97316")

        self.play(Create(l1), Create(l2), FadeIn(case_text, shift=UP))
        self.wait(1.8)

        self.play(FadeOut(l1), FadeOut(l2), FadeOut(case_text))

        case_text = self.make_box_text(
            "Trường hợp 3: Hai đường thẳng trùng nhau → vô số nghiệm",
            size=30,
            color="#fef9c3",
            box_color="#713f12",
        )
        case_text.to_edge(DOWN)

        l1 = axes.plot(lambda x: 0.5 * x + 1, x_range=[-2, 4], color="#38bdf8")
        l2 = axes.plot(lambda x: 0.5 * x + 1, x_range=[-2, 4], color="#facc15")

        self.play(Create(l1))
        self.play(Create(l2), FadeIn(case_text, shift=UP))
        self.wait(2)
        self.clear_scene()

    def final_rules(self):
        title = self.make_title("Cách áp dụng vào bài tập")

        rules = VGroup(
            self.make_box_text("1. Nhận biết tuyến tính: không có x², xy, 1/x.", 30, "#e0f2fe", "#0c4a6e"),
            self.make_box_text("2. Một phương trình hai ẩn tạo thành một đường thẳng.", 30, "#dcfce7", "#14532d"),
            self.make_box_text("3. Giải hệ là tìm điểm thỏa mãn tất cả phương trình.", 30, "#fef9c3", "#713f12"),
            self.make_box_text("4. Cắt nhau: 1 nghiệm. Song song: vô nghiệm. Trùng nhau: vô số nghiệm.", 30, "#f5d0fe", "#581c87"),
        ).arrange(DOWN, buff=0.35)
        rules.move_to(ORIGIN)

        end = self.make_text(
            "Bây giờ quay lại 10 câu luyện tập, bạn chỉ cần dùng 4 quy tắc này.",
            size=34,
            color="#f8fafc",
            max_width=12,
        )
        end.to_edge(DOWN)

        self.play(Write(title))
        for rule in rules:
            self.play(FadeIn(rule, shift=UP), run_time=0.6)
        self.play(FadeIn(end, shift=UP))
        self.wait(3)