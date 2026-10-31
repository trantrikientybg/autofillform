/* ===== Auto-fill Microsoft Forms – KIỂM TRA QUY CHẾ KỲ 2026.1 (200 câu) =====
 * Cách dùng: mở form -> F12 -> tab Console -> (nếu Chrome chặn paste: gõ  allow pasting  rồi Enter)
 * -> dán toàn bộ script này -> Enter.
 * Script chỉ TICK đáp án, KHÔNG tự bấm Gửi (trừ khi đặt autoSubmit:true).
 * Chạy xong hãy cuộn kiểm tra lại, rồi tự bấm Submit.
 */
(async () => {
  const CFG = {
    delay: 120,        // ms nghỉ giữa các lần click
    autoNext: true,    // tự bấm "Next/Tiếp" nếu form chia nhiều trang
    autoSubmit: false, // true = tự bấm Gửi/Submit ở trang cuối (KHÔNG khuyến nghị)
    dryRun: false,     // true = chỉ in ra console, không click
    maxPages: 60,
  };

  // [số câu, nội dung câu hỏi, đáp án đúng]
  const KEY = [[1,"Sinh viên không nộp đủ học phí đúng thời hạn quy định sẽ bị xử lý như thế nào?","Bị đình chỉ đăng ký học tập một học kỳ kế tiếp"],[2,"Nếu sinh viên nộp đơn đề nghị rút học phần trong khoảng 7 tuần đầu của học kỳ chính và được giải quyết, mức học phí phải đóng là bao nhiêu?","Phải đóng 50% học phí của học phần đó"],[3,"Thời gian hưởng Học bổng Chính phủ tối đa cho người học thuộc chương trình đào tạo Cử nhân là bao nhiêu năm?","Không quá 04 năm"],[4,"Việc xác nhận Giấy vay vốn ngân hàng cho sinh viên được Ban Công tác sinh viên trả kết quả tại địa điểm nào?","Phòng 102 hoặc 103 - Nhà C1"],[5,"Quy định về chương trình ngoại ngữ cơ bản K71 KHÔNG áp dụng cho đối tượng sinh viên nào?","Sinh viên là người nước ngoài theo học CTĐT có ngôn ngữ giảng dạy chính là tiếng Việt"],[6,"Bài thi kiểm tra trình độ tiếng Anh đầu vào (Placement Test) do ĐHBK Hà Nội tổ chức có giá trị sử dụng trong thời gian bao lâu?","Chỉ có giá trị để phân loại trình độ đầu vào và xếp lớp học phần NNCB năm thứ nhất"],[7,"Sinh viên đạt danh hiệu \"Sinh viên 5 tốt\" từ cấp Đại học trở lên được cộng bao nhiêu điểm rèn luyện?","Cộng 8 điểm"],[8,"Sinh viên được phép đăng ký học chương trình đào tạo thứ hai (bằng kép) sớm nhất khi nào?","Khi đã được xếp trình độ năm thứ hai của chương trình thứ nhất"],[9,"Quỹ học bổng Khuyến khích học tập (KKHT) được trích từ nguồn nào và chiếm tỷ lệ bao nhiêu?","Trích từ nguồn học phí, bằng 8% học phí của học kỳ lấy điểm xét cấp học bổng"],[10,"Mức Học bổng Chính phủ (Nghị định 179/2026/NĐ-CP) hỗ trợ hàng tháng cho sinh viên ngành Kỹ thuật then chốt & Công nghệ chiến lược là bao nhiêu?","3.700.000 đồng / tháng"],[11,"Học phí tại Đại học Bách khoa Hà Nội được tính dựa trên đơn vị đo lường nào?","Số tín chỉ học phí (TCHP) của các học phần đăng ký"],[12,"Sinh viên không đáp ứng điều kiện phân loại trình độ ngoại ngữ đầu vào sẽ được xếp học như thế nào?","Được xếp học từ học phần đầu tiên của khối Ngoại ngữ cơ bản tương ứng"],[13,"Địa điểm làm thủ tục và nhận Giấy xác nhận ưu đãi giáo dục đào tạo cho sinh viên diện Chế độ chính sách là phòng nào?","Phòng 102 - Nhà C1"],[14,"Điều kiện bắt buộc kể từ học kỳ 3 trở đi đối với sinh viên chưa học hoặc chưa được miễn các học phần ngoại ngữ cơ bản (NNCB) để được đăng ký môn khác là gì?","Bắt buộc phải đăng ký học song hành các học phần NNCB tương ứng ở mỗi kỳ"],[15,"Đối với Chương trình đào tạo chuẩn có chuẩn đầu ra là tiếng Anh, yêu cầu trình độ tiếng Anh tối thiểu khi xét tốt nghiệp là gì?","Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 3 trở lên"],[16,"Sinh viên được điều động vào lực lượng vũ trang nghỉ học tạm thời thì thời gian nghỉ được tính như thế nào?","Không tính vào thời gian học chậm tiến độ"],[17,"Học phần \"FL1132 Tiếng Anh cơ sở 2\" có thời lượng và số tín chỉ quy định là bao nhiêu?","4(2-4-0-8)"],[18,"Sinh viên có hành vi nộp chứng chỉ ngoại ngữ giả mạo để gian lận chuẩn đầu ra sẽ chịu mức xử lý kỷ luật nào?","Bị đình chỉ học tập hoặc buộc thôi học tùy mức độ nghiêm trọng"],[19,"Văn phòng Quản lý Ký túc xá Bách khoa và Trung tâm Dịch vụ & Hỗ trợ Bách khoa nằm tại đâu?","Tầng 1 - Nhà B9"],[20,"Sinh viên bị buộc thôi học do kết quả học tập yếu kém có quyền đề nghị chuyển sang hình thức đào tạo nào của Nhà trường?","Chuyển sang hình thức Vừa làm vừa học (VLVH)"],[21,"Sinh viên không hoàn thành chương trình đào tạo Thạc sĩ được quyền đề nghị cấp chứng nhận các học phần đã tích lũy trong thời hạn bao lâu?","Trong thời hạn 5 năm kể từ ngày khóa học kết thúc"],[22,"Trường hợp nào sau đây KHÔNG thuộc diện xét cấp Học bổng Trần Đại Nghĩa?","Sinh viên bị kỷ luật từ mức cảnh cáo trở lên hoặc đã nhận học bổng khác trên 10 triệu đồng"],[23,"Mức Học bổng Chính phủ hỗ trợ hàng tháng cho Học viên Thạc sĩ ngành Vi mạch bán dẫn và các ngành Khoa học cơ bản là bao nhiêu?","6.300.000 đồng / tháng"],[24,"Trường hợp hai sinh viên có cùng điểm GPA ở cuối danh sách xét học bổng, tiêu chí ưu tiên nào được sử dụng để xếp hạng?","Ưu tiên sinh viên có điểm rèn luyện cao hơn"],[25,"Điều 22 Luật Giáo dục số 43/2019/QH14 nghiêm cấm các hành vi nào trong cơ sở giáo dục?","Xúc phạm nhân phẩm nhà giáo/người học; Xuyên tạc nội dung giáo dục; Gian lận trong học tập/thi; Hút thuốc, uống rượu bia, gây rối trật tự"],[26,"Văn phòng làm việc của Hội Sinh viên Đại học Bách khoa Hà Nội đặt tại vị trí nào?","Phòng 101 - Tòa nhà B8"],[27,"Chính sách hỗ trợ phần chênh lệch học phí cho sinh viên diện Chế độ chính sách (CĐCS) KHÔNG áp dụng cho khối chương trình nào?","Chương trình đào tạo Kỹ sư chuyên sâu"],[28,"Sinh viên đang học cùng lúc hai chương trình đào tạo sẽ bị dừng học chương trình thứ hai khi nào?","Khi bị cảnh báo học tập ở chương trình thứ nhất"],[29,"Bảng quy đổi chứng chỉ ngoại ngữ ban hành kèm Quy định K71 có áp dụng cho sinh viên các khóa cũ (từ K70 trở về trước) không?","Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực; nếu mức mới khác cũ thì áp dụng mức cao hơn"],[30,"Sinh viên đã có quyết định buộc thôi học, nếu thi lại và trúng tuyển mới vào trường thì việc công nhận học phần cũ được xử lý ra sao?","Phải học lại toàn bộ chương trình, ngoại trừ học phần Giáo dục quốc phòng - an ninh đã được cấp chứng chỉ"],[31,"Sinh viên học cùng lúc hai chương trình phải đăng ký học chương trình thứ hai muộn nhất trước thời điểm xét tốt nghiệp chương trình thứ nhất là bao lâu?","Muộn nhất 02 năm trước thời điểm xét tốt nghiệp"],[32,"Sinh viên có hành vi vi phạm kỷ luật khi thi hộ hoặc nhờ thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?","Trừ 20 điểm"],[33,"Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm rèn luyện (ĐRL)?","Trừ 10 điểm"],[34,"Quy đổi 1 TCHT học phần \"Lý thuyết / Bài tập\" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?","1,0 TCHP"],[35,"Sinh viên có cha hoặc mẹ bị tai nạn lao động hưởng trợ cấp thường xuyên được hưởng mức giảm học phí là bao nhiêu?","Giảm 50% học phí"],[36,"Sinh viên nghỉ học tạm thời phải nộp đơn đề nghị tiếp nhận trở lại học chậm nhất vào thời điểm nào?","Chậm nhất 01 tuần trước khi bắt đầu học kỳ mới"],[37,"Hành vi nào sau đây bị NGHIÊM CẤM đối với sinh viên trong giờ học trên lớp?","Tự ý ghi âm, ghi hình, chụp ảnh trong giờ học khi chưa được sự đồng ý của giáo viên"],[38,"Thời gian Ban Công tác sinh viên thông báo công khai kế hoạch đăng ký xét Học bổng Trao đổi sinh viên tối thiểu là bao lâu để người học chuẩn bị?","Tối thiểu 02 tuần"],[39,"Học viên thuộc chương trình tích hợp Cử nhân - Thạc sĩ được đăng ký học trước tối đa bao nhiêu tín chỉ thuộc CTĐT thạc sĩ khi còn ở giai đoạn cử nhân?","Tối đa 15 tín chỉ"],[40,"Giá trị của Học bổng KKHT loại Xuất sắc (loại A) bằng bao nhiêu lần so với loại Khá (loại C)?","Bằng 1,5 lần"],[41,"Sinh viên thuộc Nhóm 6 trong phân loại ngoại ngữ đầu vào sẽ nhận được quyền lợi gì?","Được miễn học toàn bộ các học phần Tiếng Anh cơ sở (từ FL1131 đến FL1135)"],[42,"Quyết định ban hành Quy định về phân loại trình độ đầu vào và chuẩn ngoại ngữ K71 do lãnh đạo nào ký phê duyệt?","Phó Giám đốc GS.TS. Vũ Văn Yêm"],[43,"Nhà trường có công nhận chứng chỉ tiếng Anh thi theo hình thức trực tuyến tại nhà (ví dụ: TOEFL iBT Home Edition) không?","Không công nhận các chứng chỉ tiếng Anh cấp trên cơ sở thi trực tuyến tại nhà"],[44,"Điều kiện học tập đối với sinh viên từ năm thứ hai trở đi để đăng ký Chương trình Vay vốn tín dụng ưu đãi STEM là gì?","Kết quả học tập trung bình (GPA) năm học liền trước đạt loại Giỏi trở lên (từ 3,2 trở lên)"],[45,"Quy định về \"Học phần song hành\" áp dụng cho hai học phần A và B được hiểu như thế nào?","Sinh viên phải theo học học phần A trước hoặc học đồng thời với học phần B"],[46,"Ký hiệu điểm chữ \"X\" trong hệ thống quản lý học tập đại diện cho trạng thái nào?","Điểm học phần chưa hoàn thiện do thiếu dữ liệu đánh giá"],[47,"Số đợt xét tốt nghiệp đại học trong một năm theo Quy chế đào tạo 2025 được quy định là bao nhiêu đợt?","3 đợt"],[48,"Tân sinh viên đạt điểm bài kiểm tra HUST English Placement Test từ 475 đến dưới 545 điểm được xếp vào Nhóm trình độ nào?","Nhóm 5"],[49,"Theo hướng dẫn Quản lý tài chính cá nhân trong Sổ tay sinh viên, tỷ lệ 20% thu nhập hàng tháng được khuyên dành cho mục đích nào?","Dành cho tiết kiệm"],[50,"Đối với Chương trình đào tạo Kỹ sư chuyên sâu Thiết kế vi mạch, mức học phí/1 TCHP được tính bằng mức học phí của chương trình cử nhân nào?","Cử nhân Kỹ thuật Điện tử - Viễn thông"],[51,"Nếu sinh viên học một học phần tiếng Anh cơ sở nhưng không đạt điểm kết thúc (bị điểm F), sinh viên phải xử lý ra sao?","Phải tự đăng ký học lại học phần đó ở các học kỳ tiếp theo"],[52,"Theo quy tắc quy đổi từ dải điểm thang 4 sang thang điểm 10 tương đương, điểm CPA từ 2,0 đến cận 2,5 tương ứng với dải điểm thang 10 nào?","5,5 đến cận 7,0"],[53,"Học phần \"FL1131 Tiếng Anh cơ sở 1\" có khối lượng thời lượng là bao nhiêu?","4(2-4-0-8)"],[54,"Cổng thông tin chính thức hỗ trợ hướng nghiệp, tìm kiếm việc làm thêm và thực tập dành cho sinh viên Bách khoa có tên là gì?","Cổng thông tin HustWork (hustwork.hust.edu.vn)"],[55,"Điều kiện về ngoại ngữ để sinh viên chương trình Việt - Pháp PFIEV được đăng ký nhận Phụ lục văn bằng kỹ sư của phía Pháp là gì?","Đạt tối thiểu DELF B1 và Chứng chỉ TOEIC quốc tế (Nghe & Đọc) đạt từ 600 điểm trở lên"],[56,"Mức điểm IELTS Academic đạt từ 8.5 đến 9.0 được Bảng 2.1 quy đổi tương đương Bậc mấy theo Khung 6 bậc?","Bậc 6 (CEFR C2)"],[57,"Sinh viên phải đăng ký tối thiểu bao nhiêu tín chỉ trong học kỳ lấy điểm xét học bổng để không bị loại (trừ HK1 năm thứ nhất)?","Tối thiểu 15 tín chỉ"],[58,"Học phí học phần \"Giáo dục Quốc phòng - An ninh\" được tính toán dựa trên đơn vị nào?","Tính theo số TCHP quy đổi của các học phần GDQP-AN"],[59,"Vị trí của Tiệm giặt là công cộng thuộc Ký túc xá Bách khoa được đặt ở đâu?","Nhà hồng xanh phía sau hội trường B6 (cạnh B7) - sát đường Trần Đại Nghĩa"],[60,"Thời gian nghỉ học tạm thời tối đa cho phép đối với lý do cá nhân thông thường là bao nhiêu học kỳ chính?","04 học kỳ chính (và được tính vào thời gian chậm tiến độ)"],[61,"Sinh viên là con đẻ của người hoạt động cách mạng trước ngày 01/01/1945 thuộc đối tượng hưởng chính sách học phí nào?","Miễn 100% học phí"],[62,"Các phòng Học nhóm dành cho sinh viên tại Thư viện Tạ Quang Bửu nằm từ phòng 501 đến phòng 508 thuộc tầng mấy?","Tầng 5 Thư viện Tạ Quang Bửu"],[63,"Chứng chỉ tiếng Anh quốc tế dùng để xét công nhận chuẩn đầu ra phải đảm bảo điều kiện thời hạn như thế nào?","Cấp trong vòng 2 năm tính đến thời điểm xét chuẩn ngoại ngữ đầu ra và còn hiệu lực"],[64,"Theo Quy chế đào tạo 2025, điểm trung bình toàn khóa (CPA tốt nghiệp) cho chương trình Kỹ sư được tính như thế nào?","Chỉ tính dựa trên các học phần thuộc chương trình đào tạo kỹ sư đăng ký tốt nghiệp"],[65,"Sinh viên mồ côi cả cha lẫn mẹ thuộc Nhóm 3 khi đăng ký Học bổng Trần Đại Nghĩa được hưởng mức học bổng là bao nhiêu?","100% học phí của các học phần trong chương trình đào tạo tại học kỳ xét"],[66,"Chứng chỉ Cambridge English Qualifications trình độ B2 First (FCE) đạt từ 160- 179 điểm được quy đổi sang Bậc mấy?","Bậc 4"],[67,"Theo Quy chế đào tạo 2025 (sửa đổi), điểm liệt đối với học phần đồ án tốt nghiệp/khóa luận tốt nghiệp cử nhân, đồ án tốt nghiệp kỹ sư là bao nhiêu?","Dưới 5,0"],[68,"Quy đổi 1 TCHT học phần \"Thực tập tốt nghiệp\" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?","2,5 TCHP"],[69,"Khi đăng ký tốt nghiệp đại học, sinh viên được chọn số tín chỉ tích lũy so với yêu cầu của CTĐT như thế nào?","Bắt buộc chọn đúng bằng số tín chỉ chuẩn"],[70,"Quy tắc xếp bậc đối với chứng chỉ TOEIC 4 kỹ năng trong quy định công nhận ngoại ngữ K71 được tính dựa trên tiêu chí nào?","Mức quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng"],[71,"Theo Quy chế đào tạo, \"Học phần tiên quyết\" của một học phần B được hiểu như thế nào?","Sinh viên phải học xong học phần A và đạt điểm đạt trở lên mới được đăng ký học học phần B"],[72,"Sinh viên có kết quả học tập và rèn luyện của học kỳ trước đó đạt mức Giỏi (GPA ≥ 3.2, ĐRL ≥ 80) được cộng bao nhiêu điểm rèn luyện?","Cộng 4 điểm"],[73,"Sinh viên tự ý chuyển sang ngành học KHÔNG thuộc danh mục ưu tiên của Nghị định 179 sẽ bị xử lý học bổng ra sao?","Không tiếp tục được hưởng học bổng và phải hoàn trả kinh phí đã nhận thông qua cơ sở đào tạo"],[74,"Mức học phí áp dụng cho các lớp học phần tổ chức theo yêu cầu riêng của 01 sinh viên (lớp đặc biệt) do cấp nào quyết định?","Giám đốc Đại học Bách khoa Hà Nội quyết định"],[75,"Trường hợp nào sau đây sinh viên KHÔNG được quyền đề nghị phúc tra hoặc khiếu nại điểm?","Các học phần được tổ chức thi theo hình thức vấn đáp hoặc đánh giá trước hội đồng"],[76,"Mức học phí áp dụng đối với sinh viên nước ngoài tự chi trả kinh phí học tập được tính bằng bao nhiêu lần so với quy định chuẩn?","1,5 lần"],[77,"Sinh viên từ K67 đến K70 (Nhóm 2) đăng ký Học bổng Trần Đại Nghĩa cần đạt mức GPA học kỳ 2025.2 tối thiểu là bao nhiêu?","GPA ≥ 2,0"],[78,"Theo quy tắc quy đổi, chứng chỉ APTIS ESOL trình độ A2 (chỉ thể hiện 1 mức năng lực) được xếp vào bậc cơ sở nào trong Bảng quy đổi?","Bậc 2.1"],[79,"Sinh viên thuộc Nhóm 3 trong đối tượng xét cấp Học bổng Trần Đại Nghĩa là ai?","Sinh viên mồ côi cả cha và mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi"],[80,"Sinh viên tham gia đầy đủ Tuần sinh hoạt công dân do Nhà trường tổ chức được cộng bao nhiêu điểm rèn luyện?","Cộng 6 điểm"],[81,"Học bổng Trần Đại Nghĩa là học bổng của ĐHBK Hà Nội dành cho đối tượng sinh viên nào?","Sinh viên có hoàn cảnh kinh tế gia đình đặc biệt khó khăn, có ý chí vươn lên trong học tập"],[82,"Đối với chương trình đào tạo Thạc sĩ, lớp học phần có quy mô dưới 5 học viên được xem xét tổ chức dưới hình thức nào?","Mở lớp dưới hình thức đồ án, khóa luận hoặc tiểu luận chuyên đề thay thế giờ lên lớp"],[83,"Sau khi bảo vệ thành công luận văn Thạc sĩ, học viên phải nộp quyển luận văn tốt nghiệp cho Thư viện Tạ Quang Bửu trong thời hạn bao nhiêu ngày?","Trong thời hạn 20 ngày kể từ ngày bảo vệ thành công"],[84,"Sinh viên là người dân tộc thiểu số rất ít người ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn được hưởng mức hỗ trợ học phí ra sao?","Miễn 100% học phí"],[85,"Địa chỉ phòng Mượn giáo trình học tập tại Thư viện Tạ Quang Bửu là phòng nào?","Phòng 111 Thư viện Tạ Quang Bửu"],[86,"Thời hạn Giám đốc Đại học ra quyết định công nhận tốt nghiệp và cấp bằng tốt nghiệp Thạc sĩ cho học viên đủ điều kiện là bao lâu?","Trong thời hạn 02 tháng tính từ thời điểm đáp ứng đủ điều kiện"],[87,"Văn bản pháp lý của Chính phủ quy định về chính sách học phí, miễn giảm học phí áp dụng cho năm học 2026-2027 tại ĐHBK Hà Nội là văn bản nào?","Nghị định 238/2025/NĐ-CP ngày 03/09/2025"],[88,"Mức điểm trung bình tích lũy (CPA) tối thiểu sinh viên cần đạt khi xét công nhận tốt nghiệp đại học là bao nhiêu?","CPA ≥ 2,00"],[89,"Trong buổi bảo vệ Đồ án tốt nghiệp tại hội đồng, nếu có 1 thành viên hội đồng cho điểm dưới 5 thì điểm bảo vệ cuối kỳ của sinh viên được tính như thế nào?","Bị tính là điểm liệt và chỉ được ghi tối đa là 4,9 điểm"],[90,"Điểm thay đổi quan trọng về cấu trúc học kỳ chính trong năm học từ Quy chế 2023 sang Quy chế 2025 là gì?","Bỏ chia đợt A và B, một năm học bao gồm hai học kỳ chính và một học kỳ hè"],[91,"Sinh viên nghỉ học tạm thời do tai nạn hoặc điều trị bệnh dài ngày sẽ KHÔNG tính vào thời gian chậm tiến độ nếu tổng thời gian nghỉ không vượt quá bao nhiêu học kỳ?","04 học kỳ chính"],[92,"Theo Bảng 2.1 Phụ lục II, chứng chỉ IELTS Academic đạt mức điểm 2.0 được quy đổi tương đương Bậc cơ sở nào?","Bậc 1.1"],[93,"Ký hiệu \"ĐK\" trong bảng danh mục học phần tiếng Anh cơ bản có ý nghĩa gì?","Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu chưa học hoặc chưa được miễn"],[94,"Chứng chỉ tiếng Nhật JLPT trình độ N2 tương đương với Bậc mấy theo Khung 6 bậc?","Bậc 5"],[95,"Học viên tốt nghiệp đại học ngành phù hợp khi theo học chương trình Thạc sĩ phải học bổ sung tối đa bao nhiêu tín chỉ?","Học bổ sung tối đa 15 tín chỉ"],[96,"Chuẩn ngoại ngữ đầu ra đối với CTĐT Tiếng Anh Khoa học Kỹ thuật và Công nghệ là gì?","Ngoại ngữ 1 đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3"],[97,"Quỹ học bổng Khuyến khích học tập (KKHT) KHÔNG xét cấp cho sinh viên đăng ký ít hơn bao nhiêu tín chỉ trong học kỳ cấp học bổng?","Đăng ký ít hơn 6 tín chỉ"],[98,"Học bổng Chính phủ cấp cho người học được Nhà trường thực hiện chi trả theo định kỳ nào?","Chi trả định kỳ theo từng tháng dựa trên số tháng thực học"],[99,"Số điện thoại đường dây nóng (Hotline) chính thức của Tổ tư vấn và hỗ trợ sinh viên (SSU) là số nào?","024 3869 3108"],[100,"Mức giá trị của Học bổng KKHT loại Giỏi (loại B) được tính như thế nào?","Bằng 1,2 lần mức học bổng loại Khá"],[101,"Chuẩn Ngoại ngữ 2 bắt buộc đối với sinh viên ngành Ngôn ngữ Anh hoặc Tiếng Anh KHKT&CN khi xét tốt nghiệp tối thiểu đạt Bậc mấy?","Bậc 3"],[102,"Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi THPT yêu cầu điểm quy đổi thang 30 tối thiểu là bao nhiêu?","Từ 27/30 trở lên"],[103,"Thời gian hưởng Học bổng Chính phủ tối đa cho sinh viên thuộc chương trình đào tạo Kỹ sư (từ 150 tín chỉ trở lên) là bao nhiêu năm?","Không quá 05 năm"],[104,"Mức phí thực hiện lại 01 chuyên đề tiến sĩ đối với nghiên cứu sinh được quy định cụ thể là bao nhiêu?","2.200.000 đồng / chuyên đề"],[105,"Khung điểm CPA quy đổi sang xếp loại học lực \"Giỏi\" theo Quy chế đào tạo là bao nhiêu?","3,20 đến 3,59"],[106,"Kết quả xét duyệt Học bổng KKHT được công bố chậm nhất vào tuần học thứ mấy của học kỳ cấp học bổng?","Chậm nhất vào tuần học thứ 10"],[107,"Sinh viên được cấp Học bổng Chính phủ theo Nghị định 179 có được đồng thời hưởng thêm chính sách học bổng khác từ nguồn ngân sách nhà nước không?","Không, chỉ được lựa chọn hưởng 01 chính sách học bổng từ nguồn ngân sách nhà nước"],[108,"Đối với sinh viên Nhóm 4 (gặp tai nạn, rủi ro đột xuất), Học bổng Trần Đại Nghĩa hỗ trợ các mức tiền mặt cố định là bao nhiêu?","5 triệu đồng và 10 triệu đồng"],[109,"Sinh viên đã hết thời gian học tập tối đa theo quy định nhưng chưa tốt nghiệp do thiếu môn GDQP-AN hoặc GDTC được gia hạn hoàn thiện trong thời gian tối đa bao lâu?","Trong thời hạn tối đa 03 năm kể từ khi hết thời hạn học tập"],[110,"Thời gian điều chỉnh đăng ký học phần bổ sung vào các lớp học phần đã mở ở đầu học kỳ chính kéo dài trong bao lâu?","Chỉ thực hiện trong tuần đầu của học kỳ"],[111,"Nếu trung bình cộng điểm của người hướng dẫn và người phản biện đồ án tốt nghiệp cho dưới 5,0 thì sinh viên sẽ bị xử lý ra sao?","Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng tính là 0 điểm"],[112,"Sinh viên thực hiện khai báo thông tin liên lạc và nơi cư trú đầy đủ theo yêu cầu của Đại học được cộng bao nhiêu điểm rèn luyện?","Cộng 4 điểm"],[113,"Trường hợp sinh viên có đơn xin nghỉ học tạm thời hoặc thôi học được chấp thuận trong 7 tuần đầu của học kỳ chính thì nghĩa vụ học phí là bao nhiêu?","Phải đóng 50% học phí của học kỳ đó"],[114,"Sinh viên đăng ký học lại học phần đã đạt điểm D để cải thiện điểm CPA có phải đóng học phí không?","Phải đóng 100% học phí theo số TCHP đăng ký"],[115,"Điều kiện về điểm CPA để sinh viên đại học đề nghị xét chuyển vào học Chương trình đào tạo Tài năng sau năm thứ hai là gì?","CPA ≥ 3,2"],[116,"Chứng chỉ tiếng Hàn TOPIK 4 tương ứng với Bậc mấy trong Khung năng lực 6 bậc?","Bậc 4"],[117,"Quy đổi khối lượng học tập hệ đại học chính quy: 1 TCHT của học phần \"Thí nghiệm / Thực hành thông thường\" bằng bao nhiêu Tín chỉ học phí (TCHP)?","1,5 TCHP"],[118,"Sinh viên thuộc diện Cử tuyển nộp và nhận giấy xác nhận được hưởng học bổng chính sách tại đâu và vào thời gian nào?","Tại Phòng 102 - Nhà C1 vào đầu các học kỳ"],[119,"Yêu cầu về các kỹ năng đối với chứng chỉ tiếng Anh quốc tế được sử dụng để xét chuẩn ngoại ngữ đầu ra là gì?","Phải đánh giá đầy đủ 4 kỹ năng (Nghe, Nói, Đọc, Viết) và còn hiệu lực trong vòng 2 năm"],[120,"Địa điểm tiếp nhận hồ sơ Chế độ chính sách và phát Giấy xác nhận ưu đãi giáo dục cho sinh viên là phòng nào?","Phòng 102 - Nhà C1"],[121,"Mức điểm rèn luyện (ĐRL) học kỳ 2025.2 tối thiểu đối với sinh viên Nhóm 2 đăng ký Học bổng Trần Đại Nghĩa là bao nhiêu điểm?","ĐRL ≥ 65 điểm"],[122,"Địa chỉ Văn phòng Tổ tư vấn và hỗ trợ sinh viên (SSU) chuyên tư vấn tâm lý và hỗ trợ học tập nằm tại phòng nào?","Phòng 101 - Nhà C1"],[123,"Sinh viên đang chịu hình thức kỷ luật nào tại thời điểm xét học bổng KKHT sẽ KHÔNG được xét cấp học bổng?","Chịu hình thức kỷ luật từ mức Khiển trách trở lên"],[124,"Tổ tư vấn tâm lý sinh viên (tiền thân của Tổ tư vấn và hỗ trợ sinh viên SSU) được thành lập vào ngày tháng năm nào?","Ngày 26/03/2019"],[125,"Việc nộp chứng chỉ ngoại ngữ quốc tế để quy đổi miễn học và công nhận chuẩn đầu ra được sinh viên thực hiện qua kênh nào?","Đăng ký trực tuyến trên hệ thống quản lý đào tạo (eHUST/QLDT) theo các đợt thông báo"],[126,"Trong Bảng đánh giá điểm rèn luyện sinh viên, Tiêu chí 1 \"Chấp hành pháp luật và nội quy, quy chế của nhà trường\" có điểm cộng tối đa là bao nhiêu?","Tối đa 25 điểm"],[127,"Chứng chỉ tiếng Trung HSK 6 kết hợp HSKK cao cấp tương ứng Bậc mấy trong Khung năng lực 6 bậc?","Bậc 6"],[128,"Chứng chỉ tiếng Pháp TCF quy đổi tương đương Bậc 3 (B1) yêu cầu điểm số TCF nằm trong khoảng nào?","300 - 399 điểm"],[129,"Không gian sinh hoạt chung dành cho sinh viên nội trú Ký túc xá nằm tại tầng mấy của tòa nhà B10?","Tầng 5 - Tòa nhà B10"],[130,"Sinh viên đoạt giải trong các cuộc thi chính thức cấp Quốc gia hoặc Quốc tế được cộng tối đa bao nhiêu điểm rèn luyện ở Mục 5.3?","Cộng 15 điểm"],[131,"Điểm CPA từ 3,2 đến cận 3,6 khi quy đổi sang dải điểm thang 10 tương đương có kết quả là bao nhiêu?","8,0 đến cận 9,0"],[132,"Kênh thanh toán học phí trực tuyến chính thức và an toàn dành cho sinh viên ĐHBK Hà Nội là gì?","Nộp trên Cổng thông tin sinh viên ctt.hust.edu.vn / app eHUST qua tài khoản ngân hàng liên kết"],[133,"Trụ sở làm việc của Tổ hỗ trợ triển khai hệ thống iCTSV đặt tại vị trí nào trong trường?","Phòng 102 - Nhà D3-5"],[134,"Mức Học bổng Chính phủ hỗ trợ hàng tháng đối với Học viên Thạc sĩ thuộc Chương trình đào tạo tài năng là bao nhiêu?","7.400.000 đồng / tháng"],[135,"Sinh viên xin nghỉ học tạm thời vì lý do cá nhân thông thường (ngoài y tế và nghĩa vụ quân sự) cần đáp ứng điều kiện tối thiểu nào?","Đã học ít nhất một học kỳ tại trường"],[136,"Sinh viên đăng ký học vượt quá số tín chỉ chuẩn quy định trong một học kỳ có được giảm đơn giá TCHP không?","Vẫn tính đúng đơn giá TCHP quy định của chương trình đào tạo"],[137,"Sinh viên học cùng lúc hai chương trình đào tạo (bằng kép) cần lưu ý quy định gì về việc đăng ký tốt nghiệp?","Bắt buộc phải đăng ký tốt nghiệp đồng thời trong cùng một đợt cho cả hai CTĐT"],[138,"Mức điểm đạt đối với các học phần thuộc chương trình đào tạo cử nhân và kỹ sư (ngoại trừ học phần tốt nghiệp) là từ mức điểm chữ nào?","Từ điểm D trở lên"],[139,"Theo Thông tư số 40/2026/TT-BGDĐT được trích dẫn trong Sổ tay sinh viên, có bao nhiêu hình thức xử lý kỷ luật đối với sinh viên?","04 hình thức (Khiển trách, Cảnh cáo, Đình chỉ học tập có thời hạn, Buộc thôi học)"],[140,"Mức học phí/1 TCHP của Chương trình đào tạo Kỹ sư chuyên sâu Trí tuệ nhân tạo tạo sinh (GenAI) được tính bằng mức học phí của chương trình cử nhân nào?","Chương trình Khoa học dữ liệu và Trí tuệ nhân tạo (IT-E10)"],[141,"Hệ số học phí áp dụng đối với các lớp học lại tổ chức ngoài kế hoạch theo đề nghị của sinh viên có sĩ số dưới 10 sinh viên là bao nhiêu?","Hệ số 2,0"],[142,"Sinh viên là con đẻ hoặc con nuôi hợp pháp của Người có công với cách mạng được hưởng mức hỗ trợ miễn giảm học phí là bao nhiêu?","Miễn 100% học phí"],[143,"Chuẩn tiếng Anh đầu ra đối với sinh viên chương trình liên kết đào tạo với Đại học TROY (Hoa Kỳ) khi xét tốt nghiệp là gì?","Chứng chỉ IELTS Academic 6.0 trở lên (hoặc TOEFL iBT tương đương)"],[144,"Chứng chỉ tiếng Anh VSTEP trình độ B1 tương ứng với Bậc mấy trong Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam?","Bậc 3"],[145,"Tiêu chuẩn xét Học bổng KKHT loại Khá (loại C) yêu cầu mức GPA và ĐRL tối thiểu là bao nhiêu?","GPA ≥ 2,5 và ĐRL ≥ 65"],[146,"Khi tham gia các sự kiện, hội họp trong nhà trường, sinh viên phải có mặt trước giờ khai mạc ít nhất bao nhiêu phút?","Trước 5 phút"],[147,"Kết quả rèn luyện học kỳ đạt từ 80 điểm đến 89 điểm được xếp loại gì?","Loại Tốt"],[148,"Sau thời gian nào hàng ngày, sinh viên không được tự ý tụ tập tại các khu vực công cộng thuộc khuôn viên Nhà trường nếu không được phép?","Sau 18h00"],[149,"Quy mô sức chứa tổng cộng của Ký túc xá Bách khoa hiện nay là bao nhiêu chỗ ở?","4.500 chỗ ở (gồm 8 tòa nhà 4-5 tầng)"],[150,"Theo Quy chế đào tạo 2025, sinh viên bị hạn chế khối lượng đăng ký học tập khi nào?","Khi bị cảnh báo học tập từ mức 2 trở lên tại học kỳ 1 của năm học"],[151,"Tiêu chuẩn về điểm rèn luyện (ĐRL) học kỳ tối thiểu để đạt Học bổng KKHT loại B (Giỏi) là bao nhiêu điểm?","ĐRL ≥ 80 điểm"],[152,"Học phần \"FL1135 Tiếng Anh cơ sở 5\" có khối lượng thời lượng quy định là bao nhiêu?","4(2-4-0-8)"],[153,"Chuẩn ngoại ngữ đầu ra đối với Chương trình đào tạo Tiếng Hàn Khoa học và Công nghệ quy định ra sao?","Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3"],[154,"Mức định mức cho vay tối đa theo Chương trình Vay vốn đối với sinh viên có hoàn cảnh khó khăn là bao nhiêu?","4.000.000đ / sinh viên / tháng"],[155,"Theo Quy chế đào tạo 2025, điều kiện trùng lặp nội dung chuyên môn tối thiểu giữa hai học phần để được xem là \"học phần tương đương\" là bao nhiêu?","70%"],[156,"Điều kiện học lực để sinh viên hết năm thứ nhất được xem xét chuyển sang học một chương trình đào tạo khác là gì?","CPA ≥ 2,5 (từ loại khá trở lên) và không bị cảnh báo học tập"],[157,"Chứng chỉ Aptis ESOL (đủ 4 kỹ năng) đạt trình độ B2 được quy đổi tương đương Bậc mấy?","Bậc 4"],[158,"Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi Đánh giá tư duy (TSA) cần đạt điểm xét tuyển tối thiểu là bao nhiêu?","Từ 72,47/100 trở lên"],[159,"Mức học phí đối với các học phần học ở học kỳ hè được tính như thế nào so với học kỳ chính?","Bằng 1,5 lần mức học phí kỳ chính"],[160,"Chứng chỉ IELTS Academic đạt từ 7.0 đến 8.0 được quy đổi tương đương với Bậc mấy theo Phụ lục II Quy định ngoại ngữ K71?","Bậc 5"],[161,"Trường hợp lớp học phần bị hủy do không đủ sĩ số tối thiểu theo quy định thì số tiền học phí sinh viên đã nộp xử lý ra sao?","Được hoàn trả hoặc trừ vào nghĩa vụ học phí của học kỳ tiếp theo"],[162,"Học phí đối với các lớp Vừa làm vừa học (VLVH) có sĩ số từ 10 đến 14 sinh viên áp dụng hệ số nhân học phí là bao nhiêu?","Hệ số 2,0"],[163,"Khối lượng học tập tối đa được xem xét công nhận và chuyển đổi tín chỉ từ một cơ sở đào tạo khác không được vượt quá bao nhiêu % khối lượng toàn khóa?","Không vượt quá 50%"],[164,"Sinh viên có quyền nộp đơn xin tự nguyện thôi học không và sau khi ra quyết định có được tiếp nhận trở lại không?","Được xin thôi học nhưng không được tiếp nhận trở lại"],[165,"Sinh viên nộp chậm học phí học kỳ hè quá thời hạn quy định sẽ bị xử lý như thế nào?","Bị đình chỉ học kỳ chính tiếp theo"],[166,"Quy mô lớp học phần tối thiểu đối với chương trình đào tạo thạc sĩ theo Quy chế 2025 được điều chỉnh thành bao nhiêu học viên?","5 học viên"],[167,"Để đạt Học bổng KKHT loại Xuất sắc (loại A), sinh viên cần đạt tiêu chuẩn GPA và điểm rèn luyện (ĐRL) học kỳ tối thiểu là bao nhiêu?","GPA ≥ 3,6 và ĐRL ≥ 90"],[168,"Học phí các học phần thuộc hệ Vừa làm vừa học hoặc Sau đại học được thực hiện tại cơ sở liên kết ngoài Đại học được tính bằng bao nhiêu % so với chương trình chuẩn?","Bằng 90% học phí chương trình chuẩn, cộng thêm kinh phí phối hợp đào tạo"],[169,"Trường hợp ngoại lệ nào sinh viên đề nghị rút học phần mà KHÔNG phải đóng học phí?","Đề nghị rút trong tuần đầu tiên của học kỳ thứ 2"],[170,"Chuẩn ngoại ngữ đầu ra xét tốt nghiệp đối với các chương trình chất lượng cao ELITECH giảng dạy bằng tiếng Pháp là gì?","Chứng chỉ tiếng Pháp DELF B2 hoặc TCF tương đương"],[171,"Khái niệm \"Học phần học trước\" khác với \"Học phần tiên quyết\" ở điểm cốt lõi nào?","Sinh viên chỉ cần đăng ký và học xong học phần A (có thể chưa đạt) là đã đủ điều kiện học học phần B"],[172,"Trọng số của điểm thi cuối kỳ đối với học phần từ 2 tín chỉ trở lên được quy định nằm trong khoảng nào?","Từ 0,5 đến 0,8"],[173,"Theo Quy chế đào tạo 2025, \"Lớp học phần rút gọn\" dành cho sinh viên học lại được mở khi đáp ứng những điều kiện nào?","Học lại ít nhất 02 lần chưa đạt, điểm quá trình từ 2,0 trở lên, sinh viên từ năm thứ 3 trở lên"],[174,"Cơ quan nào chịu trách nhiệm đánh giá khả năng và mức độ ứng dụng thực tế của đề tài ĐATN trong quy trình xét cấp Học bổng \"Gắn kết quê hương\"?","Hội đồng chấm Đồ án tốt nghiệp"],[175,"Đối với học phần từ 2 tín chỉ trở lên, nếu sinh viên bị điểm quá trình là điểm liệt (dưới 3,0 hoặc dưới 5,0 tùy môn) thì điểm kết thúc học phần được tính ra sao?","Điểm học phần là điểm F"],[176,"Mức học phí học lại học phần đối với Nghiên cứu sinh trình độ Tiến sĩ được quy định cụ thể là bao nhiêu?","850.000 đồng / TCHP"],[177,"Sinh viên không thể dự thi cuối kỳ do bị ốm hoặc tai nạn có hồ sơ hợp lệ được hoãn thi (điểm I) và dự thi bù trong thời hạn tối đa bao lâu?","Trong thời hạn 2 học kỳ chính tiếp theo"],[178,"Chứng chỉ tiếng Trung HSK 4 kết hợp HSKK trung cấp được Phụ lục VIII xếp vào Bậc mấy theo Khung 6 bậc?","Bậc 4"],[179,"Việc miễn giảm học phí cho sinh viên diện chế độ chính sách được thực hiện căn cứ theo văn bản quy định nào của Chính phủ?","Nghị định 238/2025/NĐ-CP"],[180,"Điểm chữ \"W\" xuất hiện trong bảng điểm của sinh viên mang ý nghĩa gì?","Điểm học phần sinh viên đã đăng ký rút thành công trong thời gian quy định"],[181,"Mức điểm chữ \"P\" được áp dụng cho loại học phần nào trong chương trình đào tạo?","Các học phần chỉ yêu cầu đạt, không tính vào điểm trung bình học tập"],[182,"Sinh viên K71 đăng ký học các lớp tiếng Anh tăng cường/dịch vụ ngoài giờ có phải nộp học phí không?","Phải nộp học phí theo quy định đối với lớp học phần dịch vụ/tăng cường"],[183,"Pháp lệnh của Ủy ban Thường vụ Quốc hội quy định ưu đãi người có công với cách mạng được áp dụng trong xét miễn giảm học phí là văn bản nào?","Pháp lệnh số 02/2020/UBTVQH14 ngày 09/12/2020"],[184,"Học phí của các lớp \"Học phần rút gọn\" (cho sinh viên học lại) được tính bằng bao nhiêu so với lớp bình thường?","Bằng 50%"],[185,"Địa chỉ văn phòng làm việc của Đoàn Thanh niên Đại học Bách khoa Hà Nội nằm tại phòng nào?","Phòng 208 - Tòa nhà C2"],[186,"Học viên cao học nghỉ học tạm thời vì lý do cá nhân thông thường được phép nghỉ thời gian tối đa là bao nhiêu?","Tối đa 12 tháng (và được tính vào thời gian học tập)"],[187,"Quy định về phương tiện giao thông di chuyển vào khuôn viên Trường Bách khoa như thế nào?","Xe đạp, xe máy, ô tô phải giảm tốc độ, quan sát và gửi xe đúng nơi quy định; xe taxi KHÔNG được vào trường"],[188,"Học phần \"Tiếng Pháp PFIEV 1\" (mã FL1801) có khối lượng thời lượng quy định là bao nhiêu?","3(1-4-0-6)"],[189,"Sinh viên được xét \"Miễn học\" học phần ngoại ngữ cơ bản sẽ được ghi ký hiệu điểm gì trên hệ thống?","Điểm R"],[190,"Hồ sơ đăng ký xét Học bổng Trần Đại Nghĩa bắt buộc phải có giấy tờ xác nhận của cơ quan nào?","Mẫu đơn đăng ký có xác nhận hoàn cảnh khó khăn của Ủy ban nhân dân địa phương nơi gia đình cư trú"],[191,"Sinh viên xin nghỉ học tạm thời vì lý do cá nhân sẽ bị xét buộc thôi học nếu tổng thời gian nghỉ vượt quá bao nhiêu học kỳ chính?","Nghỉ quá 04 học kỳ chính"],[192,"Ứng dụng di động chính thức hỗ trợ sinh viên theo dõi Điểm rèn luyện, cập nhật minh chứng và đăng ký hoạt động ngoại khóa là gì?","App iCTSV"],[193,"Kết quả bài thi kiểm tra tiếng Anh đầu khóa (HUST English Placement Test) đối với tân sinh viên K71 được sử dụng để làm gì?","Phân loại trình độ đầu vào, xếp lớp và xét miễn các học phần ngoại ngữ cơ bản"],[194,"Quy định về việc quản lý và sử dụng Thẻ sinh viên khi vào trường như thế nào?","Phải đeo thẻ sinh viên; Tuyệt đối không cho người khác mượn hoặc mượn thẻ người khác; Không được cầm cố thẻ sinh viên"],[195,"Mức học phí áp dụng đối với sinh viên quốc tế học các chương trình đào tạo bằng tiếng Anh được tính như thế nào?","Bằng 1,5 lần mức học phí quy định tương ứng"],[196,"Sinh viên có được tự ý hủy lớp học phần ngoại ngữ cơ bản đã đăng ký học song hành trong học kỳ không?","Không được phép hủy, trừ trường hợp xin rút hoặc chủ động rút toàn bộ đăng ký học tập trong học kỳ"],[197,"Sinh viên nộp hồ sơ văn bản giấy đăng ký Học bổng Trần Đại Nghĩa tại đâu?","Phòng C1 - 102 (gặp cô Nghiêm Thị Kim Chi)"],[198,"Sau khi có quyết định công nhận tốt nghiệp, Nhà trường sẽ cấp bằng tốt nghiệp cho sinh viên trong thời hạn bao lâu?","Trong thời hạn 03 tháng"],[199,"Các học phần Tiếng Anh cơ sở (NNCB) có được tính điểm vào GPA và CPA toàn khóa không?","Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (R) hoặc không đạt"],[200,"Sau khi kết quả đánh giá điểm rèn luyện dự kiến được công bố, sinh viên có thời gian tối thiểu bao nhiêu ngày làm việc để nộp kiến nghị nếu có thắc mắc?","Kết quả dự kiến được công bố ít nhất 05 ngày làm việc trước khi chính thức công nhận để sinh viên kiến nghị"]];

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const norm = s => (s || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[\u200b-\u200f\u00a0\u202f]/g, ' ')
    .replace(/[“”„"]/g, '"').replace(/[‘’`]/g, "'").replace(/[–—−]/g, '-')
    .replace(/\*/g, ' ').replace(/\s+/g, ' ').trim();
  const stripNum = s => s.replace(/^\s*\d{1,3}\s*[.)]\s*/, '');
  const toks = s => new Set(norm(s).split(/[^\p{L}\p{N}]+/u).filter(Boolean));
  const jac = (a, b) => {
    if (!a.size || !b.size) return 0;
    let i = 0; for (const x of a) if (b.has(x)) i++;
    return i / (a.size + b.size - i);
  };

  const KQ = KEY.map(([n, q, a]) => ({ n, q, a, qn: norm(q), an: norm(a), qt: toks(q), at: toks(a) }));

  const RADIO_SEL = 'input[type="radio"], [role="radio"]';

  function questionEls() {
    let els = [...document.querySelectorAll('[data-automation-id="questionItem"]')];
    if (!els.length) els = [...document.querySelectorAll('.office-form-question, [class*="question-item"]')];
    if (!els.length) {
      const set = new Set();
      document.querySelectorAll(RADIO_SEL).forEach(r => {
        let g = r.closest('[role="radiogroup"]');
        if (!g) { // leo lên đến khi container chứa >1 radio
          g = r.parentElement;
          while (g && g.querySelectorAll(RADIO_SEL).length < 2 && g !== document.body) g = g.parentElement;
        }
        if (g) {
          // leo lên container lớn nhất vẫn chỉ chứa đúng nhóm radio này (để bao gồm cả tiêu đề câu hỏi)
          const n = g.querySelectorAll(RADIO_SEL).length;
          while (g.parentElement && g.parentElement !== document.body && g.parentElement.querySelectorAll(RADIO_SEL).length === n) g = g.parentElement;
          set.add(g);
        }
      });
      els = [...set];
    }
    return els.filter(e => e.querySelector(RADIO_SEL));
  }

  function titleOf(el) {
    const t = el.querySelector('[data-automation-id="questionTitle"]');
    let txt = t ? t.textContent : '';
    if (!txt) {
      const rg = el.querySelector('[role="radiogroup"]');
      const lb = rg && rg.getAttribute('aria-labelledby');
      if (lb) txt = lb.split(/\s+/).map(id => (document.getElementById(id) || {}).textContent || '').join(' ');
    }
    if (!txt) { // không có tiêu đề rõ ràng: lấy toàn bộ chữ nằm TRƯỚC lựa chọn đầu tiên
      try {
        const first = el.querySelector(RADIO_SEL);
        const box = first.closest('[data-automation-id="choiceItem"], label, [class*="choice"]') || first.parentElement;
        const rg = document.createRange();
        rg.setStart(el, 0); rg.setEndBefore(box);
        txt = rg.toString();
      } catch (e) { /* bỏ qua */ }
    }
    if (!txt || txt.trim().length < 5) txt = (el.innerText || '').slice(0, 500);
    const ord = el.querySelector('[data-automation-id="questionOrdinal"]');
    return { text: txt, ord: ord ? parseInt(ord.textContent, 10) : null };
  }

  function optionsOf(el) {
    return [...el.querySelectorAll(RADIO_SEL)].map(r => {
      const box = r.closest('[data-automation-id="choiceItem"], label, [class*="choice"]') || r.parentElement;
      const cands = [
        r.getAttribute('aria-label'),
        r.getAttribute('value'),
        box && box.textContent,
        r.parentElement && r.parentElement.textContent,
        r.parentElement && r.parentElement.parentElement && r.parentElement.parentElement.textContent,
      ].filter(Boolean).map(norm).filter(Boolean);
      return { r, cands };
    });
  }

  const isChecked = r => r.checked === true || r.getAttribute('aria-checked') === 'true';

  function findOption(opts, k) {
    // 1) khớp tuyệt đối
    let o = opts.find(x => x.cands.some(c => c === k.an));
    if (o) return o;
    // 2) chứa nhau (ưu tiên ứng viên ngắn nhất để tránh "Bậc 4" khớp "Bậc 4.1")
    const inc = opts.filter(x => x.cands.some(c => c === k.an || c.startsWith(k.an) || k.an.startsWith(c)));
    if (inc.length === 1) return inc[0];
    // 3) Jaccard
    let best = null, bs = 0;
    for (const x of opts) {
      const s = Math.max(...x.cands.map(c => jac(toks(c), k.at)));
      if (s > bs) { bs = s; best = x; }
    }
    return bs >= 0.75 ? best : null;
  }

  function findKey(el, usedKeys) {
    const { text, ord } = titleOf(el);
    const tt = toks(stripNum(text));
    const opts = optionsOf(el);
    let best = null, bs = 0;
    for (const k of KQ) {
      let s = jac(tt, k.qt);
      if (s < 0.3) continue;
      if (ord && ord === k.n) s += 0.15;
      if (opts.some(x => x.cands.some(c => c === k.an))) s += 0.2;   // đáp án có trong các lựa chọn → tăng độ tin cậy
      if (usedKeys.has(k.n)) s -= 0.05;
      if (s > bs) { bs = s; best = k; }
    }
    return bs >= 0.6 ? { k: best, score: bs, opts, title: text } : { k: null, score: bs, opts, title: text };
  }

  async function click(r) {
    r.scrollIntoView({ block: 'center' });
    r.click();
    await sleep(CFG.delay / 2);
    if (!isChecked(r)) {
      const box = r.closest('label') || r.parentElement;
      if (box) box.click();
      await sleep(CFG.delay / 2);
    }
    if (!isChecked(r)) {
      ['mousedown', 'mouseup', 'click'].forEach(t => r.dispatchEvent(new MouseEvent(t, { bubbles: true, cancelable: true })));
    }
    await sleep(CFG.delay);
    return isChecked(r);
  }

  const done = new WeakSet();
  const usedKeys = new Set();
  const stat = { filled: 0, already: 0, noQ: [], noOpt: [], fail: [] };

  async function fillVisible() {
    let idle = 0;
    for (let round = 0; round < 80 && idle < 2; round++) {
      const els = questionEls().filter(e => !done.has(e));
      if (!els.length) { idle++; window.scrollBy(0, innerHeight * 0.8); await sleep(250); continue; }
      idle = 0;
      for (const el of els) {
        done.add(el);
        el.scrollIntoView({ block: 'center' });
        const m = findKey(el, usedKeys);
        if (!m.k) { stat.noQ.push((m.title || '').trim().slice(0, 80)); continue; }
        usedKeys.add(m.k.n);
        const opt = findOption(m.opts, m.k);
        if (!opt) { stat.noOpt.push(m.k.n + ': ' + m.k.a.slice(0, 60)); continue; }
        if (isChecked(opt.r)) { stat.already++; continue; }
        if (CFG.dryRun) { console.log(`[dry] Câu ${m.k.n} -> ${m.k.a}`); stat.filled++; continue; }
        const ok = await click(opt.r);
        if (ok) { stat.filled++; console.log(`✔ Câu ${m.k.n}: ${m.k.a}`); }
        else { stat.fail.push(m.k.n); console.warn(`✘ Câu ${m.k.n}: không tick được`); }
      }
      window.scrollBy(0, innerHeight * 0.6);
      await sleep(200);
    }
  }

  const btnText = b => norm(b.innerText || b.textContent || b.getAttribute('aria-label') || '');
  const findBtn = (re, autoId) => {
    const byId = document.querySelector(`[data-automation-id="${autoId}"]`);
    if (byId) return byId;
    return [...document.querySelectorAll('button, [role="button"]')].find(b => re.test(btnText(b)) && !b.disabled);
  };

  for (let page = 1; page <= CFG.maxPages; page++) {
    console.log(`%c— Trang ${page} —`, 'color:#0a7');
    window.scrollTo(0, 0); await sleep(300);
    await fillVisible();
    const next = findBtn(/^(next|tiep|tiep theo|continue)$/, 'nextButton');
    if (next && CFG.autoNext) {
      next.scrollIntoView({ block: 'center' }); await sleep(300);
      next.click(); await sleep(1500);
      continue;
    }
    const submit = findBtn(/^(submit|gui|nop|nop bai)$/, 'submitButton');
    if (submit && CFG.autoSubmit && !CFG.dryRun) { await sleep(500); submit.click(); console.log('Đã bấm Gửi.'); }
    break;
  }

  console.log('%c===== KẾT QUẢ =====', 'font-weight:bold;color:#06c');
  console.log(`Đã tick: ${stat.filled} | đã có sẵn đúng: ${stat.already} | tổng đáp án trong script: ${KQ.length}`);
  if (stat.noQ.length)  console.warn('Không nhận diện được câu hỏi:', stat.noQ);
  if (stat.noOpt.length) console.warn('Không tìm thấy lựa chọn tương ứng:', stat.noOpt);
  if (stat.fail.length) console.warn('Click không ăn:', stat.fail);
  console.log('→ Hãy cuộn lại kiểm tra các câu còn trống, rồi tự bấm Gửi/Submit.');

  // Hàm hỗ trợ debug nếu script không nhận diện được cấu trúc form
  window.__qfDebug = () => {
    const els = questionEls();
    console.log('Số khối câu hỏi tìm thấy:', els.length);
    els.slice(0, 3).forEach(e => { console.log(e); console.log(titleOf(e), optionsOf(e).map(o => o.cands)); });
  };
})();
