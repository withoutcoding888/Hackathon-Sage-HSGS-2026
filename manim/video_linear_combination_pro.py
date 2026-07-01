from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#07111f"

FONT = "Segoe UI"


class LinearCombinationPro(Scene):
    def t(self, content, size=30, color=WHITE, max_width=None, weight="NORMAL"):
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
        title = self.t(content, size=43, color="#F8FAFC", max_width=12.5, weight="BOLD")
        title.to_edge(UP, buff=0.28)
        return title

    def box(self, content, width=5.0, color="#1E293B", text_color=WHITE, size=25):
        label = self.t(content, size=size, color=text_color, max_width=width - 0.45, weight="BOLD")

        rect = RoundedRectangle(
            width=max(width, label.width + 0.7),
            height=label.height + 0.42,
            corner_radius=0.18,
            stroke_color=color,
            stroke_width=2,
            fill_color=color,
            fill_opacity=0.90,
        )

        label.move_to(rect.get_center())
        return VGroup(rect, label)

    def make_background(self):
        grid = VGroup()

        for x in range(-9, 10):
            line = Line([x, -4.8, 0], [x, 4.8, 0], color="#1E293B", stroke_width=1)
            line.set_opacity(0.34)
            grid.add(line)

        for y in range(-5, 6):
            line = Line([-9, y, 0], [9, y, 0], color="#1E293B", stroke_width=1)
            line.set_opacity(0.34)
            grid.add(line)

        glow1 = Circle(radius=1.35, stroke_width=0, fill_color="#2563EB", fill_opacity=0.07)
        glow2 = Circle(radius=1.20, stroke_width=0, fill_color="#7C3AED", fill_opacity=0.07)
        glow3 = Circle(radius=1.05, stroke_width=0, fill_color="#22C55E", fill_opacity=0.05)
        glow4 = Circle(radius=0.95, stroke_width=0, fill_color="#F59E0B", fill_opacity=0.05)

        glow1.move_to(LEFT * 6.8 + UP * 3.2)
        glow2.move_to(RIGHT * 6.8 + UP * 3.1)
        glow3.move_to(LEFT * 6.7 + DOWN * 3.25)
        glow4.move_to(RIGHT * 6.7 + DOWN * 3.15)

        return VGroup(grid, glow1, glow2, glow3, glow4)

    def move_background(self, bg, run_time=1.8):
        self.play(
            bg[1].animate.shift(RIGHT * 0.25 + DOWN * 0.05),
            bg[2].animate.shift(LEFT * 0.25 + DOWN * 0.05),
            bg[3].animate.shift(RIGHT * 0.18 + UP * 0.05),
            bg[4].animate.shift(LEFT * 0.18 + UP * 0.05),
            run_time=run_time,
            rate_func=there_and_back,
        )

    def clear_scene(self, bg):
        remove = [mob for mob in self.mobjects if mob is not bg]
        self.play(*[FadeOut(mob) for mob in remove], run_time=0.55)

    def make_axes(self):
        axes = Axes(
            x_range=[-8.5, 8.5, 1],
            y_range=[-5.2, 5.2, 1],
            x_length=11.2,
            y_length=6.8,
            tips=True,
            axis_config={"color": "#94A3B8", "stroke_width": 3},
        )
        axes.move_to(DOWN * 0.35)
        return axes

    def axis_labels(self, axes):
        x_label = self.t("x", size=23, color="#94A3B8", weight="BOLD")
        y_label = self.t("y", size=23, color="#94A3B8", weight="BOLD")

        x_label.next_to(axes.x_axis.get_end(), RIGHT, buff=0.08)
        y_label.next_to(axes.y_axis.get_end(), UP, buff=0.08)

        return VGroup(x_label, y_label)

    def vector_arrow(self, axes, end, color="#38BDF8", stroke_width=7, opacity=1):
        arr = Arrow(
            start=axes.c2p(0, 0),
            end=axes.c2p(end[0], end[1]),
            buff=0,
            color=color,
            stroke_width=stroke_width,
            max_tip_length_to_length_ratio=0.085,
        )
        arr.set_opacity(opacity)
        return arr

    def shifted_arrow(self, axes, start, end, color="#22C55E", stroke_width=7, opacity=1):
        arr = Arrow(
            start=axes.c2p(start[0], start[1]),
            end=axes.c2p(end[0], end[1]),
            buff=0,
            color=color,
            stroke_width=stroke_width,
            max_tip_length_to_length_ratio=0.085,
        )
        arr.set_opacity(opacity)
        return arr

    def bottom_note(self, mob):
        mob.to_edge(DOWN, buff=0.48)
        return mob

    def top_right(self, mob):
        mob.to_corner(UR, buff=0.5)
        mob.shift(DOWN * 0.95)
        return mob

    def mid_right(self, mob):
        mob.to_edge(RIGHT, buff=0.5)
        mob.shift(DOWN * 0.05)
        return mob

    def construct(self):
        bg = self.make_background()
        self.add(bg)

        self.scene_hook(bg)
        self.scene_formula_highlight(bg)
        self.scene_coefficients_motion(bg)
        self.scene_example_motion(bg)
        self.scene_span_cloud(bg)
        self.scene_exercise_bridge(bg)
        self.scene_summary(bg)

    def scene_hook(self, bg):
        title = self.title("Tổ hợp tuyến tính: tạo vector mới từ vector cũ")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v = self.vector_arrow(axes, (3, 1), "#38BDF8", 7)
        w = self.vector_arrow(axes, (-1, 2), "#22C55E", 7)
        result = self.vector_arrow(axes, (-7, 0), "#FACC15", 9)

        v_label = self.box("v", width=1.1, color="#0C4A6E", text_color="#E0F2FE", size=23)
        w_label = self.box("w", width=1.1, color="#14532D", text_color="#DCFCE7", size=23)
        result_label = self.box("vector mới", width=2.8, color="#713F12", text_color="#FEF3C7", size=23)

        v_label.next_to(axes.c2p(3, 1), UR, buff=0.15)
        w_label.next_to(axes.c2p(-1, 2), UL, buff=0.15)
        result_label.next_to(axes.c2p(-7, 0), UP, buff=0.18)

        step1 = self.box("vector có sẵn", width=3.4, color="#1D4ED8", text_color="#DBEAFE", size=23)
        step2 = self.box("nhân với hệ số", width=3.5, color="#166534", text_color="#DCFCE7", size=23)
        step3 = self.box("cộng lại", width=2.7, color="#7C3AED", text_color="#E9D5FF", size=23)

        panel = VGroup(step1, step2, step3).arrange(DOWN, buff=0.22)
        self.top_right(panel)

        note = self.box(
            "Tổ hợp tuyến tính là công thức để pha trộn nhiều vector.",
            width=7.1,
            color="#713F12",
            text_color="#FEF3C7",
            size=25,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(v), FadeIn(v_label, shift=UP * 0.15), FadeIn(step1, shift=LEFT * 0.2))
        self.play(GrowArrow(w), FadeIn(w_label, shift=UP * 0.15))
        self.play(FadeIn(step2, shift=LEFT * 0.2))

        ghost1 = self.vector_arrow(axes, (-6, -2), "#FB7185", 7, opacity=0.55)
        ghost2 = self.shifted_arrow(axes, (-6, -2), (-7, 0), "#22C55E", 7, opacity=0.75)

        self.play(TransformFromCopy(v, ghost1), run_time=1.0)
        self.play(TransformFromCopy(w, ghost2), run_time=1.0)
        self.play(GrowArrow(result), FadeIn(result_label, shift=UP * 0.15), FadeIn(step3, shift=LEFT * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_formula_highlight(self, bg):
        title = self.title("Công thức cần nhớ")

        formula = self.box(
            "c₁v₁ + c₂v₂ + ... + cₙvₙ",
            width=6.7,
            color="#1D4ED8",
            text_color="#DBEAFE",
            size=34,
        )
        formula.move_to(UP * 0.3)

        coef = self.box("c₁, c₂, ..., cₙ", width=4.1, color="#BE123C", text_color="#FFE4E6", size=26)
        vecs = self.box("v₁, v₂, ..., vₙ", width=4.1, color="#166534", text_color="#DCFCE7", size=26)
        plus = self.box("cộng các phần lại", width=4.4, color="#7C3AED", text_color="#E9D5FF", size=25)

        left_group = VGroup(coef, vecs, plus).arrange(DOWN, buff=0.26)
        left_group.to_edge(LEFT, buff=0.85).shift(DOWN * 0.35)

        a1 = CurvedArrow(coef.get_right(), formula.get_bottom() + LEFT * 1.85, color="#FB7185", angle=-0.45)
        a2 = CurvedArrow(vecs.get_right(), formula.get_bottom() + RIGHT * 1.85, color="#22C55E", angle=-0.25)
        a3 = CurvedArrow(plus.get_right(), formula.get_bottom(), color="#A855F7", angle=-0.35)

        note = self.box(
            "Hệ số quyết định ta đi theo vector đó bao nhiêu lần.",
            width=7.2,
            color="#713F12",
            text_color="#FEF3C7",
            size=25,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(formula, scale=0.92))
        self.play(FadeIn(coef, shift=RIGHT * 0.15), Create(a1))
        self.play(FadeIn(vecs, shift=RIGHT * 0.15), Create(a2))
        self.play(FadeIn(plus, shift=RIGHT * 0.15), Create(a3))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.6)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_coefficients_motion(self, bg):
        title = self.title("Hệ số làm vector dài ra, ngắn lại hoặc đổi hướng")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        base = self.vector_arrow(axes, (2, 1), "#38BDF8", 7)
        two = self.vector_arrow(axes, (4, 2), "#FACC15", 9)
        neg = self.vector_arrow(axes, (-2, -1), "#FB7185", 9)

        zero = Circle(radius=0.13, color="#E2E8F0", stroke_width=5)
        zero.move_to(axes.c2p(0, 0))

        base_label = self.box("v", width=1.1, color="#0C4A6E", text_color="#E0F2FE", size=23)
        two_label = self.box("2v", width=1.5, color="#713F12", text_color="#FEF3C7", size=23)
        neg_label = self.box("-v", width=1.5, color="#BE123C", text_color="#FFE4E6", size=23)
        zero_label = self.box("0v", width=1.5, color="#475569", text_color="#E2E8F0", size=23)

        base_label.next_to(axes.c2p(2, 1), UR, buff=0.15)
        two_label.next_to(axes.c2p(4, 2), UR, buff=0.15)
        neg_label.next_to(axes.c2p(-2, -1), DL, buff=0.15)
        zero_label.next_to(axes.c2p(0, 0), DOWN, buff=0.18)

        rule1 = self.box("dương → cùng hướng", width=3.9, color="#166534", text_color="#DCFCE7", size=23)
        rule2 = self.box("âm → ngược hướng", width=3.8, color="#BE123C", text_color="#FFE4E6", size=23)
        rule3 = self.box("0 → không đóng góp", width=4.1, color="#475569", text_color="#E2E8F0", size=23)

        panel = VGroup(rule1, rule2, rule3).arrange(DOWN, buff=0.22)
        self.top_right(panel)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))

        self.play(GrowArrow(base), FadeIn(base_label, shift=UP * 0.15))
        self.play(TransformFromCopy(base, two), FadeIn(two_label, shift=UP * 0.15), FadeIn(rule1, shift=LEFT * 0.2))
        self.play(TransformFromCopy(base, neg), FadeIn(neg_label, shift=UP * 0.15), FadeIn(rule2, shift=LEFT * 0.2))
        self.play(Create(zero), FadeIn(zero_label, shift=UP * 0.15), FadeIn(rule3, shift=LEFT * 0.2))

        pulse = Circle(radius=0.28, color="#E2E8F0", stroke_width=3)
        pulse.move_to(axes.c2p(0, 0))
        self.play(Create(pulse), pulse.animate.scale(1.5).set_opacity(0), run_time=0.9)

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_example_motion(self, bg):
        title = self.title("Ví dụ trực quan: -2v + w")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v = self.vector_arrow(axes, (3, 1), "#38BDF8", 7)
        neg2v = self.vector_arrow(axes, (-6, -2), "#FB7185", 9)
        w = self.vector_arrow(axes, (-1, 2), "#22C55E", 7)
        w_shifted = self.shifted_arrow(axes, (-6, -2), (-7, 0), "#22C55E", 8)
        result = self.vector_arrow(axes, (-7, 0), "#FACC15", 10)

        v_box = self.box("v = (3,1)", width=2.7, color="#0C4A6E", text_color="#E0F2FE", size=23)
        n_box = self.box("-2v = (-6,-2)", width=3.9, color="#BE123C", text_color="#FFE4E6", size=23)
        w_box = self.box("w = (-1,2)", width=3.0, color="#14532D", text_color="#DCFCE7", size=23)
        r_box = self.box("kết quả: (-7,0)", width=3.8, color="#713F12", text_color="#FEF3C7", size=23)

        panel = VGroup(v_box, n_box, w_box, r_box).arrange(DOWN, buff=0.18)
        self.mid_right(panel)

        calc1 = self.box("-2(3,1) = (-6,-2)", width=4.7, color="#7C3AED", text_color="#E9D5FF", size=22)
        calc2 = self.box("(-6,-2) + (-1,2) = (-7,0)", width=5.5, color="#166534", text_color="#DCFCE7", size=22)
        calc_panel = VGroup(calc1, calc2).arrange(DOWN, buff=0.18)
        calc_panel.move_to(DOWN * 2.58)

        end_dot = Dot(axes.c2p(-7, 0), color="#FACC15", radius=0.08)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))

        self.play(GrowArrow(v), FadeIn(v_box, shift=LEFT * 0.15))
        self.play(TransformFromCopy(v, neg2v), FadeIn(n_box, shift=LEFT * 0.15), FadeIn(calc1, shift=UP * 0.15))
        self.play(GrowArrow(w), FadeIn(w_box, shift=LEFT * 0.15))
        self.play(TransformFromCopy(w, w_shifted), run_time=1.0)
        self.play(GrowArrow(result), FadeIn(end_dot), FadeIn(r_box, shift=LEFT * 0.15), FadeIn(calc2, shift=UP * 0.15))

        halo = Circle(radius=0.35, color="#FACC15", stroke_width=4)
        halo.move_to(axes.c2p(-7, 0))
        self.play(Create(halo), halo.animate.scale(1.6).set_opacity(0), run_time=0.9)

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_span_cloud(self, bg):
        title = self.title("Span: tất cả vector tạo được bằng cách pha trộn")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v = self.vector_arrow(axes, (1, 0), "#38BDF8", 8)
        w = self.vector_arrow(axes, (0, 1), "#22C55E", 8)

        v_label = self.box("v=(1,0)", width=2.4, color="#0C4A6E", text_color="#E0F2FE", size=22)
        w_label = self.box("w=(0,1)", width=2.4, color="#14532D", text_color="#DCFCE7", size=22)

        v_label.next_to(axes.c2p(1, 0), DOWN, buff=0.18)
        w_label.next_to(axes.c2p(0, 1), LEFT, buff=0.18)

        panel1 = self.box("thay đổi hệ số", width=3.7, color="#1D4ED8", text_color="#DBEAFE", size=23)
        panel2 = self.box("ta đi tới nhiều điểm khác nhau", width=5.2, color="#7C3AED", text_color="#E9D5FF", size=23)

        panel = VGroup(panel1, panel2).arrange(DOWN, buff=0.22)
        self.top_right(panel)

        targets = [
            (2, 1), (4, 2), (-3, 2), (1, 4), (-2, -1),
            (5, -2), (-4, -3), (3, 5), (-6, 1), (0, -4)
        ]

        cloud = VGroup()
        dots = VGroup()

        for p in targets:
            arr = self.vector_arrow(axes, p, "#FACC15", 4, opacity=0.22)
            dot = Dot(axes.c2p(p[0], p[1]), color="#FACC15", radius=0.045)
            dot.set_opacity(0.65)
            cloud.add(arr)
            dots.add(dot)

        special = self.vector_arrow(axes, (4, 5), "#FACC15", 9)
        special_label = self.box("b = 4v + 5w", width=3.8, color="#713F12", text_color="#FEF3C7", size=24)
        special_label.next_to(axes.c2p(4, 5), LEFT, buff=0.2)

        note = self.box(
            "b thuộc span(v,w) nếu b viết được bằng c₁v + c₂w.",
            width=7.1,
            color="#713F12",
            text_color="#FEF3C7",
            size=24,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(v), FadeIn(v_label, shift=UP * 0.15))
        self.play(GrowArrow(w), FadeIn(w_label, shift=LEFT * 0.15))

        self.play(FadeIn(panel1, shift=LEFT * 0.2))
        self.play(LaggedStart(*[GrowArrow(a) for a in cloud], lag_ratio=0.05), FadeIn(dots), run_time=2.0)
        self.play(FadeIn(panel2, shift=LEFT * 0.2))
        self.play(GrowArrow(special), FadeIn(special_label, shift=UP * 0.15))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_exercise_bridge(self, bg):
        title = self.title("Video này giúp làm bài tập như thế nào?")

        c1 = VGroup(
            self.box("Câu 1, 2, 8", width=3.0, color="#1D4ED8", text_color="#DBEAFE", size=23),
            self.t("nhận dạng công thức và hệ số", size=21, color="#DBEAFE", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        c2 = VGroup(
            self.box("Câu 3, 4, 6", width=3.0, color="#166534", text_color="#DCFCE7", size=23),
            self.t("tính từng thành phần", size=21, color="#DCFCE7", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        c3 = VGroup(
            self.box("Câu 5, 9, 10", width=3.1, color="#7C3AED", text_color="#E9D5FF", size=23),
            self.t("hiểu span và cách biểu diễn", size=21, color="#E9D5FF", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        c4 = VGroup(
            self.box("Câu 7", width=2.0, color="#BE123C", text_color="#FFE4E6", size=23),
            self.t("hệ số âm đổi hướng", size=21, color="#FFE4E6", max_width=3.4, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        cards = VGroup(c1, c2, c3, c4).arrange(RIGHT, buff=0.30)
        cards.move_to(DOWN * 0.05)

        arrow_icons = VGroup(
            Arrow(LEFT * 0.5, RIGHT * 0.5, color="#38BDF8", stroke_width=5),
            Arrow(LEFT * 0.5, RIGHT * 0.5, color="#22C55E", stroke_width=5),
            Arrow(LEFT * 0.5, RIGHT * 0.5, color="#FACC15", stroke_width=5),
        ).arrange(RIGHT, buff=0.25)
        arrow_icons.next_to(cards, DOWN, buff=0.5)

        note = self.box(
            "Cách nghĩ chính: nhìn hệ số, nhìn hướng vector, rồi cộng lại.",
            width=7.4,
            color="#713F12",
            text_color="#FEF3C7",
            size=24,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=UP * 0.18) for card in cards], lag_ratio=0.12))
        self.play(LaggedStart(*[GrowArrow(a) for a in arrow_icons], lag_ratio=0.12))
        self.play(FadeIn(note, shift=UP * 0.18))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_summary(self, bg):
        title = self.title("Tóm tắt cực ngắn")

        s1 = self.box("Tổ hợp tuyến tính = hệ số × vector rồi cộng lại", width=7.2, color="#1D4ED8", text_color="#DBEAFE", size=26)
        s2 = self.box("Hệ số dương: cùng hướng | hệ số âm: ngược hướng", width=7.2, color="#166534", text_color="#DCFCE7", size=24)
        s3 = self.box("Hệ số 0: vector đó không đóng góp", width=6.4, color="#475569", text_color="#E2E8F0", size=24)
        s4 = self.box("Span là tập các vector tạo được từ tổ hợp tuyến tính", width=7.2, color="#7C3AED", text_color="#E9D5FF", size=24)

        steps = VGroup(s1, s2, s3, s4).arrange(DOWN, buff=0.27)
        steps.move_to(ORIGIN + UP * 0.05)

        icons = VGroup(
            Arrow(LEFT * 0.45, RIGHT * 0.45, color="#38BDF8", stroke_width=5),
            Arrow(RIGHT * 0.45, LEFT * 0.45, color="#FB7185", stroke_width=5),
            Circle(radius=0.11, color="#E2E8F0", stroke_width=4),
        ).arrange(RIGHT, buff=0.35)
        icons.to_edge(DOWN, buff=0.55)

        final = self.t(
            "Hiểu chuyển động của mũi tên là hiểu được công thức.",
            size=28,
            color="#F8FAFC",
            max_width=10.8,
            weight="BOLD",
        )
        final.next_to(icons, UP, buff=0.28)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(step, shift=UP * 0.15) for step in steps], lag_ratio=0.12))
        self.play(LaggedStart(GrowArrow(icons[0]), GrowArrow(icons[1]), Create(icons[2]), lag_ratio=0.15))
        self.play(FadeIn(final, shift=UP * 0.15))

        self.move_background(bg, 2.0)
        self.wait(2.2)