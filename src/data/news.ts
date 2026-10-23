import { NewsArticle, NewsCategory } from '../types/news';

export const NEWS_CATEGORIES: NewsCategory[] = [
  {
    id: 'gioi-thieu',
    name: 'Giới thiệu Hội',
    description: 'Lịch sử hình thành, điều lệ, cơ cấu tổ chức và truyền thống vẻ vang của Hội Cựu TNXP TP Hà Nội'
  },
  {
    id: 'hoat-dong-hoi',
    name: 'Hoạt động Hội',
    description: 'Phong trào thi đua, nghĩa tình đồng đội và các sự kiện công tác Hội các cấp'
  },
  {
    id: 'tin-moi',
    name: 'Tin mới',
    description: 'Thông tin thời sự, thông tri hướng dẫn và các tin tức mới nhất'
  },
  {
    id: 'van-ban-phap-luat',
    name: 'Văn bản pháp luật',
    description: 'Chủ trương, chính sách của Đảng, Nhà nước và Thành phố đối với Cựu TNXP'
  },
  {
    id: 'trang-tho-ca',
    name: 'Trang Thơ – Ca',
    description: 'Các sáng tác thơ, văn nghệ ca ngợi người chiến sĩ TNXP và tình đồng chí'
  },
  {
    id: 'ky-uc-tnxp',
    name: 'Ký ức TNXP',
    description: 'Những hồi ức chiến trường, tuyến lửa và kỷ niệm một thời tuổi trẻ hào hùng'
  },
  {
    id: 'guong-sang',
    name: 'Gương sáng',
    description: 'Biểu dương các cán bộ, hội viên cựu TNXP gương mẫu làm kinh tế, vì cộng đồng'
  },
  {
    id: 'song-khoe',
    name: 'Sống khỏe',
    description: 'Lời khuyên dinh dưỡng, tập luyện dưỡng sinh và chăm sóc sức khỏe tuổi vàng'
  }
];

export const MOCK_NEWS_ARTICLES: NewsArticle[] = [
  // 1. Tin tiêu điểm nổi bật (Featured Main)
  {
    id: 'dai-hoi-thi-dua-yeu-nuoc-hoi-cuu-tnxp-ha-noi',
    title: 'Hội Cựu TNXP TP Hà Nội đẩy mạnh phong trào thi đua "Cựu TNXP nêu gương sáng học tập và làm theo Bác"',
    category: 'Hoạt động Hội',
    categoryId: 'hoat-dong-hoi',
    publishDate: '23/10/2026',
    isFeatured: true,
    author: 'Ban Tuyên giáo Thành hội',
    readTime: '5 phút',
    summary: 'Tổng kết phong trào thi đua yêu nước giai đoạn mới, lan tỏa sâu rộng tinh thần dũng cảm năm xưa vào công tác giáo dục truyền thống cho thế hệ trẻ Thủ đô hôm nay.',
    content: [
      'Trong không khí phấn khởi chào mừng các ngày lễ lớn của Thủ đô và đất nước, Thường trực Thành hội Hội Cựu TNXP TP Hà Nội đã tổ chức hội nghị sơ kết phong trào thi đua "Cựu TNXP nêu gương sáng theo lời dạy và tấm gương đạo đức, phong cách Hồ Chí Minh".',
      'Hội nghị đánh giá cao những nỗ lực bền bỉ của hơn 30 Quận, Huyện, Thị hội trong việc chủ động phối hợp với các ban ngành, đoàn thể địa phương. Nhiều mô hình nghĩa tình đồng đội đã mang lại hiệu quả thiết thực như: Quỹ nghĩa tình đồng đội, phong trào xây dựng nhà tình nghĩa, chăm sóc cựu TNXP cô đơn không nơi nương tựa.',
      'Phát biểu chỉ đạo tại hội nghị, đại diện lãnh đạo Thành hội nhấn mạnh: "Mỗi cán bộ, hội viên cựu TNXP tuy tuổi đã cao nhưng ý chí kiên cường, phẩm chất anh bộ đội cụ Hồ và truyền thống kiên trung của lực lượng TNXP Thủ đô mãi mãi là ngọn lửa sưởi ấm niềm tin cho con cháu noi theo".',
      'Thời gian tới, Thành hội tiếp tục đẩy mạnh công tác rà soát chính sách, số hóa thông tin hội viên và phối hợp chặt chẽ với Đoàn TNCS Hồ Chí Minh TP Hà Nội tổ chức các buổi giao lưu nhân chứng lịch sử tại các trường học.'
    ]
  },

  // 2. Tin mới (Recent)
  {
    id: 'trao-nha-nghia-tinh-dong-doi-huyen-soc-son',
    title: 'Khánh thành và bàn giao nhà "Nghĩa tình đồng đội" cho cựu nữ TNXP có hoàn cảnh khó khăn',
    category: 'Hoạt động Hội',
    categoryId: 'hoat-dong-hoi',
    publishDate: '21/10/2026',
    author: 'Huyện hội Sóc Sơn',
    readTime: '3 phút',
    summary: 'Ngôi nhà mới khang trang trị giá hơn 150 triệu đồng từ nguồn quỹ xã hội hóa đã được trao tặng cho nữ cựu TNXP từng phục vụ tại trọng điểm Truông Bồn.',
    content: [
      'Ngày 21/10, Hội Cựu TNXP huyện Sóc Sơn phối hợp với chính quyền địa phương và các nhà hảo tâm tổ chức lễ bàn giao nhà "Nghĩa tình đồng đội" cho đồng chí Nguyễn Thị Lan, cựu TNXP Đại đội 814.',
      'Ngôi nhà cấp 4 trước đây đã xuống cấp nghiêm trọng. Sau hơn 2 tháng thi công khẩn trương với sự hỗ trợ ngày công của đoàn viên thanh niên xã, ngôi nhà mới mái bằng kiên cố, sạch đẹp đã hoàn thành kịp đón mùa đông ấm áp.',
      'Đón nhận món quà đầy nghĩa tình, đồng chí Lan xúc động bày tỏ lòng biết ơn sâu sắc đối với sự quan tâm của Thành hội, các cấp ủy Đảng và đồng chí, đồng đội đã luôn kề vai sát cánh giúp đỡ trong cuộc sống.'
    ]
  },

  // 3. Tin Giới thiệu Hội
  {
    id: 'gioi-thieu-truyen-thong-ve-vang-luc-luong-tnxp-ha-noi',
    title: 'Lực lượng Thanh niên xung phong Thủ đô: 75 năm một chặng đường vẻ vang vì Tổ quốc',
    category: 'Giới thiệu Hội',
    categoryId: 'gioi-thieu',
    publishDate: '15/10/2026',
    author: 'Văn phòng Thành hội',
    readTime: '6 phút',
    summary: 'Ôn lại truyền thống hào hùng từ Đội TNXP đầu tiên do Bác Hồ sáng lập năm 1950 đến những đóng góp to lớn của lực lượng TNXP Hà Nội trong kháng chiến và dựng xây đất nước.',
    content: [
      'Cách đây hơn 7 thập kỷ, vào ngày 15/7/1950, tại chiến khu Việt Bắc, Đội TNXP công tác đầu tiên đã được thành lập theo chỉ thị của Chủ tịch Hồ Chí Minh kính yêu.',
      'Hưởng ứng lời kêu gọi thiêng liêng của Người, hàng vạn người con ưu tú của Hà Nội đã hăng hái lên đường, có mặt ở những cung đường ác liệt nhất: từ Điện Biên Phủ, ngã ba Đồng Lộc, đường 20 Quyết Thắng, đến tuyến lửa Trường Sơn.',
      'Hôm nay, Hội Cựu TNXP TP Hà Nội là ngôi nhà chung ấm áp của các cựu cán bộ, đội viên. Hội không ngừng đổi mới phương thức hoạt động, giữ vững tôn chỉ "Trung dũng - Quyết thắng - Tình nghĩa đồng đội", đóng góp tích cực vào công cuộc xây dựng Thủ đô văn hiến, văn minh, hiện đại.'
    ]
  },

  // 4. Tin Văn bản pháp luật
  {
    id: 'pho-bien-che-do-chinh-sach-nguoi-co-cong-nam-2026',
    title: 'Hướng dẫn mới về thực hiện chế độ bảo hiểm y tế và trợ cấp mai táng đối với cựu TNXP',
    category: 'Văn bản pháp luật',
    categoryId: 'van-ban-phap-luat',
    publishDate: '18/10/2026',
    author: 'Ban Chính sách Thành hội',
    readTime: '4 phút',
    summary: 'Tập hợp các điểm mới cần lưu ý trong quy trình cấp đổi thẻ BHYT và giải quyết chế độ mai táng phí cho cựu TNXP đã hoàn thành nhiệm vụ theo quy định hiện hành.',
    content: [
      'Nhằm bảo đảm quyền lợi hợp pháp, chính đáng cho toàn thể hội viên, Ban Chính sách Hội Cựu TNXP TP Hà Nội tổng hợp một số nội dung hướng dẫn về chế độ chính sách đang được áp dụng.',
      'Căn cứ các nghị định của Chính phủ và hướng dẫn liên ngành Lao động - Thương binh & Xã hội, Bảo hiểm xã hội, toàn bộ cựu TNXP có đủ hồ sơ chứng minh thời gian phục vụ đều được cấp thẻ BHYT theo mã đối tượng ưu tiên.',
      'Hội viên có thắc mắc hoặc cần hỗ trợ thủ tục hồ sơ xin liên hệ trực tiếp với Thường trực Chi hội hoặc Quận/Huyện hội nơi cư trú để được hướng dẫn chi tiết, kịp thời.'
    ]
  },

  // 5. Tin Ký ức TNXP
  {
    id: 'ky-uc-tuyen-lua-dong-loc-nam-ay',
    title: 'Ký ức tuyến lửa: Những đêm không ngủ giữ mạch máu giao thông Ngã ba Đồng Lộc',
    category: 'Ký ức TNXP',
    categoryId: 'ky-uc-tnxp',
    publishDate: '12/10/2026',
    author: 'Cựu TNXP Lê Quang Dũng',
    readTime: '7 phút',
    summary: 'Dưới mưa bom bão đạn của máy bay giặc, những chàng trai cô gái tuổi mười tám đôi mươi vẫn kiên gan bám đường, quyết tâm "Tim có thể ngừng đập nhưng mạch máu giao thông không thể tắc".',
    content: [
      'Mỗi lần có dịp trở lại chiến trường xưa, trong lòng tôi lại dâng lên niềm xúc động nghẹn ngào. Mùa hè năm 1968, cung đường Khe Giao - Đồng Lộc như một chảo lửa khổng lồ.',
      'Ban ngày bom cày xới, ban đêm chúng tôi lại lao ra san lấp hố bom, hướng dẫn từng chiếc xe chở đạn, chở gạo vượt qua trọng điểm. Cơm nắm muối vừng, áo sũng nước mưa và khói bom cay xè khóe mắt nhưng tiếng hát vẫn vang vọng khắp núi rừng.',
      'Hơn nửa thế kỷ đã trôi qua, những người đồng đội ngã xuống đã hóa thành bất tử. Chúng tôi, những người may mắn trở về, luôn nhắc nhở bản thân phải sống sao cho xứng đáng với sự hy sinh vô giá ấy.'
    ]
  },

  // 6. Trang Thơ – Ca
  {
    id: 'bai-tho-khuc-ca-nguoi-mo-duong-thu-do',
    title: 'Chùm thơ: "Khúc ca người mở đường Thủ đô" & "Nghĩa tình đồng đội hôm nay"',
    category: 'Trang Thơ – Ca',
    categoryId: 'trang-tho-ca',
    publishDate: '08/10/2026',
    author: 'CLB Thơ Cựu TNXP Hà Nội',
    readTime: '3 phút',
    summary: 'Những vần thơ mộc mạc, thấm đượm tình đồng chí và hào khí một thời xẻ dọc Trường Sơn đi cứu nước của các tác giả hội viên.',
    content: [
      'Gửi lại giảng đường trang sách mở\nChúng tôi đi theo tiếng gọi non sông\nMái tóc xanh gội mưa bom bão đạn\nĐôi tay trần bạt núi thông đường đông.',
      'Đường Trường Sơn nay rợp bóng cây xanh\nĐồng đội ơi, người còn người mất\nNhưng khúc tráng ca vẫn ngời trong lòng đất\nVà tình thương mãi thắm đượm nghĩa tình.',
      'Chiều nay gặp lại bạn xưa\nBạc phơ mái tóc vẫn vừa nụ cười\nNắm tay ôn chuyện một thời\nThanh xuân dâng trọn cho đời bình yên.'
    ]
  },

  // 7. Gương sáng
  {
    id: 'guong-sang-cuu-tnxp-lam-kinh-te-gioi-o-dong-anh',
    title: 'Cựu TNXP Trần Văn Hòa: Giữ vững tinh thần thép trong phát triển kinh tế trang trại',
    category: 'Gương sáng',
    categoryId: 'guong-sang',
    publishDate: '05/10/2026',
    author: 'Đài truyền thanh huyện Đông Anh',
    readTime: '4 phút',
    summary: 'Rời chiến trường trở về với thương tật và hai bàn tay trắng, đồng chí Hòa đã vươn lên làm giàu chính đáng từ mô hình kinh tế VAC, tạo việc làm cho con em đồng đội.',
    content: [
      'Ở tuổi ngoài 70, cựu TNXP Trần Văn Hòa (xã Cổ Loa, huyện Đông Anh) vẫn thoăn thoắt kiểm tra từng khu chuồng trại và ao cá. Ít ai biết ông từng là chiến sĩ phá bom nổ chậm trên tuyến lửa đường 15.',
      'Không cam chịu đói nghèo, ông mạnh dạn vay vốn Quỹ nghĩa tình đồng đội, cải tạo vùng đất chiêm trũng thành trang trại sinh thái trù phú. Mỗi năm, trang trại cho doanh thu hàng trăm triệu đồng.',
      'Không chỉ làm giàu cho gia đình, ông Hòa còn thường xuyên giúp đỡ cây, con giống và hướng dẫn kỹ thuật cho các hội viên khác cùng vươn lên thoát nghèo bền vững.'
    ]
  },

  // 8. Sống khỏe
  {
    id: 'bi-quyet-tap-duong-sinh-va-dinh-duong-tuoi-vang',
    title: 'Bác sĩ tư vấn: Bài tập dưỡng sinh 15 phút mỗi sáng và chế độ ăn bổ não cho người cao tuổi',
    category: 'Sống khỏe',
    categoryId: 'song-khoe',
    publishDate: '02/10/2026',
    author: 'BS. Nguyễn Thanh Tùng - Chuyên khoa Lão khoa',
    readTime: '4 phút',
    summary: 'Những hướng dẫn thực tế, dễ áp dụng tại nhà giúp các cô chú cựu TNXP duy trì sự dẻo dai của xương khớp, ổn định huyết áp và có giấc ngủ an lành.',
    content: [
      'Bước vào độ tuổi vàng, việc duy trì lối sống lành mạnh là chìa khóa vàng giúp các bác, các cô chú nâng cao chất lượng cuộc sống và tinh thần lạc quan.',
      'Chỉ cần dành 15-20 phút mỗi sáng thực hiện các động tác khởi động nhẹ nhàng, hít thở sâu theo phương pháp dưỡng sinh sẽ giúp lưu thông khí huyết, giảm đau mỏi vai gáy và cải thiện chức năng tim mạch.',
      'Về dinh dưỡng, nên tăng cường rau xanh, cá béo, các loại đậu hạt; giảm muối và đường trong khẩu phần ăn hàng ngày; uống đủ nước ấm và giữ ấm cơ thể khi thời tiết giao mùa.'
    ]
  }
];

export function getAllArticles(): NewsArticle[] {
  return MOCK_NEWS_ARTICLES;
}

export function getArticleById(id: string): NewsArticle | undefined {
  return MOCK_NEWS_ARTICLES.find(a => a.id === id);
}

export function getArticlesByCategory(categoryId: string): NewsArticle[] {
  return MOCK_NEWS_ARTICLES.filter(a => a.categoryId === categoryId);
}

export function getFeaturedArticles(): { main: NewsArticle; recent: NewsArticle[] } {
  const main = MOCK_NEWS_ARTICLES.find(a => a.isFeatured) || MOCK_NEWS_ARTICLES[0];
  const recent = MOCK_NEWS_ARTICLES.filter(a => a.id !== main.id).slice(0, 4);
  return { main, recent };
}
