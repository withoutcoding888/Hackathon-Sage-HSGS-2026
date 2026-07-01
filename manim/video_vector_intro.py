from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#07111f"

FONT = "Arial"


class VectorIntroVideo(Scene):
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
        obj = self.t(content, size=44, color="#F8FAFC", max_width=12.2, weight="BOLD")
        obj.to_edge(UP, buff=0.32)
        return obj

    def box(self, content, width=5.0, color="#1E293B", text_color=WHITE, size=26):
        label = self.t(content, size=size, color=text_color, max_width=width - 0.45, weight="BOLD")

        rect = RoundedRectangle(
            width=max(width, label.width + 0.7),
            height=label.height + 0.45,
            corner_radius=0.18,
            stroke_color=color,
            stroke_width=2,
            fill_color=color,
            fill_opacity=0.88,
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
            line.set_opacity(0.36)
            grid.add(line)

        for y in range(-5, 6):
            line = Line(
                start=[-8, y, 0],
                end=[8, y, 0],
                color="#1E293B",
                stroke_width=1,
            )
            line.set_opacity(0.36)
            grid.add(line)

        glow1 = Circle(radius=1.25, stroke_width=0, fill_color="#2563EB", fill_opacity=0.07)
        glow2 = Circle(radius=1.15, stroke_width=0, fill_color="#7C3AED", fill_opacity=0.07)
        glow3 = Circle(radius=1.00, stroke_width=0, fill_color="#22C55E", fill_opacity=0.05)
        glow4 = Circle(radius=0.90, stroke_width=0, fill_color="#F59E0B", fill_opacity=0.05)

        glow1.move_to(LEFT * 6.4 + UP * 3.25)
        glow2.move_to(RIGHT * 6.4 + UP * 3.15)
        glow3.move_to(LEFT * 6.3 + DOWN * 3.25)
        glow4.move_to(RIGHT * 6.35 + DOWN * 3.15)

        return VGroup(grid, glow1, glow2, glow3, glow4)

    def move_background(self, bg, run_time=2):
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
            x_range=[-6.5, 6.5, 1],
            y_range=[-6.5, 6.5, 1],
            x_length=10.4,
            y_length=6.8,
            tips=True,
            axis_config={"color": "#94A3B8", "stroke_width": 3},
        )
        axes.move_to(DOWN * 0.35)
        return axes

    def axis_labels(self, axes):
        x_label = self.t("x", size=24, color="#94A3B8", weight="BOLD")
        y_label = self.t("y", size=24, color="#94A3B8", weight="BOLD")

        x_label.next_to(axes.x_axis.get_end(), RIGHT, buff=0.08)
        y_label.next_to(axes.y_axis.get_end(), UP, buff=0.08)

        return VGroup(x_label, y_label)

    def vector_arrow(self, axes, end_point, color="#38BDF8", stroke_width=7):
        return Arrow(
            start=axes.c2p(0, 0),
            end=axes.c2p(end_point[0], end_point[1]),
            buff=0,
            color=color,
            stroke_width=stroke_width,
            max_tip_length_to_length_ratio=0.09,
        )

    def translated_vector_arrow(self, axes, start_point, end_point, color="#22C55E", stroke_width=7):
        return Arrow(
            start=axes.c2p(start_point[0], start_point[1]),
            end=axes.c2p(end_point[0], end_point[1]),
            buff=0,
            color=color,
            stroke_width=stroke_width,
            max_tip_length_to_length_ratio=0.09,
        )

    def place_bottom_note(self, note):
        note.to_edge(DOWN, buff=0.55)
        return note

    def place_top_right(self, group):
        group.to_corner(UR, buff=0.55)
        group.shift(DOWN * 1.0)
        return group

    def place_mid_right(self, group):
        group.to_edge(RIGHT, buff=0.55)
        group.shift(DOWN * 0.15)
        return group

    def place_low_right(self, group):
        group.to_edge(RIGHT, buff=0.55)
        group.shift(DOWN * 1.15)
        return group

    def construct(self):
        bg = self.make_background()
        self.add(bg)

        self.scene_intro(bg)
        self.scene_meaning(bg)
        self.scene_two_notations(bg)
        self.scene_addition(bg)
        self.scene_scalar_multiply(bg)
        self.scene_negative_scalar(bg)
        self.scene_question_bridge(bg)
        self.scene_summary(bg)

    def scene_intro(self, bg):
        title = self.title("Vector là gì?")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v_arrow = self.vector_arrow(axes, (2, 1), color="#38BDF8")
        dot = Dot(axes.c2p(2, 1), color="#FACC15", radius=0.08)

        vector_label = self.box("v = (2,1)", width=2.9, color="#1D4ED8", text_color="#DBEAFE", size=29)
        vector_label.next_to(dot, UR, buff=0.25)

        idea1 = self.box("Vector là một mũi tên", width=4.2, color="#0C4A6E", text_color="#E0F2FE", size=26)
        idea2 = self.box("Có hướng và độ dài", width=4.2, color="#166534", text_color="#DCFCE7", size=26)
        panel = VGroup(idea1, idea2).arrange(DOWN, buff=0.28)
        self.place_top_right(panel)

        note = self.box(
            "Hãy nhìn vector như một cách di chuyển trên mặt phẳng.",
            width=7.2,
            color="#713F12",
            text_color="#FEF3C7",
            size=26,
        )
        self.place_bottom_note(note)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(v_arrow), FadeIn(dot, scale=1.2))
        self.play(FadeIn(vector_label, shift=UP * 0.2))
        self.play(FadeIn(idea1, shift=LEFT * 0.2))
        self.play(FadeIn(idea2, shift=LEFT * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.3)
        self.clear_scene(bg)

    def scene_meaning(self, bg):
        title = self.title("v = (2,1) nghĩa là gì?")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v_arrow = self.vector_arrow(axes, (2, 1), color="#38BDF8")

        horiz = Line(axes.c2p(0, 0), axes.c2p(2, 0), color="#FACC15", stroke_width=6)
        vert = Line(axes.c2p(2, 0), axes.c2p(2, 1), color="#FB7185", stroke_width=6)

        h_label = self.box("đi 2 theo x", width=3.0, color="#713F12", text_color="#FEF3C7", size=25)
        v_label = self.box("đi 1 theo y", width=3.0, color="#BE123C", text_color="#FFE4E6", size=25)
        formula = self.box("v = (2,1)", width=2.9, color="#1D4ED8", text_color="#DBEAFE", size=29)

        h_label.next_to(horiz, DOWN, buff=0.18)
        v_label.next_to(vert, RIGHT, buff=0.18)

        panel = VGroup(formula).arrange(DOWN)
        self.place_top_right(panel)

        note = self.box(
            "Thành phần đầu là x, thành phần sau là y.",
            width=6.0,
            color="#1E293B",
            text_color="#F8FAFC",
            size=26,
        )
        self.place_bottom_note(note)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(v_arrow))
        self.play(FadeIn(formula, shift=LEFT * 0.2))
        self.play(Create(horiz), FadeIn(h_label, shift=UP * 0.2))
        self.play(Create(vert), FadeIn(v_label, shift=RIGHT * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.3)
        self.clear_scene(bg)

    def scene_two_notations(self, bg):
        title = self.title("Hai cách viết vector")

        left = self.box("v = (2,1)", width=3.2, color="#1D4ED8", text_color="#DBEAFE", size=34)
        right = self.box("v = [2; 1]", width=3.1, color="#166534", text_color="#DCFCE7", size=34)

        pair = VGroup(left, right).arrange(RIGHT, buff=2.8)
        pair.move_to(DOWN * 0.05)

        arrow = DoubleArrow(
            left.get_right() + RIGHT * 0.25,
            right.get_left() + LEFT * 0.25,
            color="#F8FAFC",
            stroke_width=5,
        )

        note = self.box(
            "Dù viết kiểu nào thì vẫn là cùng một vector.",
            width=6.6,
            color="#713F12",
            text_color="#FEF3C7",
            size=27,
        )
        self.place_bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(left, scale=0.92), FadeIn(right, scale=0.92))
        self.play(GrowArrow(arrow))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.7)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_addition(self, bg):
        title = self.title("Cộng vector: đi theo u rồi đi tiếp theo v")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        u = self.vector_arrow(axes, (1, 2), color="#38BDF8")
        v_origin = self.vector_arrow(axes, (3, 4), color="#22C55E", stroke_width=5)
        v_shifted = self.translated_vector_arrow(axes, (1, 2), (4, 6), color="#22C55E")
        result = self.vector_arrow(axes, (4, 6), color="#FACC15", stroke_width=8)

        tip_dot = Dot(axes.c2p(1, 2), color="#38BDF8", radius=0.07)
        end_dot = Dot(axes.c2p(4, 6), color="#FACC15", radius=0.08)

        u_box = self.box("u = (1,2)", width=2.7, color="#0C4A6E", text_color="#E0F2FE", size=25)
        v_box = self.box("v = (3,4)", width=2.7, color="#14532D", text_color="#DCFCE7", size=25)
        r_box = self.box("u + v = (4,6)", width=3.7, color="#713F12", text_color="#FEF3C7", size=26)

        panel = VGroup(u_box, v_box, r_box).arrange(DOWN, buff=0.25)
        self.place_low_right(panel)

        note = self.box(
            "Cộng từng thành phần: (1+3, 2+4) = (4,6)",
            width=6.8,
            color="#7C3AED",
            text_color="#E9D5FF",
            size=25,
        )
        note.to_edge(DOWN, buff=0.45)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(u), FadeIn(tip_dot), FadeIn(u_box, shift=LEFT * 0.2))
        self.play(GrowArrow(v_origin), FadeIn(v_box, shift=LEFT * 0.2))
        self.play(TransformFromCopy(v_origin, v_shifted), run_time=1.1)
        self.play(GrowArrow(result), FadeIn(end_dot), FadeIn(r_box, shift=LEFT * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.9)
        self.wait(1.4)
        self.clear_scene(bg)

    def scene_scalar_multiply(self, bg):
        title = self.title("Nhân vector với số dương")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v = self.vector_arrow(axes, (2, -3), color="#38BDF8", stroke_width=6)
        two_v = self.vector_arrow(axes, (4, -6), color="#FACC15", stroke_width=8)

        v_box = self.box("v = (2,-3)", width=3.0, color="#0C4A6E", text_color="#E0F2FE", size=26)
        two_v_box = self.box("2v = (4,-6)", width=3.4, color="#713F12", text_color="#FEF3C7", size=27)
        explain = self.box("nhân từng thành phần với 2", width=4.5, color="#166534", text_color="#DCFCE7", size=24)

        panel = VGroup(v_box, two_v_box, explain).arrange(DOWN, buff=0.25)
        self.place_top_right(panel)

        note = self.box(
            "Số dương làm vector dài hơn hoặc ngắn hơn, nhưng vẫn giữ hướng.",
            width=7.2,
            color="#1E293B",
            text_color="#F8FAFC",
            size=25,
        )
        note.to_edge(DOWN, buff=0.45)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(v), FadeIn(v_box, shift=LEFT * 0.2))
        self.play(GrowArrow(two_v), FadeIn(two_v_box, shift=LEFT * 0.2))
        self.play(FadeIn(explain, shift=LEFT * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.3)
        self.clear_scene(bg)

    def scene_negative_scalar(self, bg):
        title = self.title("Nhân với số âm: vector đổi hướng")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        v = self.vector_arrow(axes, (3, -1), color="#38BDF8", stroke_width=7)
        neg_v = self.vector_arrow(axes, (-3, 1), color="#FB7185", stroke_width=7)

        origin_dot = Dot(axes.c2p(0, 0), color="#F8FAFC", radius=0.06)

        v_box = self.box("v = (3,-1)", width=3.0, color="#0C4A6E", text_color="#E0F2FE", size=26)
        neg_box = self.box("-v = (-3,1)", width=3.6, color="#BE123C", text_color="#FFE4E6", size=27)
        zero_box = self.box("0v = (0,0)", width=3.2, color="#475569", text_color="#E2E8F0", size=26)

        panel = VGroup(v_box, neg_box, zero_box).arrange(DOWN, buff=0.25)
        self.place_top_right(panel)

        zero_note = Circle(radius=0.13, color="#E2E8F0", stroke_width=4)
        zero_note.move_to(axes.c2p(0, 0))

        note = self.box(
            "Số âm đảo hướng. Nhân với 0 tạo ra vector 0.",
            width=6.4,
            color="#713F12",
            text_color="#FEF3C7",
            size=25,
        )
        note.to_edge(DOWN, buff=0.45)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels), FadeIn(origin_dot))
        self.play(GrowArrow(v), FadeIn(v_box, shift=LEFT * 0.2))
        self.play(GrowArrow(neg_v), FadeIn(neg_box, shift=LEFT * 0.2))
        self.play(Create(zero_note), FadeIn(zero_box, shift=LEFT * 0.2))
        self.play(FadeIn(note, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.4)
        self.clear_scene(bg)

    def scene_question_bridge(self, bg):
        title = self.title("Dùng video này để làm 10 câu bài tập")

        c1 = VGroup(
            self.box("Câu 1, 5, 7", width=3.0, color="#1D4ED8", text_color="#DBEAFE", size=25),
            self.t("Cộng, trừ và phối hợp phép tính", size=23, color="#DBEAFE", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.2)

        c2 = VGroup(
            self.box("Câu 2, 6, 9", width=3.0, color="#166534", text_color="#DCFCE7", size=25),
            self.t("Nhân vector với số", size=23, color="#DCFCE7", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.2)

        c3 = VGroup(
            self.box("Câu 3, 8", width=2.7, color="#BE123C", text_color="#FFE4E6", size=25),
            self.t("Hiểu số âm và vector 0", size=23, color="#FFE4E6", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.2)

        c4 = VGroup(
            self.box("Câu 4, 10", width=2.9, color="#7C3AED", text_color="#E9D5FF", size=25),
            self.t("Hiểu ý nghĩa hình học", size=23, color="#E9D5FF", max_width=3.8, weight="BOLD"),
        ).arrange(DOWN, buff=0.2)

        cards = VGroup(c1, c2, c3, c4).arrange(RIGHT, buff=0.32)
        cards.move_to(DOWN * 0.05)

        bottom = self.box(
            "Nếu nhớ được hình mũi tên, bạn sẽ làm bài nhanh hơn rất nhiều.",
            width=7.5,
            color="#713F12",
            text_color="#FEF3C7",
            size=26,
        )
        self.place_bottom_note(bottom)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=UP * 0.2) for card in cards], lag_ratio=0.12))
        self.play(FadeIn(bottom, shift=UP * 0.2))

        self.move_background(bg, 1.8)
        self.wait(1.5)
        self.clear_scene(bg)

    def scene_summary(self, bg):
        title = self.title("Tóm tắt cực ngắn")

        s1 = self.box("Vector = mũi tên có hướng", width=5.0, color="#1D4ED8", text_color="#DBEAFE", size=28)
        s2 = self.box("v = (a,b): đi a theo x, b theo y", width=6.5, color="#166534", text_color="#DCFCE7", size=27)
        s3 = self.box("Cộng vector = cộng từng thành phần", width=5.8, color="#7C3AED", text_color="#E9D5FF", size=27)
        s4 = self.box("Số âm đổi hướng, số 0 tạo vector 0", width=6.5, color="#713F12", text_color="#FEF3C7", size=27)

        steps = VGroup(s1, s2, s3, s4).arrange(DOWN, buff=0.32)
        steps.move_to(ORIGIN)

        final = self.t(
            "Hiểu hình mũi tên trước, công thức sẽ dễ hơn.",
            size=30,
            color="#F8FAFC",
            max_width=10.5,
            weight="BOLD",
        )
        final.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(step, shift=UP * 0.2) for step in steps], lag_ratio=0.13))
        self.play(FadeIn(final, shift=UP * 0.2))

        self.move_background(bg, 2.1)
        self.wait(2.4)