from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#07111f"

FONT = "Segoe UI"


class MatrixVectorPro(Scene):
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
        title = self.t(content, size=42, color="#F8FAFC", max_width=12.5, weight="BOLD")
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
            x_range=[-1, 8.5, 1],
            y_range=[-1, 8.8, 1],
            x_length=7.35,
            y_length=6.35,
            tips=True,
            axis_config={"color": "#94A3B8", "stroke_width": 3},
        )

        axes.move_to(LEFT * 2.35 + DOWN * 0.35)
        return axes

    def axis_labels(self, axes):
        x_label = self.t("x", size=22, color="#94A3B8", weight="BOLD")
        y_label = self.t("y", size=22, color="#94A3B8", weight="BOLD")

        x_label.next_to(axes.x_axis.get_end(), RIGHT, buff=0.08)
        y_label.next_to(axes.y_axis.get_end(), UP, buff=0.08)

        return VGroup(x_label, y_label)

    def vector_arrow(self, axes, end, color="#38BDF8", stroke_width=7, opacity=1):
        arrow = Arrow(
            start=axes.c2p(0, 0),
            end=axes.c2p(end[0], end[1]),
            buff=0,
            color=color,
            stroke_width=stroke_width,
            max_tip_length_to_length_ratio=0.085,
        )
        arrow.set_opacity(opacity)
        return arrow

    def shifted_arrow(self, axes, start, end, color="#22C55E", stroke_width=7, opacity=1):
        arrow = Arrow(
            start=axes.c2p(start[0], start[1]),
            end=axes.c2p(end[0], end[1]),
            buff=0,
            color=color,
            stroke_width=stroke_width,
            max_tip_length_to_length_ratio=0.085,
        )
        arrow.set_opacity(opacity)
        return arrow

    def matrix_mob(self, data, cell_w=0.72, cell_h=0.62, size=30, color="#F8FAFC"):
        rows = len(data)
        cols = len(data[0])

        entries = VGroup()
        cells = []

        for i, row in enumerate(data):
            row_cells = []

            for j, value in enumerate(row):
                item = self.t(value, size=size, color=color, weight="BOLD")
                item.move_to(
                    RIGHT * (j - (cols - 1) / 2) * cell_w
                    + DOWN * (i - (rows - 1) / 2) * cell_h
                )

                entries.add(item)
                row_cells.append(item)

            cells.append(row_cells)

        height = rows * cell_h + 0.45
        width = cols * cell_w + 0.48
        bracket_color = "#CBD5E1"
        lw = 4

        left_top = LEFT * width / 2 + UP * height / 2
        left_bottom = LEFT * width / 2 + DOWN * height / 2
        right_top = RIGHT * width / 2 + UP * height / 2
        right_bottom = RIGHT * width / 2 + DOWN * height / 2

        left_bracket = VGroup(
            Line(left_top, left_bottom, color=bracket_color, stroke_width=lw),
            Line(left_top, left_top + RIGHT * 0.18, color=bracket_color, stroke_width=lw),
            Line(left_bottom, left_bottom + RIGHT * 0.18, color=bracket_color, stroke_width=lw),
        )

        right_bracket = VGroup(
            Line(right_top, right_bottom, color=bracket_color, stroke_width=lw),
            Line(right_top, right_top + LEFT * 0.18, color=bracket_color, stroke_width=lw),
            Line(right_bottom, right_bottom + LEFT * 0.18, color=bracket_color, stroke_width=lw),
        )

        group = VGroup(entries, left_bracket, right_bracket)
        group.cells = cells
        return group

    def bottom_note(self, mob):
        mob.to_edge(DOWN, buff=0.48)
        return mob

    def top_right(self, mob):
        mob.to_corner(UR, buff=0.5)
        mob.shift(DOWN * 0.9)
        return mob

    def mid_right(self, mob):
        mob.to_edge(RIGHT, buff=0.55)
        mob.shift(DOWN * 0.05)
        return mob

    def construct(self):
        bg = self.make_background()
        self.add(bg)

        self.scene_intro(bg)
        self.scene_dimension(bg)
        self.scene_row_highlight(bg)
        self.scene_column_view(bg)
        self.scene_big_example(bg)
        self.scene_identity_and_size(bg)
        self.scene_exercise_bridge(bg)
        self.scene_summary(bg)

    def scene_intro(self, bg):
        title = self.title("Ma trận nhân vector: A · x")

        formula = self.box("A · x = vector mới", width=5.1, color="#1D4ED8", text_color="#DBEAFE", size=34)
        formula.move_to(UP * 0.85)

        A = self.matrix_mob([["1", "2"], ["3", "4"]], size=31)
        x = self.matrix_mob([["1"], ["1"]], size=31)
        result = self.matrix_mob([["3"], ["7"]], size=31)

        A.move_to(LEFT * 3.85 + DOWN * 0.35)
        x.move_to(LEFT * 1.1 + DOWN * 0.35)
        result.move_to(RIGHT * 2.85 + DOWN * 0.35)

        dot = self.t("·", size=46, color="#CBD5E1", weight="BOLD")
        eq = self.t("=", size=46, color="#CBD5E1", weight="BOLD")
        dot.move_to((A.get_right() + x.get_left()) / 2)
        eq.move_to((x.get_right() + result.get_left()) / 2)

        label1 = self.box("ma trận A", width=2.7, color="#7C3AED", text_color="#E9D5FF", size=23)
        label2 = self.box("vector x", width=2.7, color="#166534", text_color="#DCFCE7", size=23)
        label3 = self.box("kết quả Ax", width=2.9, color="#713F12", text_color="#FEF3C7", size=23)

        label1.next_to(A, DOWN, buff=0.35)
        label2.next_to(x, DOWN, buff=0.35)
        label3.next_to(result, DOWN, buff=0.35)

        note = self.box(
            "Ý tưởng: A dùng các số bên trong nó để biến x thành một vector mới.",
            width=8.4,
            color="#0F172A",
            text_color="#F8FAFC",
            size=24,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(formula, scale=0.92))
        self.play(FadeIn(A, shift=UP * 0.15), FadeIn(label1, shift=UP * 0.15))
        self.play(FadeIn(dot), FadeIn(x, shift=UP * 0.15), FadeIn(label2, shift=UP * 0.15))
        self.play(FadeIn(eq), FadeIn(result, shift=UP * 0.15), FadeIn(label3, shift=UP * 0.15))
        self.play(FadeIn(note, shift=UP * 0.15))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_dimension(self, bg):
        title = self.title("Điều kiện để nhân được Ax")

        A = self.matrix_mob([["", "", ""], ["", "", ""]], size=26)
        x = self.matrix_mob([[""], [""], [""]], size=26)
        result = self.matrix_mob([[""], [""]], size=26)

        A.move_to(LEFT * 3.6 + UP * 0.25)
        x.move_to(LEFT * 0.55 + UP * 0.25)
        result.move_to(RIGHT * 2.75 + UP * 0.25)

        A_rect = SurroundingRectangle(A, color="#38BDF8", buff=0.18, corner_radius=0.12)
        x_rect = SurroundingRectangle(x, color="#22C55E", buff=0.18, corner_radius=0.12)
        r_rect = SurroundingRectangle(result, color="#FACC15", buff=0.18, corner_radius=0.12)

        dot = self.t("·", size=46, color="#CBD5E1", weight="BOLD")
        eq = self.t("=", size=46, color="#CBD5E1", weight="BOLD")
        dot.move_to((A.get_right() + x.get_left()) / 2)
        eq.move_to((x.get_right() + result.get_left()) / 2)

        label_A = self.box("A là 2×3", width=2.7, color="#0C4A6E", text_color="#E0F2FE", size=23)
        label_x = self.box("x có 3 thành phần", width=3.5, color="#14532D", text_color="#DCFCE7", size=23)
        label_r = self.box("Ax có 2 thành phần", width=3.5, color="#713F12", text_color="#FEF3C7", size=23)

        label_A.next_to(A, DOWN, buff=0.35)
        label_x.next_to(x, DOWN, buff=0.35)
        label_r.next_to(result, DOWN, buff=0.35)

        rule1 = self.box("số cột của A", width=3.4, color="#1D4ED8", text_color="#DBEAFE", size=23)
        rule2 = self.box("=", width=1.1, color="#475569", text_color="#E2E8F0", size=24)
        rule3 = self.box("số thành phần của x", width=4.0, color="#166534", text_color="#DCFCE7", size=23)

        rule = VGroup(rule1, rule2, rule3).arrange(RIGHT, buff=0.18)
        self.bottom_note(rule)

        self.play(Write(title))
        self.play(FadeIn(A, shift=UP * 0.15), Create(A_rect), FadeIn(label_A, shift=UP * 0.15))
        self.play(FadeIn(dot), FadeIn(x, shift=UP * 0.15), Create(x_rect), FadeIn(label_x, shift=UP * 0.15))
        self.play(FadeIn(eq), FadeIn(result, shift=UP * 0.15), Create(r_rect), FadeIn(label_r, shift=UP * 0.15))
        self.play(LaggedStart(FadeIn(rule1, shift=UP * 0.15), FadeIn(rule2), FadeIn(rule3, shift=UP * 0.15), lag_ratio=0.15))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_row_highlight(self, bg):
        title = self.title("Cách tính: từng hàng nhân với vector x")

        A = self.matrix_mob([["1", "2"], ["3", "4"]], size=32)
        x = self.matrix_mob([["1"], ["1"]], size=32)
        r = self.matrix_mob([["3"], ["7"]], size=32)

        A.move_to(LEFT * 4.2 + UP * 0.35)
        x.move_to(LEFT * 1.6 + UP * 0.35)
        r.move_to(RIGHT * 2.9 + UP * 0.35)

        dot = self.t("·", size=46, color="#CBD5E1", weight="BOLD")
        eq = self.t("=", size=46, color="#CBD5E1", weight="BOLD")
        dot.move_to((A.get_right() + x.get_left()) / 2)
        eq.move_to((x.get_right() + r.get_left()) / 2)

        row1 = VGroup(*A.cells[0])
        row2 = VGroup(*A.cells[1])

        row1_h = SurroundingRectangle(row1, color="#38BDF8", buff=0.12, corner_radius=0.08)
        row2_h = SurroundingRectangle(row2, color="#FACC15", buff=0.12, corner_radius=0.08)

        x_h = SurroundingRectangle(x, color="#22C55E", buff=0.16, corner_radius=0.10)

        calc1 = self.box("hàng 1: 1·1 + 2·1 = 3", width=5.25, color="#0C4A6E", text_color="#E0F2FE", size=23)
        calc2 = self.box("hàng 2: 3·1 + 4·1 = 7", width=5.25, color="#713F12", text_color="#FEF3C7", size=23)

        panel = VGroup(calc1, calc2).arrange(DOWN, buff=0.22)
        self.top_right(panel)

        note = self.box(
            "Mỗi hàng của A tạo ra một số trong vector kết quả.",
            width=7.1,
            color="#1D4ED8",
            text_color="#DBEAFE",
            size=24,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(A, shift=UP * 0.15), FadeIn(dot), FadeIn(x, shift=UP * 0.15), FadeIn(eq), Create(x_h))
        self.play(Create(row1_h), FadeIn(calc1, shift=LEFT * 0.15))
        self.play(FadeIn(r.cells[0][0], shift=UP * 0.15))
        self.play(ReplacementTransform(row1_h, row2_h), FadeIn(calc2, shift=LEFT * 0.15))
        self.play(FadeIn(r.cells[1][0], shift=UP * 0.15), FadeIn(r[1]), FadeIn(r[2]))
        self.play(FadeIn(note, shift=UP * 0.15))

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_column_view(self, bg):
        title = self.title("Cách hiểu sâu: Ax là tổ hợp tuyến tính của các cột")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        col1 = self.vector_arrow(axes, (1, 3), "#38BDF8", 8)
        col2 = self.vector_arrow(axes, (2, 4), "#22C55E", 8)

        col2_shifted = self.shifted_arrow(axes, (1, 3), (3, 7), "#22C55E", 8)
        result = self.vector_arrow(axes, (3, 7), "#FACC15", 10)

        label1 = self.box("cột 1 = (1,3)", width=3.35, color="#0C4A6E", text_color="#E0F2FE", size=22)
        label2 = self.box("cột 2 = (2,4)", width=3.35, color="#14532D", text_color="#DCFCE7", size=22)
        label3 = self.box("Ax = (3,7)", width=2.75, color="#713F12", text_color="#FEF3C7", size=22)

        panel = VGroup(label1, label2, label3).arrange(DOWN, buff=0.2)
        self.top_right(panel)

        formula = self.box(
            "x=(1,1) nên Ax = 1·cột 1 + 1·cột 2",
            width=7.4,
            color="#7C3AED",
            text_color="#E9D5FF",
            size=24,
        )
        self.bottom_note(formula)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(col1), FadeIn(label1, shift=LEFT * 0.15))
        self.play(GrowArrow(col2), FadeIn(label2, shift=LEFT * 0.15))
        self.play(TransformFromCopy(col2, col2_shifted), run_time=1.0)
        self.play(GrowArrow(result), FadeIn(label3, shift=LEFT * 0.15))
        self.play(FadeIn(formula, shift=UP * 0.15))

        halo = Circle(radius=0.32, color="#FACC15", stroke_width=4)
        halo.move_to(axes.c2p(3, 7))
        self.play(Create(halo), halo.animate.scale(1.6).set_opacity(0), run_time=0.9)

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_big_example(self, bg):
        title = self.title("Ví dụ khác: A=[[1,3],[2,4]], x=(2,1)")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        col1 = self.vector_arrow(axes, (1, 2), "#38BDF8", 8)
        col1_two = self.vector_arrow(axes, (2, 4), "#38BDF8", 9)
        col2_shifted = self.shifted_arrow(axes, (2, 4), (5, 8), "#22C55E", 8)
        result = self.vector_arrow(axes, (5, 8), "#FACC15", 10)

        label1 = self.box("2·cột 1 = 2(1,2) = (2,4)", width=5.7, color="#0C4A6E", text_color="#E0F2FE", size=22)
        label2 = self.box("1·cột 2 = (3,4)", width=4.1, color="#14532D", text_color="#DCFCE7", size=22)
        label3 = self.box("Ax = (5,8)", width=2.75, color="#713F12", text_color="#FEF3C7", size=22)

        panel = VGroup(label1, label2, label3).arrange(DOWN, buff=0.2)
        self.top_right(panel)

        formula = self.box(
            "Ax = 2(1,2) + 1(3,4) = (5,8)",
            width=6.8,
            color="#7C3AED",
            text_color="#E9D5FF",
            size=24,
        )
        self.bottom_note(formula)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(col1))
        self.play(TransformFromCopy(col1, col1_two), FadeIn(label1, shift=LEFT * 0.15))
        self.play(GrowArrow(col2_shifted), FadeIn(label2, shift=LEFT * 0.15))
        self.play(GrowArrow(result), FadeIn(label3, shift=LEFT * 0.15))
        self.play(FadeIn(formula, shift=UP * 0.15))

        halo = Circle(radius=0.32, color="#FACC15", stroke_width=4)
        halo.move_to(axes.c2p(5, 8))
        self.play(Create(halo), halo.animate.scale(1.6).set_opacity(0), run_time=0.9)

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_identity_and_size(self, bg):
        title = self.title("Hai mẫu câu rất hay gặp")

        card1 = self.box(
            "A là 3×2, x có 2 thành phần → Ax có 3 thành phần",
            width=8.2,
            color="#1D4ED8",
            text_color="#DBEAFE",
            size=24,
        )

        card2 = self.box(
            "Ma trận đơn vị I không đổi vector: Ix = x",
            width=6.5,
            color="#166534",
            text_color="#DCFCE7",
            size=24,
        )

        card3 = self.box(
            "A là 2×3 → Ax là tổ hợp tuyến tính của 3 cột",
            width=7.4,
            color="#7C3AED",
            text_color="#E9D5FF",
            size=24,
        )

        cards = VGroup(card1, card2, card3).arrange(DOWN, buff=0.28)
        cards.move_to(UP * 0.35)

        I = self.matrix_mob([["1", "0"], ["0", "1"]], size=29)
        x = self.matrix_mob([["7"], ["-2"]], size=29)
        r = self.matrix_mob([["7"], ["-2"]], size=29)

        I.move_to(LEFT * 3.0 + DOWN * 2.55)
        x.move_to(LEFT * 0.7 + DOWN * 2.55)
        r.move_to(RIGHT * 2.5 + DOWN * 2.55)

        dot = self.t("·", size=40, color="#CBD5E1", weight="BOLD")
        eq = self.t("=", size=40, color="#CBD5E1", weight="BOLD")
        dot.move_to((I.get_right() + x.get_left()) / 2)
        eq.move_to((x.get_right() + r.get_left()) / 2)

        self.play(Write(title))
        self.play(FadeIn(card1, shift=UP * 0.15))
        self.play(FadeIn(card2, shift=UP * 0.15))
        self.play(FadeIn(I, shift=UP * 0.12), FadeIn(dot), FadeIn(x, shift=UP * 0.12), FadeIn(eq), FadeIn(r, shift=UP * 0.12))
        self.play(FadeIn(card3, shift=UP * 0.15))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_exercise_bridge(self, bg):
        title = self.title("Video này giúp làm 10 câu bài tập")

        c1 = VGroup(
            self.box("Câu 1, 4, 5, 8, 9", width=4.1, color="#166534", text_color="#DCFCE7", size=23),
            self.t("tính Ax bằng từng hàng", size=21, color="#DCFCE7", max_width=4.0, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        c2 = VGroup(
            self.box("Câu 2, 6", width=2.7, color="#1D4ED8", text_color="#DBEAFE", size=23),
            self.t("kiểm tra kích thước", size=21, color="#DBEAFE", max_width=3.6, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        c3 = VGroup(
            self.box("Câu 3, 7, 10", width=3.4, color="#7C3AED", text_color="#E9D5FF", size=23),
            self.t("hiểu Ax theo cột", size=21, color="#E9D5FF", max_width=3.6, weight="BOLD"),
        ).arrange(DOWN, buff=0.17)

        cards = VGroup(c1, c2, c3).arrange(RIGHT, buff=0.35)
        cards.move_to(UP * 0.15)

        icon1 = Arrow(LEFT * 0.45, RIGHT * 0.45, color="#38BDF8", stroke_width=5)
        icon2 = Arrow(LEFT * 0.45, RIGHT * 0.45, color="#22C55E", stroke_width=5)
        icon3 = Arrow(LEFT * 0.45, RIGHT * 0.45, color="#FACC15", stroke_width=5)

        icons = VGroup(icon1, icon2, icon3).arrange(RIGHT, buff=0.3)
        icons.next_to(cards, DOWN, buff=0.55)

        note = self.box(
            "Nhớ: hàng để tính nhanh, cột để hiểu ý nghĩa sâu.",
            width=7.0,
            color="#713F12",
            text_color="#FEF3C7",
            size=25,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=UP * 0.18) for card in cards], lag_ratio=0.12))
        self.play(LaggedStart(GrowArrow(icon1), GrowArrow(icon2), GrowArrow(icon3), lag_ratio=0.12))
        self.play(FadeIn(note, shift=UP * 0.18))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_summary(self, bg):
        title = self.title("Tóm tắt cực ngắn")

        s1 = self.box("Nếu A là m×n và x có n thành phần, thì Ax xác định", width=8.0, color="#1D4ED8", text_color="#DBEAFE", size=25)
        s2 = self.box("Kết quả Ax có m thành phần", width=5.4, color="#166534", text_color="#DCFCE7", size=25)
        s3 = self.box("Cách tính: từng hàng của A nhân với x", width=6.2, color="#0C4A6E", text_color="#E0F2FE", size=25)
        s4 = self.box("Cách hiểu: Ax là tổ hợp tuyến tính của các cột của A", width=7.8, color="#7C3AED", text_color="#E9D5FF", size=25)

        steps = VGroup(s1, s2, s3, s4).arrange(DOWN, buff=0.27)
        steps.move_to(ORIGIN + UP * 0.05)

        final = self.t(
            "Muốn tính nhanh: dùng hàng. Muốn hiểu sâu: nhìn cột.",
            size=28,
            color="#F8FAFC",
            max_width=11.2,
            weight="BOLD",
        )
        final.to_edge(DOWN, buff=0.52)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(step, shift=UP * 0.15) for step in steps], lag_ratio=0.12))
        self.play(FadeIn(final, shift=UP * 0.15))

        self.move_background(bg, 2.0)
        self.wait(2.2)