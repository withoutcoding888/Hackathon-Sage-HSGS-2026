from manim import *

config.pixel_width = 1920
config.pixel_height = 1080
config.frame_rate = 30
config.background_color = "#07111f"

FONT = "Segoe UI"


class MatrixVectorVideo(Scene):
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
        obj = self.t(content, size=42, color="#F8FAFC", max_width=12.5, weight="BOLD")
        obj.to_edge(UP, buff=0.28)
        return obj

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
            x_range=[-1, 8, 1],
            y_range=[-1, 8, 1],
            x_length=7.2,
            y_length=6.0,
            tips=True,
            axis_config={"color": "#94A3B8", "stroke_width": 3},
        )
        axes.move_to(LEFT * 2.25 + DOWN * 0.35)
        return axes

    def axis_labels(self, axes):
        x_label = self.t("x", size=22, color="#94A3B8", weight="BOLD")
        y_label = self.t("y", size=22, color="#94A3B8", weight="BOLD")
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

    def matrix_mob(self, data, cell_w=0.72, cell_h=0.62, size=28, color="#F8FAFC"):
        rows = len(data)
        cols = len(data[0])

        entries = VGroup()

        for i, row in enumerate(data):
            for j, value in enumerate(row):
                item = self.t(value, size=size, color=color, weight="BOLD")
                item.move_to(
                    RIGHT * (j - (cols - 1) / 2) * cell_w
                    + DOWN * (i - (rows - 1) / 2) * cell_h
                )
                entries.add(item)

        height = rows * cell_h + 0.45
        width = cols * cell_w + 0.48

        left_top = LEFT * width / 2 + UP * height / 2
        left_bottom = LEFT * width / 2 + DOWN * height / 2
        right_top = RIGHT * width / 2 + UP * height / 2
        right_bottom = RIGHT * width / 2 + DOWN * height / 2

        bracket_color = "#CBD5E1"
        lw = 4

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

        return VGroup(entries, left_bracket, right_bracket)

    def bottom_note(self, mob):
        mob.to_edge(DOWN, buff=0.48)
        return mob

    def top_right(self, mob):
        mob.to_corner(UR, buff=0.5)
        mob.shift(DOWN * 0.9)
        return mob

    def construct(self):
        bg = self.make_background()
        self.add(bg)

        self.scene_intro(bg)
        self.scene_dimension(bg)
        self.scene_row_method(bg)
        self.scene_column_method(bg)
        self.scene_example(bg)
        self.scene_more_examples(bg)
        self.scene_exercise_bridge(bg)
        self.scene_summary(bg)

    def scene_intro(self, bg):
        title = self.title("Phép nhân ma trận với vector")

        formula = self.box("A · x", width=2.4, color="#1D4ED8", text_color="#DBEAFE", size=40)
        formula.move_to(UP * 0.8)

        left = self.box("ma trận A", width=3.0, color="#7C3AED", text_color="#E9D5FF", size=26)
        mid = self.box("vector x", width=2.8, color="#166534", text_color="#DCFCE7", size=26)
        right = self.box("vector Ax", width=3.0, color="#713F12", text_color="#FEF3C7", size=26)

        row = VGroup(left, mid, right).arrange(RIGHT, buff=0.55)
        row.move_to(DOWN * 0.65)

        arrow1 = Arrow(left.get_right(), mid.get_left(), color="#94A3B8", stroke_width=4, buff=0.12)
        arrow2 = Arrow(mid.get_right(), right.get_left(), color="#94A3B8", stroke_width=4, buff=0.12)

        note = self.box(
            "Ma trận có thể biến vector đầu vào thành vector đầu ra.",
            width=7.2,
            color="#0F172A",
            text_color="#F8FAFC",
            size=25,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(formula, scale=0.92))
        self.play(FadeIn(left, shift=UP * 0.15), GrowArrow(arrow1))
        self.play(FadeIn(mid, shift=UP * 0.15), GrowArrow(arrow2))
        self.play(FadeIn(right, shift=UP * 0.15))
        self.play(FadeIn(note, shift=UP * 0.15))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_dimension(self, bg):
        title = self.title("Khi nào Ax xác định?")

        a = self.matrix_mob([["", "", ""], ["", "", ""]], cell_w=0.62, cell_h=0.62, size=24)
        a_box = SurroundingRectangle(a, color="#38BDF8", buff=0.22, corner_radius=0.12)
        a_group = VGroup(a, a_box)
        a_group.move_to(LEFT * 3.4 + UP * 0.25)

        x = self.matrix_mob([[""], [""], [""]], cell_w=0.62, cell_h=0.62, size=24)
        x_box = SurroundingRectangle(x, color="#22C55E", buff=0.22, corner_radius=0.12)
        x_group = VGroup(x, x_box)
        x_group.move_to(LEFT * 0.55 + UP * 0.25)

        result = self.matrix_mob([[""], [""]], cell_w=0.62, cell_h=0.62, size=24)
        result_box = SurroundingRectangle(result, color="#FACC15", buff=0.22, corner_radius=0.12)
        r_group = VGroup(result, result_box)
        r_group.move_to(RIGHT * 2.7 + UP * 0.25)

        label_a = self.box("A là 2×3", width=2.7, color="#0C4A6E", text_color="#E0F2FE", size=23)
        label_x = self.box("x có 3 thành phần", width=3.4, color="#14532D", text_color="#DCFCE7", size=23)
        label_r = self.box("Ax có 2 thành phần", width=3.5, color="#713F12", text_color="#FEF3C7", size=23)

        label_a.next_to(a_group, DOWN, buff=0.32)
        label_x.next_to(x_group, DOWN, buff=0.32)
        label_r.next_to(r_group, DOWN, buff=0.32)

        times = self.t("·", size=48, color="#CBD5E1", weight="BOLD")
        equal = self.t("=", size=48, color="#CBD5E1", weight="BOLD")
        times.move_to((a_group.get_right() + x_group.get_left()) / 2)
        equal.move_to((x_group.get_right() + r_group.get_left()) / 2)

        note = self.box(
            "Số cột của A phải bằng số thành phần của x.",
            width=6.8,
            color="#1D4ED8",
            text_color="#DBEAFE",
            size=25,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(a_group, shift=UP * 0.15), FadeIn(label_a, shift=UP * 0.15))
        self.play(FadeIn(times))
        self.play(FadeIn(x_group, shift=UP * 0.15), FadeIn(label_x, shift=UP * 0.15))
        self.play(FadeIn(equal))
        self.play(FadeIn(r_group, shift=UP * 0.15), FadeIn(label_r, shift=UP * 0.15))
        self.play(FadeIn(note, shift=UP * 0.15))

        self.move_background(bg, 1.7)
        self.wait(1.2)
        self.clear_scene(bg)

    def scene_row_method(self, bg):
        title = self.title("Cách 1: lấy từng hàng nhân với vector x")

        A = self.matrix_mob([["1", "2"], ["3", "4"]], size=30)
        x = self.matrix_mob([["1"], ["1"]], size=30)
        r = self.matrix_mob([["3"], ["7"]], size=30)

        A.move_to(LEFT * 4.2 + UP * 0.35)
        x.move_to(LEFT * 1.65 + UP * 0.35)
        r.move_to(RIGHT * 2.95 + UP * 0.35)

        dot = self.t("·", size=44, color="#CBD5E1", weight="BOLD")
        eq = self.t("=", size=44, color="#CBD5E1", weight="BOLD")
        dot.move_to((A.get_right() + x.get_left()) / 2)
        eq.move_to((x.get_right() + r.get_left()) / 2)

        row1_highlight = SurroundingRectangle(A[0][0:2], color="#38BDF8", buff=0.10, corner_radius=0.08)
        row2_highlight = SurroundingRectangle(A[0][2:4], color="#FACC15", buff=0.10, corner_radius=0.08)

        calc1 = self.box("hàng 1: 1·1 + 2·1 = 3", width=5.2, color="#0C4A6E", text_color="#E0F2FE", size=23)
        calc2 = self.box("hàng 2: 3·1 + 4·1 = 7", width=5.2, color="#713F12", text_color="#FEF3C7", size=23)

        panel = VGroup(calc1, calc2).arrange(DOWN, buff=0.22)
        self.top_right(panel)

        note = self.box(
            "Mỗi hàng tạo ra một thành phần của vector kết quả.",
            width=7.0,
            color="#1D4ED8",
            text_color="#DBEAFE",
            size=24,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(FadeIn(A, shift=UP * 0.15), FadeIn(dot), FadeIn(x, shift=UP * 0.15), FadeIn(eq))
        self.play(Create(row1_highlight), FadeIn(calc1, shift=LEFT * 0.15))
        self.play(FadeIn(r[0][0], shift=UP * 0.15))
        self.play(ReplacementTransform(row1_highlight, row2_highlight), FadeIn(calc2, shift=LEFT * 0.15))
        self.play(FadeIn(r[0][1], shift=UP * 0.15), FadeIn(r[1]), FadeIn(r[2]))
        self.play(FadeIn(note, shift=UP * 0.15))

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_column_method(self, bg):
        title = self.title("Cách 2: Ax là tổ hợp tuyến tính của các cột của A")

        axes = self.make_axes()
        labels = self.axis_labels(axes)

        col1 = self.vector_arrow(axes, (1, 3), "#38BDF8", 8)
        col2 = self.vector_arrow(axes, (2, 4), "#22C55E", 8)
        result = self.vector_arrow(axes, (3, 7), "#FACC15", 10)

        col2_shift = self.shifted_arrow(axes, (1, 3), (3, 7), "#22C55E", 8)

        label1 = self.box("cột 1 = (1,3)", width=3.4, color="#0C4A6E", text_color="#E0F2FE", size=22)
        label2 = self.box("cột 2 = (2,4)", width=3.4, color="#14532D", text_color="#DCFCE7", size=22)
        label3 = self.box("Ax = (3,7)", width=2.9, color="#713F12", text_color="#FEF3C7", size=22)

        panel = VGroup(label1, label2, label3).arrange(DOWN, buff=0.2)
        self.top_right(panel)

        formula = self.box(
            "Ax = 1·cột 1 + 1·cột 2",
            width=6.2,
            color="#7C3AED",
            text_color="#E9D5FF",
            size=24,
        )
        self.bottom_note(formula)

        self.play(Write(title))
        self.play(Create(axes), FadeIn(labels))
        self.play(GrowArrow(col1), FadeIn(label1, shift=LEFT * 0.15))
        self.play(GrowArrow(col2), FadeIn(label2, shift=LEFT * 0.15))
        self.play(TransformFromCopy(col2, col2_shift), run_time=1.0)
        self.play(GrowArrow(result), FadeIn(label3, shift=LEFT * 0.15))
        self.play(FadeIn(formula, shift=UP * 0.15))

        halo = Circle(radius=0.32, color="#FACC15", stroke_width=4)
        halo.move_to(axes.c2p(3, 7))
        self.play(Create(halo), halo.animate.scale(1.6).set_opacity(0), run_time=0.9)

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_example(self, bg):
        title = self.title("Ví dụ chính: A=[[1,2],[3,4]], x=(1,1)")

        A = self.matrix_mob([["1", "2"], ["3", "4"]], size=32)
        x = self.matrix_mob([["1"], ["1"]], size=32)
        r = self.matrix_mob([["3"], ["7"]], size=32)

        A.move_to(LEFT * 3.8 + UP * 0.45)
        x.move_to(LEFT * 1.2 + UP * 0.45)
        r.move_to(RIGHT * 2.8 + UP * 0.45)

        dot = self.t("·", size=46, color="#CBD5E1", weight="BOLD")
        eq = self.t("=", size=46, color="#CBD5E1", weight="BOLD")
        dot.move_to((A.get_right() + x.get_left()) / 2)
        eq.move_to((x.get_right() + r.get_left()) / 2)

        calc1 = self.box("1·1 + 2·1 = 3", width=4.2, color="#0C4A6E", text_color="#E0F2FE", size=25)
        calc2 = self.box("3·1 + 4·1 = 7", width=4.2, color="#713F12", text_color="#FEF3C7", size=25)
        calc3 = self.box("Vậy Ax = (3,7)", width=4.0, color="#166534", text_color="#DCFCE7", size=25)

        panel = VGroup(calc1, calc2, calc3).arrange(DOWN, buff=0.24)
        panel.move_to(DOWN * 2.0)

        self.play(Write(title))
        self.play(FadeIn(A, shift=UP * 0.15), FadeIn(dot), FadeIn(x, shift=UP * 0.15), FadeIn(eq))
        self.play(FadeIn(calc1, shift=UP * 0.15))
        self.play(FadeIn(r[0][0], shift=UP * 0.15))
        self.play(FadeIn(calc2, shift=UP * 0.15))
        self.play(FadeIn(r[0][1], shift=UP * 0.15), FadeIn(r[1]), FadeIn(r[2]))
        self.play(FadeIn(calc3, shift=UP * 0.15))

        self.move_background(bg, 1.8)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_more_examples(self, bg):
        title = self.title("Một vài mẫu câu hay gặp")

        ex1 = self.box("A là 3×2, x có 2 thành phần → Ax có 3 thành phần", width=8.0, color="#1D4ED8", text_color="#DBEAFE", size=24)
        ex2 = self.box("A=[[2,0],[0,3]], x=(4,5) → Ax=(8,15)", width=7.2, color="#166534", text_color="#DCFCE7", size=24)
        ex3 = self.box("A=[[1,0],[0,1]] là ma trận đơn vị → Ax=x", width=7.2, color="#7C3AED", text_color="#E9D5FF", size=24)
        ex4 = self.box("A là 2×3 → Ax là tổ hợp tuyến tính của 3 cột", width=7.4, color="#713F12", text_color="#FEF3C7", size=24)

        cards = VGroup(ex1, ex2, ex3, ex4).arrange(DOWN, buff=0.26)
        cards.move_to(ORIGIN + UP * 0.15)

        icons = VGroup(
            self.t("m×n", size=34, color="#DBEAFE", weight="BOLD"),
            Arrow(LEFT * 0.45, RIGHT * 0.45, color="#22C55E", stroke_width=5),
            self.t("Ax", size=34, color="#FEF3C7", weight="BOLD"),
        ).arrange(RIGHT, buff=0.35)
        icons.to_edge(DOWN, buff=0.55)

        self.play(Write(title))
        self.play(FadeIn(ex1, shift=UP * 0.15))
        self.play(FadeIn(ex2, shift=UP * 0.15))
        self.play(FadeIn(ex3, shift=UP * 0.15))
        self.play(FadeIn(ex4, shift=UP * 0.15))
        self.play(FadeIn(icons[0], shift=UP * 0.15), GrowArrow(icons[1]), FadeIn(icons[2], shift=UP * 0.15))

        self.move_background(bg, 1.7)
        self.wait(1.1)
        self.clear_scene(bg)

    def scene_exercise_bridge(self, bg):
        title = self.title("Video này giúp làm 10 câu bài tập")

        c1 = VGroup(
            self.box("Câu 1, 4, 5, 8, 9", width=4.0, color="#166534", text_color="#DCFCE7", size=23),
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
        cards.move_to(UP * 0.2)

        note = self.box(
            "Nhớ: hàng để tính từng số, cột để hiểu ý nghĩa hình học.",
            width=7.6,
            color="#713F12",
            text_color="#FEF3C7",
            size=25,
        )
        self.bottom_note(note)

        self.play(Write(title))
        self.play(LaggedStart(*[FadeIn(card, shift=UP * 0.18) for card in cards], lag_ratio=0.12))
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
            "Muốn tính nhanh: lấy hàng nhân vector. Muốn hiểu sâu: nhìn các cột của ma trận.",
            size=27,
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