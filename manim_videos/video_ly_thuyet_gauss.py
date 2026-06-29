from manim import *
import textwrap

FONT = "Segoe UI"


class VideoLyThuyetGauss(Scene):
    def construct(self):
        self.camera.background_color = "#000814"

        # =========================
        # MÀU
        # =========================
        COL_BG = "#000814"
        COL_WHITE = WHITE
        COL_GREY = "#94a3b8"
        COL_BLUE = "#38bdf8"
        COL_RED = "#f87171"
        COL_GREEN = "#a3e635"
        COL_YELLOW = "#fde047"
        COL_PURPLE = "#c084fc"

        # =========================
        # HÀM PHỤ
        # =========================
        def make_text(text, size=24, color=WHITE):
            return Text(
                text,
                font=FONT,
                font_size=size,
                color=color
            )

        def fit_width(mob, max_width):
            if mob.width > max_width:
                mob.scale(max_width / mob.width)
            return mob

        def wrap_text(text, size=22, color=WHITE, width=38):
            wrapped = "\n".join(textwrap.wrap(text, width=width))
            obj = Text(
                wrapped,
                font=FONT,
                font_size=size,
                color=color,
                line_spacing=0.75
            )
            fit_width(obj, 6.2)
            return obj

        def bottom_left_note(title, lines):
            title_obj = make_text(title, 27, COL_YELLOW)

            line_group = VGroup()
            for txt, color in lines:
                line = wrap_text(txt, 21, color, width=40)
                line_group.add(line)

            line_group.arrange(DOWN, aligned_edge=LEFT, buff=0.18)

            group = VGroup(title_obj, line_group)
            group.arrange(DOWN, aligned_edge=LEFT, buff=0.25)
            group.to_corner(DL, buff=0.45)
            group.shift(UP * 0.25)

            return group

        def make_aug_matrix(data, highlight_cells=None, highlight_rows=None):
            if highlight_cells is None:
                highlight_cells = []
            if highlight_rows is None:
                highlight_rows = []

            rows = len(data)
            cols = len(data[0])

            cell_w = 0.9
            cell_h = 0.7

            entries = VGroup()
            highlights = VGroup()

            for r in range(rows):
                for c in range(cols):
                    x = (c - (cols - 1) / 2) * cell_w
                    y = ((rows - 1) / 2 - r) * cell_h
                    pos = [x, y, 0]

                    if r in highlight_rows:
                        row_box = RoundedRectangle(
                            width=cols * cell_w + 0.35,
                            height=0.52,
                            corner_radius=0.08,
                            stroke_width=0,
                            fill_color=COL_PURPLE,
                            fill_opacity=0.18
                        )
                        row_box.move_to([0, y, 0])
                        highlights.add(row_box)

                    if (r, c) in highlight_cells:
                        cell_box = RoundedRectangle(
                            width=0.62,
                            height=0.5,
                            corner_radius=0.08,
                            stroke_width=0,
                            fill_color=COL_YELLOW,
                            fill_opacity=0.28
                        )
                        cell_box.move_to(pos)
                        highlights.add(cell_box)

                    txt = make_text(str(data[r][c]), 30, COL_WHITE)
                    txt.move_to(pos)
                    entries.add(txt)

            left = entries.get_left()[0] - 0.35
            right = entries.get_right()[0] + 0.35
            top = entries.get_top()[1] + 0.25
            bottom = entries.get_bottom()[1] - 0.25

            # vạch ngăn giữa A và b
            sep_x = (entries[1].get_center()[0] + entries[2].get_center()[0]) / 2
            sep = Line(
                [sep_x, top, 0],
                [sep_x, bottom, 0],
                color=COL_GREY,
                stroke_width=3
            )

            lb = VGroup(
                Line([left + 0.15, top, 0], [left, top, 0], color=COL_WHITE),
                Line([left, top, 0], [left, bottom, 0], color=COL_WHITE),
                Line([left, bottom, 0], [left + 0.15, bottom, 0], color=COL_WHITE),
            )

            rb = VGroup(
                Line([right - 0.15, top, 0], [right, top, 0], color=COL_WHITE),
                Line([right, top, 0], [right, bottom, 0], color=COL_WHITE),
                Line([right, bottom, 0], [right - 0.15, bottom, 0], color=COL_WHITE),
            )

            return VGroup(highlights, entries, sep, lb, rb)

        def make_equations():
            eq1 = make_text("x + 2y = 4", 30, COL_BLUE)
            eq2 = make_text("2x + y = 5", 30, COL_RED)

            group = VGroup(eq1, eq2)
            group.arrange(DOWN, aligned_edge=LEFT, buff=0.3)
            group.to_corner(UR, buff=0.6)
            return group

        def make_operation_text(text, color=COL_YELLOW):
            op = make_text(text, 30, color)
            op.to_edge(UP, buff=0.35)
            return op

        # =========================
        # 1. MỞ ĐẦU
        # =========================
        title = make_text("Phương pháp khử Gauss", 38, COL_WHITE)
        title.to_edge(UP, buff=0.35)

        subtitle = make_text("và Ma trận mở rộng", 30, COL_BLUE)
        subtitle.next_to(title, DOWN, buff=0.2)

        formula = make_text("[A | b]", 64, COL_YELLOW)
        formula.move_to(ORIGIN + UP * 0.1)

        desc = wrap_text(
            "Ta chuyển hệ phương trình sang ma trận mở rộng, rồi dùng phép biến đổi hàng để giải hệ.",
            23,
            COL_GREY,
            width=50
        )
        desc.next_to(formula, DOWN, buff=0.45)

        self.play(FadeIn(title, shift=DOWN))
        self.play(FadeIn(subtitle, shift=DOWN))
        self.play(Write(formula))
        self.play(FadeIn(desc, shift=UP))
        self.wait(1.8)

        self.play(FadeOut(title), FadeOut(subtitle), FadeOut(formula), FadeOut(desc))
        self.wait(0.3)

        # =========================
        # 2. TỪ HỆ PHƯƠNG TRÌNH SANG MA TRẬN MỞ RỘNG
        # =========================
        equations = make_equations()

        note1 = bottom_left_note(
            "1. Ma trận mở rộng",
            [
                ("• Bên trái là hệ số của các biến.", COL_WHITE),
                ("• Cột cuối là vế phải của hệ.", COL_YELLOW),
                ("• Ta viết gọn hệ thành dạng [A | b].", COL_GREEN),
            ]
        )

        matrix0 = make_aug_matrix(
            [
                [1, 2, 4],
                [2, 1, 5],
            ]
        )
        matrix0.scale(1.35)
        matrix0.move_to(ORIGIN + UP * 0.45)

        label_A = make_text("A", 28, COL_BLUE)
        label_A.next_to(matrix0, UP, buff=0.35)
        label_A.shift(LEFT * 0.65)

        label_b = make_text("b", 28, COL_YELLOW)
        label_b.next_to(matrix0, UP, buff=0.35)
        label_b.shift(RIGHT * 1.15)

        self.play(FadeIn(equations, shift=RIGHT))
        self.play(FadeIn(note1, shift=UP))
        self.play(Create(matrix0), FadeIn(label_A), FadeIn(label_b))
        self.wait(2.0)

        self.play(FadeOut(equations), FadeOut(label_A), FadeOut(label_b), FadeOut(note1))
        self.wait(0.3)

        # =========================
        # 3. BA PHÉP TOÁN HÀNG SƠ CẤP
        # =========================
        note2 = bottom_left_note(
            "2. Ba phép toán hàng sơ cấp",
            [
                ("• Đổi chỗ hai hàng.", COL_BLUE),
                ("• Nhân một hàng với số khác 0.", COL_RED),
                ("• Lấy một hàng cộng với bội của hàng khác.", COL_GREEN),
            ]
        )

        row1 = make_aug_matrix([[1, 2, 4], [2, 1, 5]], highlight_rows=[0])
        row1.scale(1.35)
        row1.move_to(matrix0.get_center())

        row2 = make_aug_matrix([[1, 2, 4], [2, 1, 5]], highlight_rows=[1])
        row2.scale(1.35)
        row2.move_to(matrix0.get_center())

        self.play(FadeIn(note2, shift=UP))
        self.play(ReplacementTransform(matrix0, row1))
        self.wait(0.6)
        self.play(ReplacementTransform(row1, row2))
        self.wait(0.6)

        op_demo = make_operation_text("Ví dụ: R₂ ← R₂ - 2R₁", COL_YELLOW)
        self.play(FadeIn(op_demo, shift=DOWN))
        self.wait(1.0)

        self.play(FadeOut(note2), FadeOut(op_demo))
        self.wait(0.3)

        # =========================
        # 4. KHỬ GAUSS BƯỚC 1
        # =========================
        note3 = bottom_left_note(
            "3. Khử phần tử dưới chốt",
            [
                ("• Chốt đầu tiên là số 1 ở hàng 1.", COL_YELLOW),
                ("• Ta làm cho số 2 bên dưới nó thành 0.", COL_WHITE),
                ("• Dùng phép: R₂ ← R₂ - 2R₁.", COL_GREEN),
            ]
        )

        mat_start = make_aug_matrix(
            [
                [1, 2, 4],
                [2, 1, 5],
            ],
            highlight_cells=[(0, 0), (1, 0)]
        )
        mat_start.scale(1.35)
        mat_start.move_to(row2.get_center())

        mat_step1 = make_aug_matrix(
            [
                [1, 2, 4],
                [0, -3, -3],
            ],
            highlight_cells=[(1, 0)]
        )
        mat_step1.scale(1.35)
        mat_step1.move_to(row2.get_center())

        op1 = make_operation_text("R₂ ← R₂ - 2R₁", COL_GREEN)

        self.play(ReplacementTransform(row2, mat_start))
        self.play(FadeIn(note3, shift=UP), FadeIn(op1, shift=DOWN))
        self.wait(0.9)

        self.play(ReplacementTransform(mat_start, mat_step1), run_time=1.4)
        self.wait(1.2)

        self.play(FadeOut(note3), FadeOut(op1))
        self.wait(0.3)

        # =========================
        # 5. KHỬ GAUSS BƯỚC 2
        # =========================
        note4 = bottom_left_note(
            "4. Chuẩn hóa hàng chốt",
            [
                ("• Hàng 2 đang có -3y = -3.", COL_WHITE),
                ("• Chia hàng 2 cho -3.", COL_YELLOW),
                ("• Khi đó hàng 2 trở thành y = 1.", COL_GREEN),
            ]
        )

        mat_step2 = make_aug_matrix(
            [
                [1, 2, 4],
                [0, 1, 1],
            ],
            highlight_cells=[(1, 1)]
        )
        mat_step2.scale(1.35)
        mat_step2.move_to(mat_step1.get_center())

        op2 = make_operation_text("R₂ ← (-1/3)R₂", COL_GREEN)

        self.play(FadeIn(note4, shift=UP), FadeIn(op2, shift=DOWN))
        self.wait(0.8)
        self.play(ReplacementTransform(mat_step1, mat_step2), run_time=1.4)
        self.wait(1.2)

        self.play(FadeOut(note4), FadeOut(op2))
        self.wait(0.3)

        # =========================
        # 6. KHỬ GAUSS BƯỚC 3
        # =========================
        note5 = bottom_left_note(
            "5. Đưa về dạng dễ đọc nghiệm",
            [
                ("• Hàng 1 còn chứa 2y.", COL_WHITE),
                ("• Ta lấy R₁ ← R₁ - 2R₂.", COL_YELLOW),
                ("• Khi đó hàng 1 trở thành x = 2.", COL_GREEN),
            ]
        )

        mat_final = make_aug_matrix(
            [
                [1, 0, 2],
                [0, 1, 1],
            ],
            highlight_cells=[(0, 0), (1, 1)]
        )
        mat_final.scale(1.35)
        mat_final.move_to(mat_step2.get_center())

        op3 = make_operation_text("R₁ ← R₁ - 2R₂", COL_GREEN)

        self.play(FadeIn(note5, shift=UP), FadeIn(op3, shift=DOWN))
        self.wait(0.8)
        self.play(ReplacementTransform(mat_step2, mat_final), run_time=1.4)
        self.wait(1.2)

        self.play(FadeOut(note5), FadeOut(op3))
        self.wait(0.3)

        # =========================
        # 7. DẠNG BẬC THANG RÚT GỌN
        # =========================
        note6 = bottom_left_note(
            "6. Dạng bậc thang rút gọn",
            [
                ("• Mỗi biến chính có một chốt.", COL_YELLOW),
                ("• Cột cuối cho biết giá trị nghiệm.", COL_WHITE),
                ("• Ta đọc được x = 2 và y = 1.", COL_GREEN),
            ]
        )

        x_text = make_text("x = 2", 34, COL_BLUE)
        y_text = make_text("y = 1", 34, COL_RED)

        sol = VGroup(x_text, y_text)
        sol.arrange(DOWN, aligned_edge=LEFT, buff=0.25)
        sol.next_to(mat_final, RIGHT, buff=0.8)

        self.play(FadeIn(note6, shift=UP))
        self.play(FadeIn(sol, shift=RIGHT))
        self.wait(2.0)

        # =========================
        # 8. KẾT LUẬN
        # =========================
        note7 = bottom_left_note(
            "Kết luận",
            [
                ("• Khử Gauss biến hệ phương trình thành ma trận dễ đọc.", COL_WHITE),
                ("• Các phép biến đổi hàng không làm đổi tập nghiệm.", COL_YELLOW),
                ("• Mục tiêu là đưa ma trận về dạng bậc thang.", COL_GREEN),
            ]
        )

        self.play(FadeOut(note6), FadeIn(note7, shift=UP))
        self.wait(4)