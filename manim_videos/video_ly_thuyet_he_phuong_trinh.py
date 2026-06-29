from manim import *
import textwrap

FONT = "Segoe UI"


class VideoLyThuyetHePhuongTrinh(Scene):
    def construct(self):
        self.camera.background_color = "#000814"

        # =========================
        # MÀU
        # =========================
        COL_BG = "#000814"
        COL_WHITE = WHITE
        COL_GREY = "#94a3b8"
        COL_BLUE_GRID = "#0ea5e9"
        COL_BLUE = "#38bdf8"
        COL_RED = "#f87171"
        COL_GREEN = "#a3e635"
        COL_YELLOW = "#fde047"

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

        def wrap_text(text, size=22, color=WHITE, width=34):
            wrapped = "\n".join(textwrap.wrap(text, width=width))
            obj = Text(
                wrapped,
                font=FONT,
                font_size=size,
                color=color,
                line_spacing=0.75
            )
            fit_width(obj, 6.1)
            return obj

        def bottom_left_note(title, lines):
            title_obj = make_text(title, 27, COL_YELLOW)

            line_group = VGroup()
            for txt, color in lines:
                line = wrap_text(txt, 21, color, width=38)
                line_group.add(line)

            line_group.arrange(DOWN, aligned_edge=LEFT, buff=0.18)

            group = VGroup(title_obj, line_group)
            group.arrange(DOWN, aligned_edge=LEFT, buff=0.25)

            # Từ lúc có hình, chữ luôn ở góc dưới trái
            group.to_corner(DL, buff=0.45)
            group.shift(UP * 0.28)

            return group

        def make_white_plane():
            plane = NumberPlane(
                x_range=[-7, 7, 1],
                y_range=[-4, 4, 1],
                background_line_style={
                    "stroke_color": WHITE,
                    "stroke_width": 1.0,
                    "stroke_opacity": 0.24,
                },
                faded_line_style={
                    "stroke_color": WHITE,
                    "stroke_width": 0.6,
                    "stroke_opacity": 0.10,
                },
                axis_config={
                    "color": WHITE,
                    "stroke_width": 2.4,
                },
                faded_line_ratio=2,
            )

            # Dịch gốc tọa độ xuống thấp và hơi sang phải
            # để hình màu nằm nhiều ở phía trên/phải
            plane.scale(1.05)
            plane.move_to(DOWN * 0.95 + RIGHT * 0.55)
            return plane

        def make_blue_plane():
            plane = NumberPlane(
                x_range=[-7, 7, 1],
                y_range=[-4, 4, 1],
                background_line_style={
                    "stroke_color": COL_BLUE_GRID,
                    "stroke_width": 1.5,
                    "stroke_opacity": 0.65,
                },
                faded_line_style={
                    "stroke_color": COL_BLUE_GRID,
                    "stroke_width": 0.7,
                    "stroke_opacity": 0.18,
                },
                axis_config={
                    "color": WHITE,
                    "stroke_width": 2.4,
                },
                faded_line_ratio=2,
            )

            plane.scale(1.05)
            plane.move_to(DOWN * 0.95 + RIGHT * 0.55)
            return plane

        def vector_from_origin(plane, coord, color, stroke_width=5):
            return Arrow(
                start=plane.c2p(0, 0),
                end=plane.c2p(coord[0], coord[1]),
                buff=0,
                color=color,
                stroke_width=stroke_width,
                max_tip_length_to_length_ratio=0.12,
            )

        def label_arrow(arrow, text, color, direction=UR, size=23):
            label = make_text(text, size, color)
            label.next_to(arrow.get_end(), direction, buff=0.08)
            return label

        def make_column_vector(values, color=WHITE, size=30):
            entries = VGroup()

            for i, val in enumerate(values):
                t = make_text(str(val), size, color)
                t.move_to(DOWN * i * 0.55)
                entries.add(t)

            entries.move_to(ORIGIN)

            left = entries.get_left()[0] - 0.25
            right = entries.get_right()[0] + 0.25
            top = entries.get_top()[1] + 0.18
            bottom = entries.get_bottom()[1] - 0.18

            lb = VGroup(
                Line([left + 0.12, top, 0], [left, top, 0], color=color),
                Line([left, top, 0], [left, bottom, 0], color=color),
                Line([left, bottom, 0], [left + 0.12, bottom, 0], color=color),
            )

            rb = VGroup(
                Line([right - 0.12, top, 0], [right, top, 0], color=color),
                Line([right, top, 0], [right, bottom, 0], color=color),
                Line([right, bottom, 0], [right - 0.12, bottom, 0], color=color),
            )

            return VGroup(entries, lb, rb)

        def make_matrix_A():
            title = make_text("Ma trận A", 24, COL_YELLOW)

            a11 = make_text("1", 28, COL_GREEN)
            a12 = make_text("3", 28, COL_RED)
            a21 = make_text("-2", 28, COL_GREEN)
            a22 = make_text("0", 28, COL_RED)

            entries = VGroup(a11, a12, a21, a22)

            a11.move_to(LEFT * 0.35 + UP * 0.28)
            a12.move_to(RIGHT * 0.35 + UP * 0.28)
            a21.move_to(LEFT * 0.35 + DOWN * 0.28)
            a22.move_to(RIGHT * 0.35 + DOWN * 0.28)

            left = entries.get_left()[0] - 0.25
            right = entries.get_right()[0] + 0.25
            top = entries.get_top()[1] + 0.18
            bottom = entries.get_bottom()[1] - 0.18

            lb = VGroup(
                Line([left + 0.12, top, 0], [left, top, 0], color=WHITE),
                Line([left, top, 0], [left, bottom, 0], color=WHITE),
                Line([left, bottom, 0], [left + 0.12, bottom, 0], color=WHITE),
            )

            rb = VGroup(
                Line([right - 0.12, top, 0], [right, top, 0], color=WHITE),
                Line([right, top, 0], [right, bottom, 0], color=WHITE),
                Line([right, bottom, 0], [right - 0.12, bottom, 0], color=WHITE),
            )

            body = VGroup(entries, lb, rb)
            group = VGroup(title, body)
            group.arrange(DOWN, buff=0.22)
            return group

        # =====================================================
        # 1. MỞ ĐẦU
        # =====================================================
        title = make_text("Khái niệm và sự tồn tại nghiệm", 35, WHITE)
        title.to_edge(UP, buff=0.35)

        formula = make_text("A · x = b", 62, COL_YELLOW)
        formula.move_to(ORIGIN)

        desc = wrap_text(
            "Giải hệ phương trình tuyến tính là tìm vector x sao cho A biến x thành b.",
            23,
            COL_GREY,
            width=46
        )
        desc.next_to(formula, DOWN, buff=0.45)

        self.play(FadeIn(title, shift=DOWN))
        self.play(Write(formula))
        self.play(FadeIn(desc, shift=UP))
        self.wait(1.6)

        self.play(FadeOut(title), FadeOut(formula), FadeOut(desc))
        self.wait(0.3)

        # =====================================================
        # 2. TỪ LÚC CÓ HÌNH: CHỮ Ở DƯỚI TRÁI
        # =====================================================
        white_plane = make_white_plane()
        blue_plane = make_blue_plane()

        i_arrow = vector_from_origin(blue_plane, [1, 0], COL_GREEN)
        j_arrow = vector_from_origin(blue_plane, [0, 1], COL_RED)
        v_arrow = vector_from_origin(blue_plane, [-1, 2], COL_YELLOW)

        i_label = label_arrow(i_arrow, "i", COL_GREEN, DOWN + RIGHT, 23)
        j_label = label_arrow(j_arrow, "j", COL_RED, UP + RIGHT, 23)
        v_label = label_arrow(v_arrow, "v", COL_YELLOW, UP + LEFT, 25)

        col_v = make_column_vector(["-1", "2"], WHITE, 30)
        col_v.next_to(v_arrow.get_end(), UP + LEFT, buff=0.25)

        note1 = bottom_left_note(
            "1. Một vector trong mặt phẳng",
            [
                ("• Vector v có thể viết bằng i và j.", WHITE),
                ("• Ví dụ: v = -1i + 2j.", COL_YELLOW),
                ("• Tọa độ của v là cột [-1, 2].", COL_GREEN),
            ]
        )

        self.play(FadeIn(white_plane), FadeIn(blue_plane), run_time=1.2)
        self.play(FadeIn(note1, shift=UP))
        self.play(GrowArrow(i_arrow), FadeIn(i_label))
        self.play(GrowArrow(j_arrow), FadeIn(j_label))
        self.play(GrowArrow(v_arrow), FadeIn(v_label))
        self.play(FadeIn(col_v))
        self.wait(1.6)

        # =====================================================
        # 3. MA TRẬN A
        # =====================================================
        note2 = bottom_left_note(
            "2. Ma trận biến đổi mặt phẳng",
            [
                ("• Cột 1 cho biết i đi đâu.", COL_GREEN),
                ("• Cột 2 cho biết j đi đâu.", COL_RED),
                ("• Lưới xanh sẽ bị kéo theo ma trận A.", COL_YELLOW),
            ]
        )

        matrix_A = make_matrix_A()
        matrix_A.scale(0.9)
        matrix_A.to_corner(UR, buff=0.55)

        self.play(FadeOut(note1), FadeOut(col_v))
        self.play(FadeIn(note2, shift=UP))
        self.play(FadeIn(matrix_A, shift=DOWN))
        self.wait(1.5)

        self.play(
            FadeOut(matrix_A),
            FadeOut(i_label),
            FadeOut(j_label),
            FadeOut(v_label),
            run_time=0.6
        )
        self.wait(0.2)

        # =====================================================
        # 4. BIẾN ĐỔI LƯỚI XANH
        # =====================================================
        note3 = bottom_left_note(
            "3. Áp dụng ma trận A",
            [
                ("• Lưới trắng giữ nguyên để làm mốc.", WHITE),
                ("• Lưới xanh bị kéo nghiêng.", COL_BLUE),
                ("• Vector cũng di chuyển theo lưới xanh.", COL_YELLOW),
            ]
        )

        self.play(FadeOut(note2), FadeIn(note3, shift=UP))

        A = [[1, 3], [-2, 0]]
        origin_point = blue_plane.c2p(0, 0)

        moving_group = VGroup(
            blue_plane,
            i_arrow,
            j_arrow,
            v_arrow
        )

        self.play(
            moving_group.animate.apply_matrix(A, about_point=origin_point),
            run_time=3
        )

        ti_label = make_text("i sau biến đổi", 24, COL_GREEN)
        tj_label = make_text("j sau biến đổi", 24, COL_RED)
        tv_label = make_text("v sau biến đổi", 24, COL_YELLOW)

        ti_label.next_to(i_arrow.get_end(), LEFT + DOWN, buff=0.1)
        tj_label.next_to(j_arrow.get_end(), DOWN, buff=0.1)
        tv_label.next_to(v_arrow.get_end(), UP + LEFT, buff=0.1)

        self.play(FadeIn(ti_label), FadeIn(tj_label), FadeIn(tv_label))
        self.wait(1.5)

        # =====================================================
        # 5. A · x = b HỎI GÌ?
        # =====================================================
        note4 = bottom_left_note(
            "4. A · x = b có nghĩa là gì?",
            [
                ("• b là vector đích.", COL_YELLOW),
                ("• x là vector ban đầu chưa biết.", WHITE),
                ("• Ta cần tìm x để sau biến đổi nhận được b.", COL_GREEN),
            ]
        )

        self.play(
            FadeOut(note3),
            FadeOut(ti_label),
            FadeOut(tj_label),
            FadeOut(tv_label),
            FadeIn(note4, shift=UP)
        )

        x_arrow = vector_from_origin(blue_plane, [0.7, 0.4], COL_BLUE)
        b_arrow = vector_from_origin(blue_plane, [1.55, 1.15], COL_YELLOW)

        x_label = label_arrow(x_arrow, "x", COL_BLUE, DOWN + RIGHT, 24)
        b_label = label_arrow(b_arrow, "b", COL_YELLOW, UP + RIGHT, 24)

        self.play(GrowArrow(x_arrow), FadeIn(x_label))
        self.play(GrowArrow(b_arrow), FadeIn(b_label))
        self.wait(2.0)

        self.play(
            FadeOut(note4),
            FadeOut(x_arrow),
            FadeOut(b_arrow),
            FadeOut(x_label),
            FadeOut(b_label),
            FadeOut(blue_plane),
            FadeOut(i_arrow),
            FadeOut(j_arrow),
            FadeOut(v_arrow),
            FadeOut(white_plane),
            run_time=1.0
        )
        self.wait(0.3)

        # =====================================================
        # 6. HÌNH HỌC CỦA HỆ 2 ẨN
        # =====================================================
        plane2 = make_white_plane()

        note5 = bottom_left_note(
            "5. Nhìn hệ phương trình bằng hình học",
            [
                ("• Với 2 ẩn, mỗi phương trình là một đường thẳng.", WHITE),
                ("• Nghiệm chung là giao điểm của các đường.", WHITE),
                ("• Nếu có một giao điểm thì hệ có nghiệm duy nhất.", COL_GREEN),
            ]
        )

        line1 = plane2.plot(
            lambda x: (5 - x) / 2,
            x_range=[-7, 7],
            color=COL_BLUE
        )

        line2 = plane2.plot(
            lambda x: (11 - 3 * x) / 4,
            x_range=[-7, 7],
            color=COL_RED
        )

        eq1 = make_text("x + 2y = 5", 27, COL_BLUE)
        eq2 = make_text("3x + 4y = 11", 27, COL_RED)

        eq_group = VGroup(eq1, eq2)
        eq_group.arrange(DOWN, aligned_edge=LEFT, buff=0.25)
        eq_group.to_corner(UR, buff=0.45)

        dot = Dot(
            plane2.c2p(1, 2),
            color=COL_GREEN,
            radius=0.08
        )

        dot_label = make_text("(1, 2)", 24, COL_GREEN)
        dot_label.next_to(dot, UP + RIGHT, buff=0.1)

        self.play(FadeIn(plane2), run_time=1.2)
        self.play(FadeIn(note5, shift=UP))
        self.play(FadeIn(eq_group, shift=RIGHT))
        self.play(Create(line1), run_time=1.0)
        self.play(Create(line2), run_time=1.0)
        self.play(GrowFromCenter(dot), FadeIn(dot_label))
        self.wait(2.0)

        # =====================================================
        # 7. BA TRƯỜNG HỢP NGHIỆM
        # =====================================================
        note6 = bottom_left_note(
            "6. Sự tồn tại và tính duy nhất",
            [
                ("1. Cắt nhau → nghiệm duy nhất.", COL_GREEN),
                ("2. Song song → vô nghiệm.", COL_RED),
                ("3. Trùng nhau → vô số nghiệm.", COL_BLUE),
            ]
        )

        self.play(
            FadeOut(note5),
            FadeOut(eq_group),
            FadeOut(dot),
            FadeOut(dot_label),
            FadeIn(note6, shift=UP)
        )

        # Trường hợp 1
        p = Dot(plane2.c2p(1, 2), color=COL_GREEN, radius=0.08)
        tag1 = make_text("Nghiệm duy nhất", 24, COL_GREEN)
        tag1.to_corner(UR, buff=0.55)

        self.play(GrowFromCenter(p), FadeIn(tag1))
        self.wait(1.0)

        # Trường hợp 2: song song
        parallel1 = plane2.plot(
            lambda x: 0.5 * x + 1,
            x_range=[-7, 7],
            color=COL_BLUE
        )

        parallel2 = plane2.plot(
            lambda x: 0.5 * x + 2,
            x_range=[-7, 7],
            color=COL_RED
        )

        tag2 = make_text("Vô nghiệm", 24, COL_RED)
        tag2.to_corner(UR, buff=0.55)

        self.play(
            ReplacementTransform(line1, parallel1),
            ReplacementTransform(line2, parallel2),
            FadeOut(p),
            ReplacementTransform(tag1, tag2),
            run_time=1.5
        )
        self.wait(1.1)

        # Trường hợp 3: trùng nhau
        same_line = plane2.plot(
            lambda x: 0.5 * x + 1,
            x_range=[-7, 7],
            color=COL_GREEN
        )

        tag3 = make_text("Vô số nghiệm", 24, COL_BLUE)
        tag3.to_corner(UR, buff=0.55)

        self.play(
            ReplacementTransform(parallel1, same_line),
            FadeOut(parallel2),
            ReplacementTransform(tag2, tag3),
            run_time=1.5
        )
        self.wait(1.3)

        # =====================================================
        # 8. KẾT LUẬN
        # =====================================================
        note7 = bottom_left_note(
            "Kết luận",
            [
                ("• Giải hệ là tìm x sao cho A · x = b.", COL_YELLOW),
                ("• Về hình học, nghiệm là giao điểm của các đường.", WHITE),
                ("• Số nghiệm phụ thuộc vào vị trí tương đối của chúng.", COL_GREEN),
            ]
        )

        self.play(FadeOut(note6), FadeOut(tag3), FadeIn(note7, shift=UP))
        self.wait(4)