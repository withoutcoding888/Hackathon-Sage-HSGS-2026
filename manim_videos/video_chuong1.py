from manim import *

FONT = "Arial"


class Chuong1HePhuongTrinh(Scene):
    def construct(self):
        self.camera.background_color = "#020617"


        title = Text(
            "Chương 1:  hệ phương trình",
            font=FONT,
            font_size=38,
            color=WHITE
        )
        title.to_edge(UP)

        subtitle = Text(
            "nghiệm của hệ là gì?",
            font=FONT,
            font_size=26,
            color=BLUE_B
        )
        subtitle.next_to(title, DOWN, buff=0.25)

        formula = Text(
            "Ax = B",
            font=FONT,
            font_size=42,
            color=YELLOW
        )
        formula.move_to(ORIGIN)

        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=DOWN))
        self.play(Write(formula))
        self.wait(1.2)

        self.play(FadeOut(title), FadeOut(subtitle), FadeOut(formula))
        self.wait(0.3)


        axes = Axes(
            x_range=[-1, 5, 1],
            y_range=[-1, 5, 1],
            x_length=5.6,
            y_length=4.4,
            axis_config={
                "color": GREY_B,
                "include_tip": True
            }
        )
        axes.shift(LEFT * 3.5 + DOWN * 0.4)

        line1 = axes.plot(
            lambda x: (5 - x) / 2,
            x_range=[-1, 5],
            color=BLUE
        )

        line2 = axes.plot(
            lambda x: (11 - 3 * x) / 4,
            x_range=[-1, 5],
            color=ORANGE
        )

        point = Dot(
            axes.c2p(1, 2),
            radius=0.08,
            color=GREEN
        )

        point_label = Text(
            "(1, 2)",
            font=FONT,
            font_size=24,
            color=GREEN
        )
        point_label.next_to(point, UP + RIGHT, buff=0.12)

        eq1 = Text(
            "x + 2y = 5",
            font=FONT,
            font_size=28,
            color=BLUE
        )
        eq2 = Text(
            "3x + 4y = 11",
            font=FONT,
            font_size=28,
            color=ORANGE
        )

        eq_group = VGroup(eq1, eq2)
        eq_group.arrange(DOWN, aligned_edge=LEFT, buff=0.35)
        eq_group.shift(RIGHT * 3.15 + UP * 1.8)

        note = Text(
            "mỗi phương trình là một đường thẳng.",
            font=FONT,
            font_size=24,
            color=GREY_A
        )
        note.shift(RIGHT * 3.0 + UP * 0.75)

        result = Text(
            "Giao điểm là nghiệm của hệ.",
            font=FONT,
            font_size=24,
            color=GREEN
        )
        result.shift(RIGHT * 3.0 + DOWN * 0.2)

        self.play(Create(axes))
        self.play(Create(line1), Write(eq1))
        self.wait(0.4)
        self.play(Create(line2), Write(eq2))
        self.wait(0.4)
        self.play(GrowFromCenter(point), Write(point_label))
        self.play(Write(note))
        self.play(Write(result))
        self.wait(1.2)


        self.play(
            FadeOut(eq_group),
            FadeOut(note),
            FadeOut(result)
        )
        self.wait(0.3)


        algebra_title = Text(
            "Giải bằng đại số",
            font=FONT,
            font_size=32,
            color=YELLOW
        )
        algebra_title.shift(RIGHT * 3.1 + UP * 2.45)

        step1 = Text("1. Từ x + 2y = 5", font=FONT, font_size=22, color=WHITE)
        step2 = Text("2. Suy ra x = 5 - 2y", font=FONT, font_size=22, color=WHITE)
        step3 = Text("3. Thế vào phương trình còn lại", font=FONT, font_size=22, color=WHITE)
        step4 = Text("4. 3(5 - 2y) + 4y = 11", font=FONT, font_size=22, color=WHITE)
        step5 = Text("5. Suy ra y = 2", font=FONT, font_size=22, color=GREEN)
        step6 = Text("6. Thế lại được x = 1", font=FONT, font_size=22, color=GREEN)

        steps = VGroup(step1, step2, step3, step4, step5, step6)
        steps.arrange(DOWN, aligned_edge=LEFT, buff=0.18)
        steps.next_to(algebra_title, DOWN, aligned_edge=LEFT, buff=0.25)

        self.play(Write(algebra_title))

        for step in steps:
            self.play(FadeIn(step, shift=RIGHT), run_time=0.45)
            self.wait(0.15)

        self.wait(0.8)


        final_box = RoundedRectangle(
            width=5.5,
            height=0.95,
            corner_radius=0.2,
            color=GREEN
        )
        final_box.next_to(steps, DOWN, buff=0.35)
        final_box.align_to(steps, LEFT)

        final_text = Text(
            "Kết luận: Nghiệm là (1, 2)",
            font=FONT,
            font_size=22,
            color=GREEN
        )
        final_text.move_to(final_box.get_center())

        meaning = Text(
            "Điểm này thỏa mãn cả 2 phương trình.",
            font=FONT,
            font_size=18,
            color=GREY_A
        )
        meaning.next_to(final_box, DOWN, buff=0.18)
        meaning.align_to(final_box, LEFT)

        self.play(Create(final_box), Write(final_text))
        self.play(FadeIn(meaning, shift=UP))

        self.wait(4)