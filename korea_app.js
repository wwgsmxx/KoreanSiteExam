const TICKETS = [
    {
        id: 1,
        title: "Билет 1",
        vocab: [
            { word: "전공", value: "Специальность/мамандық", example: "제 전공은 정보기술입니다." },
            { word: "학생", value: "Студент/студент", example: "저는 대학교 학생입니다." },
            { word: "대학교", value: "Университет/жоғары оқу орны", example: "저는 대학교에 다닙니다." },
            { word: "수업", value: "Урок/сабақ", example: "오늘 수업이 있습니다." },
            { word: "공부", value: "Учеба/оқу", example: "저는 매일 집에서 공부합니다." }
        ],
        grammar: {
            title: "–아요 / –어요",
            desc: "Окончание настоящего времени вежливого неофициального стиля. Используется в разговорной речи.",
            example: "저는 학교에 가요.",
            task: "Преобразуйте '가다' (Идти) в вежливый стиль."
        },
        reading: {
            text: "저는 대학교 2학년 학생이에요. 전공 수업이 있어요. 매일 아침에 학교에 가요. 수업이 많아요. 친구하고 같이 공부해요. 가끔 도서관에 가요. 공부가 조금 어려워요. 그래도 열심히 해요. 학교 생활이 바빠요.",
            questions: [
                { q: "저는 몇 학년 학생이에요?", a: "2학년" },
                { q: "어디에 가서 공부해요?", a: "도서관" },
                { q: "학교 생활은 어때요?", a: "바빠요" }
            ]
        }
    },
    {
        id: 2,
        title: "Билет 2",
        vocab: [
            { word: "아르바이트", value: "Подработка/қосымша жұмыс", example: "저는 주말에 아르바이트를 해요." },
            { word: "가게", value: "Магазин/дүкен", example: "가게에서 일해요." },
            { word: "시간", value: "Время/уақыт", example: "시간이 빨리 가요." },
            { word: "일", value: "Работа/жұмыс", example: "일이 많아요." },
            { word: "주말", value: "Выходные/демалыс", example: "주말에 쉬어요." }
        ],
        grammar: {
            title: "-에서",
            desc: "Частица места действия. Указывает, где происходит действие.",
            example: "카페에서 일해요.",
            task: "Скажите 'Учусь в библиотеке' (добавьте частицу к 도서관)."
        },
        reading: {
            text: "저는 주말에 아르바이트를 해요. 카페에서 일해요. 일이 많아요. 시간이 빨리 가요. 조금 피곤하지만 괜찮아요.",
            questions: [
                { q: "언제 아르바이트를 해요?", a: "주말" },
                { q: "어디에서 일해요?", a: "카페" },
                { q: "기분은 어때요?", a: "괜찮아요" }
            ]
        }
    },
    {
        id: 3,
        title: "Билет 3",
        vocab: [
            { word: "약속", value: "Обещание/уәде", example: "친구하고 약속이 있어요." },
            { word: "친구", value: "Друг/дос", example: "친구를 만나요." },
            { word: "장소", value: "Место/орын", example: "장소는 카페예요." },
            { word: "시간", value: "Время/уақыт", example: "시간이 충분해요." },
            { word: "카페", value: "Кафе/кафе", example: "카페에 가요." }
        ],
        grammar: {
            title: "-(으)ㄹ까요?",
            desc: "Вопросительное окончание для предложения или вопроса мнения ('Может...?').",
            example: "같이 갈까요?",
            task: "Предложите 'Выпить кофе' (마시다 -> 마실까요?)."
        },
        reading: {
            text: "친구하고 약속이 있어요. 같이 영화를 볼까요? 아니면 카페에 갈까요? 시간이 충분해요. 기분이 좋아요.",
            questions: [
                { q: "누구하고 약속이 있어요?", a: "친구" },
                { q: "어디에 갈까요?", a: "카페" },
                { q: "기분은 어때요?", a: "좋아요" }
            ]
        }
    },
    {
        id: 4,
        title: "Билет 4",
        vocab: [
            { word: "여행", value: "саяхат/Путешествие", example: "여행에 가요." },
            { word: "나라", value: "ел/страна", example: "다른 나라에 가요." },
            { word: "비행기", value: "ұшақ/самолет", example: "비행기를 타요." },
            { word: "공항", value: "әуежай/аэропорт", example: "공항에 가요." },
            { word: "사진", value: "сурет/фото", example: "사진을 찍어요." }
        ],
        grammar: {
            title: "–에 가다",
            desc: "белгілі бір жерге баруды білдіреді.",
            example: "1. 학교에 가요.\n2. 여행에 가요.",
            task: "Составьте предложение, используя '–에 가다'."
        },
        reading: {
            text: "저는 방학에 여행에 가요. 비행기를 타요. 여행은 재미있어요.",
            questions: [
                { q: "언제 여행에 가요?", a: "방학에 가요" },
                { q: "무엇을 타요?", a: "비행기를 타요" },
                { q: "여행은 어때요?", a: "재미있어요" }
            ]
        }
    },
    {
        id: 5,
        title: "Билет 5",
        vocab: [
            { word: "건강", value: "денсаулық/здоровье", example: "건강이 중요해요." },
            { word: "운동", value: "спорт/физкультура", example: "운동을 해요." },
            { word: "공원", value: "саябақ/парк", example: "공원에 가요." },
            { word: "걷다", value: "жүру/ходить", example: "걸어요." },
            { word: "시간", value: "уақыт/время", example: "시간이 있어요." }
        ],
        grammar: {
            title: "–고",
            desc: "іс-әрекеттерді байланыстырады.",
            example: "1. 걷고 운동해요.\n2. 먹고 쉬어요.",
            task: "Составьте предложение с '–고'."
        },
        reading: {
            text: "저는 공원에서 운동해요. 걷고 운동해요. 기분이 좋아요.",
            questions: [
                { q: "어디에서 운동해요?", a: "공원에서 해요" },
                { q: "무엇을 해요?", a: "걷고 운동해요" },
                { q: "기분은 어때요?", a: "좋아요" }
            ]
        }
    },
    {
        id: 6,
        title: "Билет 6",
        vocab: [
            { word: "취미", value: "хобби/хобби", example: "제 취미는 음악이에요." },
            { word: "음악", value: "музыка/музыка", example: "음악을 들어요." },
            { word: "영화", value: "кино/фильм", example: "영화를 봐요." },
            { word: "집", value: "үй/дом", example: "집에서 봐요." },
            { word: "시간", value: "уақыт/время", example: "시간이 있어요." }
        ],
        grammar: {
            title: "–을/를",
            desc: "тура толықтауышты білдіреді.",
            example: "1. 음악을 들어요.\n2. 영화를 봐요.",
            task: "Составьте предложение с '–을/를'."
        },
        reading: {
            text: "제 취미는 음악이에요. 집에서 음악을 들어요. 시간이 있을 때 영화를 봐요.",
            questions: [
                { q: "취미는 뭐예요?", a: "음악이에요" },
                { q: "어디에서 음악을 들어요?", a: "집에서 들어요" },
                { q: "언제 영화를 봐요?", a: "시간이 있을 때 봐요" }
            ]
        }
    },
    {
        id: 7,
        title: "Билет 7",
        vocab: [
            { word: "식당", value: "мейрамхана/ресторан", example: "식당에 가요." },
            { word: "메뉴", value: "мәзір/меню", example: "메뉴를 봐요." },
            { word: "음식", value: "тағам/еда", example: "음식을 주문해요." },
            { word: "주문", value: "тапсырыс/заказ", example: "주문해요." },
            { word: "물", value: "су/вода", example: "물을 마셔요." }
        ],
        grammar: {
            title: "–(으)세요",
            desc: "сыпайы өтініш.",
            example: "1. 앉으세요.\n2. 물을 주세요.",
            task: "Составьте предложение с '–(으)세요'."
        },
        reading: {
            text: "저는 식당에 가요. 음식을 주문해요. 음식은 맛있어요.",
            questions: [
                { q: "어디에 가요?", a: "식당에 가요" },
                { q: "무엇을 주문해요?", a: "음식을 주문해요" },
                { q: "음식은 어때요?", a: "맛있어요" }
            ]
        }
    },
    {
        id: 8,
        title: "Билет 8",
        vocab: [
            { word: "날씨", value: "ауа райы/погода", example: "날씨가 좋아요." },
            { word: "비", value: "жаңбыр/дождь", example: "비가 와요." },
            { word: "우산", value: "қолшатыр/зонт", example: "우산을 써요." },
            { word: "길", value: "жол/дорога", example: "길이 미끄러워요." },
            { word: "사람", value: "адам/человек", example: "사람이 많아요." }
        ],
        grammar: {
            title: "–지 마세요",
            desc: "тыйым салу.",
            example: "1. 뛰지 마세요.\n2. 걱정하지 마세요.",
            task: "Составьте предложение с '–지 마세요'."
        },
        reading: {
            text: "오늘은 비가 와요. 그래서 우산을 써요. 밖에서 뛰지 마세요.",
            questions: [
                { q: "오늘 날씨는 어때요?", a: "비가 와요" },
                { q: "무엇을 써세요?", a: "우산을 써요" },
                { q: "무엇을 하지 마세요?", a: "뛰지 마세요" }
            ]
        }
    },
    {
        id: 9,
        title: "Билет 9",
        vocab: [
            { word: "시험", value: "емтихан/экзамен", example: "시험이 있어요." },
            { word: "공부", value: "оқу/учеба", example: "공부해요." },
            { word: "도서관", value: "кітапхана/библиотека", example: "도서관에 가요." },
            { word: "학생", value: "студент/студент", example: "학생이 많아요." },
            { word: "시간", value: "уақыт/время", example: "시간이 필요해요." }
        ],
        grammar: {
            title: "–에서",
            desc: "Іс-әрекет орны.",
            example: "도서관에서 공부해요.",
            task: "Составьте предложение с '–에서'."
        },
        reading: {
            text: "저는 도서관에서 공부해요. 도서관은 조용해요. 열심히 공부해요.",
            questions: [
                { q: "어디에서 공부해요?", a: "도서관에서 해요" },
                { q: "도서관은 어때요?", a: "조용해요" },
                { q: "무엇을 해요?", a: "공부해요" }
            ]
        }
    },
    {
        id: 10,
        title: "Билет 10",
        vocab: [
            { word: "컴퓨터", value: "компьютер/компьютер", example: "컴퓨터를 사용해요." },
            { word: "과제", value: "тапсырма/задание", example: "과제가 있어요." },
            { word: "인터넷", value: "интернет/интернет", example: "인터넷을 사용해요." },
            { word: "정보", value: "ақпарат/информация", example: "정보를 찾아요." },
            { word: "시간", value: "уақыт/время", example: "시간이 많이 걸려요." }
        ],
        grammar: {
            title: "–하고",
            desc: "–하고 екі затты немесе әрекетті байланыстырады.",
            example: "1. 컴퓨터하고 인터넷을 사용해요.\n2. 친구하고 공부해요.",
            task: "Составьте предложение с '–하고'."
        },
        reading: {
            text: "저는 컴퓨터하고 인터넷을 사용해요. 인터넷에서 정보를 찾아요. 기분이 좋아요.",
            questions: [
                { q: "무엇을 사용해요?", a: "컴퓨터하고 인터넷을 사용해요" },
                { q: "어디에서 정보를 찾아요?", a: "인터넷에서 찾아요" },
                { q: "기분은 어때요?", a: "기분이 좋아요" }
            ]
        }
    },
    {
        id: 11,
        title: "Билет 11",
        vocab: [
            { word: "계획", value: "жоспар/план", example: "계획이 있어요." },
            { word: "시험", value: "емтихан/экзамен", example: "시험이 있어요." },
            { word: "공부", value: "оқу/учеба", example: "공부해요." },
            { word: "시간", value: "уақыт/время", example: "시간이 없어요." },
            { word: "준비", value: "дайындық/подготовка", example: "준비를 해요." }
        ],
        grammar: {
            title: "–고",
            desc: "әрекеттерді байланыстырады.",
            example: "1. 공부하고 준비해요.\n2. 읽고 써요.",
            task: "Составьте предложение с '–고'."
        },
        reading: {
            text: "다음 주에 시험이 있어요. 집과 도서관에서 공부해요. 시험은 중요해요.",
            questions: [
                { q: "언제 시험이 있어요?", a: "다음 주에 있어요" },
                { q: "어디에서 공부해요?", a: "집과 도서관에서 공부해요" },
                { q: "시험은 왜 중요해요?", a: "중요해요" }
            ]
        }
    },
    {
        id: 12,
        title: "Билет 12",
        vocab: [
            { word: "하루", value: "бір күн/день", example: "하루가 바빠요." },
            { word: "아침", value: "таң/утро", example: "아침에 일어나요." },
            { word: "점심", value: "түскі ас/обед", example: "점심에 밥을 먹어요." },
            { word: "저녁", value: "кеш/вечер", example: "저녁에 집에 와요." },
            { word: "시간", value: "уақыт/время", example: "시간이 빨라요." }
        ],
        grammar: {
            title: "–에 (시간)",
            desc: "Уақытты білдіреді.",
            example: "아침에 학교에 가요.",
            task: "Составьте предложение с '–에 (시간)'."
        },
        reading: {
            text: "저는 아침에 학교에 가요. 점심에 밥을 먹어요. 하루가 바빠요.",
            questions: [
                { q: "언제 학교에 가요?", a: "아침에 가요" },
                { q: "점심에 무엇을 해요?", a: "밥을 먹어요" },
                { q: "하루는 어때요?", a: "바빠요" }
            ]
        }
    },
    {
        id: 13,
        title: "Билет 13",
        vocab: [
            { word: "도서관", value: "кітапхана/библиотека", example: "도서관에 가요." },
            { word: "책", value: "кітап/книга", example: "책을 읽어요." },
            { word: "공부", value: "оқу/учеба", example: "공부해요." },
            { word: "학생", value: "студент/студент", example: "학생이 많아요." },
            { word: "자리", value: "орын/место", example: "자리가 조용해요." }
        ],
        grammar: {
            title: "–에서",
            desc: "Іс-әрекет орны.",
            example: "도서관에서 공부해요.",
            task: "Составьте предложение с '–에서'."
        },
        reading: {
            text: "저는 도서관에 가요. 도서관은 조용해요. 책을 읽고 공부해요.",
            questions: [
                { q: "어디에 가요?", a: "도서관에 가요" },
                { q: "도서관은 어때요?", a: "조용해요" },
                { q: "무엇을 해요?", a: "책을 읽고 공부해요" }
            ]
        }
    },
    {
        id: 14,
        title: "Билет 14",
        vocab: [
            { word: "친구", value: "дос/друг", example: "친구를 만나요." },
            { word: "만나다", value: "кездесу/встречаться", example: "친구를 만나요." },
            { word: "카페", value: "кафе/кафе", example: "카페에 가요." },
            { word: "이야기", value: "әңгіме/разговор", example: "이야기를 해요." },
            { word: "주말", value: "демалыс/выходные", example: "주말에 만나요." }
        ],
        grammar: {
            title: "–하고",
            desc: "Бірге істеу.",
            example: "친구하고 만나요.",
            task: "Составьте предложение с '–하고'."
        },
        reading: {
            text: "주말에 친구를 만나요. 카페에 가요. 기분이 좋아요.",
            questions: [
                { q: "언제 친구를 만나요?", a: "주말에 만나요" },
                { q: "어디에 가요?", a: "카페에 가요" },
                { q: "기분은 어때요?", a: "좋아요" }
            ]
        }
    },
    {
        id: 15,
        title: "Билет 15",
        vocab: [
            { word: "집", value: "үй/дом", example: "집에 있어요." },
            { word: "청소", value: "тазалау/уборка", example: "청소해요." },
            { word: "방", value: "бөлме/комната", example: "방을 청소해요." },
            { word: "창문", value: "терезе/окно", example: "창문을 열어요." },
            { word: "시간", value: "уақыт/время", example: "시간이 있어요." }
        ],
        grammar: {
            title: "–을/를",
            desc: "Тура толықтауыш.",
            example: "방을 청소해요.",
            task: "Составьте предложение с '–을/를'."
        },
        reading: {
            text: "저는 방을 청소해요. 집은 깨끗해요. 쉬고 음악을 들어요.",
            questions: [
                { q: "무엇을 청소해요?", a: "방을 청소해요" },
                { q: "집은 어때요?", a: "깨끗해요" },
                { q: "무엇을 해요?", a: "쉬고 음악을 들어요" }
            ]
        }
    },
    {
        id: 16,
        title: "Билет 16",
        vocab: [
            { word: "날씨", value: "ауа райы/погода", example: "날씨가 좋아요." },
            { word: "바람", value: "жел/ветер", example: "바람이 불어요." },
            { word: "해", value: "күн/солнце", example: "해가 있어요." },
            { word: "구름", value: "бұлт/облако", example: "구름이 적어요." },
            { word: "하늘", value: "аспан/небо", example: "하늘이 맑아요." }
        ],
        grammar: {
            title: "–이/가",
            desc: "Бастауыш жалғауы.",
            example: "날씨가 좋아요.",
            task: "Составьте предложение с '–이/가'."
        },
        reading: {
            text: "오늘 날씨는 좋아요. 해가 있어요. 저는 산책해요.",
            questions: [
                { q: "오늘 날씨는 어때요?", a: "좋아요" },
                { q: "무엇이 있어요?", a: "해가 있어요" },
                { q: "무엇을 해요?", a: "산책해요" }
            ]
        }
    },
    {
        id: 17,
        title: "Билет 17",
        vocab: [
            { word: "운동", value: "спорт/спорт", example: "운동해요." },
            { word: "공원", value: "саябақ/парк", example: "공원에 가요." },
            { word: "걷다", value: "жүру/ходить", example: "걸어요." },
            { word: "시간", value: "уақыт/время", example: "시간이 있어요." },
            { word: "건강", value: "денсаулық/здоровье", example: "건강이 좋아요." }
        ],
        grammar: {
            title: "–고",
            desc: "Және, жалғау.",
            example: "걷고 운동해요.",
            task: "Составьте предложение с '–고'."
        },
        reading: {
            text: "저는 공원에 가요. 운동해요. 운동은 건강에 좋아요.",
            questions: [
                { q: "어디에 가요?", a: "공원에 가요" },
                { q: "무엇을 해요?", a: "운동해요" },
                { q: "운동은 왜 필요해요?", a: "건강에 좋아요" }
            ]
        }
    },
    {
        id: 18,
        title: "Билет 18",
        vocab: [
            { word: "식당", value: "мейрамхана/ресторан", example: "식당에 가요." },
            { word: "메뉴", value: "мәзір/меню", example: "메뉴를 봐요." },
            { word: "음식", value: "тағам/еда", example: "음식을 주문해요." },
            { word: "가격", value: "баға/цена", example: "가격이 괜찮아요." },
            { word: "주문", value: "тапсырыс/заказ", example: "주문해요." }
        ],
        grammar: {
            title: "–을/를",
            desc: "Тура толықтауыш.",
            example: "음식을 주문해요.",
            task: "Составьте предложение с '–을/를'."
        },
        reading: {
            text: "저는 음식을 주문해요. 음식은 맛있어요. 친구하고 먹어요.",
            questions: [
                { q: "무엇을 주문해요?", a: "음식을 주문해요" },
                { q: "음식은 어때요?", a: "맛있어요" },
                { q: "누구하고 먹어요?", a: "친구하고 먹어요" }
            ]
        }
    },
    {
        id: 19,
        title: "Билет 19",
        vocab: [
            { word: "시험", value: "емтихан/экзамен", example: "시험을 봐요." },
            { word: "결과", value: "нәтиже/результат", example: "결과가 나와요." },
            { word: "점수", value: "баға/оценка", example: "점수가 괜찮아요." },
            { word: "기분", value: "көңіл-күй/настроение", example: "기분이 좋아요." },
            { word: "노력", value: "еңбек/усилие", example: "노력해요." }
        ],
        grammar: {
            title: "–아요 / –어요",
            desc: "Сыпайы стиль.",
            example: "공부해요.",
            task: "Составьте предложение."
        },
        reading: {
            text: "저는 시험을 봤어요. 점수는 괜찮아요. 기분이 좋아요.",
            questions: [
                { q: "무엇을 봤어요?", a: "시험을 봤어요" },
                { q: "점수는 어때요?", a: "괜찮아요" },
                { q: "기분은 어때요?", a: "좋아요" }
            ]
        }
    },
    {
        id: 20,
        title: "Билет 20",
        vocab: [
            { word: "여행", value: "саяхат/путешествие", example: "여행에 가요." },
            { word: "사진", value: "сурет/фото", example: "사진을 찍어요." },
            { word: "장소", value: "орын/место", example: "좋은 장소예요." },
            { word: "기억", value: "естелік/воспоминание", example: "기억이 남아요." },
            { word: "시간", value: "уақыт/время", example: "시간이 빨라요." }
        ],
        grammar: {
            title: "–에 (장소)",
            desc: "Бару орны.",
            example: "여행에 가요.",
            task: "Составьте предложение с '–에 (장소)'."
        },
        reading: {
            text: "좋은 장소에 갔어요. 사진을 찍어요. 여행은 좋아요.",
            questions: [
                { q: "어디에 갔어요?", a: "좋은 장소에 갔어요" },
                { q: "무엇을 찍어요?", a: "사진을 찍어요" },
                { q: "여행은 어때요?", a: "좋아요" }
            ]
        }
    },
    {
        id: 21,
        title: "Билет 21",
        vocab: [
            { word: "컴퓨터", value: "компьютер/компьютер", example: "컴퓨터를 사용해요." },
            { word: "인터넷", value: "인터넷/интернет", example: "인터넷을 사용해요." },
            { word: "정보", value: "ақпарат/информация", example: "정보를 찾아요." },
            { word: "검색", value: "іздеу/поиск", example: "정보를 검색해요." },
            { word: "시간", value: "уақыт/время", example: "시간이 조금 걸려요." }
        ],
        grammar: {
            title: "–하고",
            desc: "–하고 екі затты немесе әрекетті байланыстырады.",
            example: "1. 컴퓨터하고 인터넷을 사용해요.\n2. 책하고 노트를 가져와요.",
            task: "Составьте предложение с '–하고'."
        },
        reading: {
            text: "컴퓨터하고 인터넷을 사용해요. 인터넷에서 정보를 찾아요. 기분이 편해요.",
            questions: [
                { q: "무엇을 사용해요?", a: "컴퓨터하고 인터넷을 사용해요" },
                { q: "어디에서 정보를 찾아요?", a: "인터넷에서 찾아요" },
                { q: "기분은 어때요?", a: "기분이 편해요" }
            ]
        }
    },
    {
        id: 22,
        title: "Билет 22",
        vocab: [
            { word: "전화", value: "телефон/телефон", example: "전화해요." },
            { word: "메시지", value: "хабарлама/сообщение", example: "메시지를 보내요." },
            { word: "친구", value: "дос/друг", example: "친구에게 연락해요." },
            { word: "연락", value: "байланыс/связь", example: "자주 연락해요." },
            { word: "시간", value: "уақыт/время", example: "시간이 없어요." }
        ],
        grammar: {
            title: "–하고",
            desc: "Бірге.",
            example: "친구하고 이야기해요.",
            task: "Составьте предложение с '–하고'."
        },
        reading: {
            text: "친구에게 연락해요. 메시지를 보내요. 연락이 중요해요.",
            questions: [
                { q: "누구에게 연락해요?", a: "친구에게 연락해요" },
                { q: "무엇을 보내요?", a: "메시지를 보내요" },
                { q: "왜 중요해요?", a: "연락이 중요해요" }
            ]
        }
    },
    {
        id: 23,
        title: "Билет 23",
        vocab: [
            { word: "버스", value: "автобус/автобус", example: "버스를 타요." },
            { word: "지하철", value: "метро/метро", example: "지하철을 타요." },
            { word: "역", value: "станция/станция", example: "역에 가요." },
            { word: "길", value: "жол/дорога", example: "길이 길어요." },
            { word: "시간", value: "уақыт/время", example: "시간이 걸려요." }
        ],
        grammar: {
            title: "–에 (장소)",
            desc: "Бару орны.",
            example: "학교에 가요.",
            task: "Составьте предложение с '–에 (장소)'."
        },
        reading: {
            text: "지하철을 타요. 학교에 가요. 학교는 멀어요.",
            questions: [
                { q: "무엇을 타요?", a: "지하철을 타요" },
                { q: "어디에 가요?", a: "학교에 가요" },
                { q: "학교은 어때요?", a: "멀어요" }
            ]
        }
    },
    {
        id: 24,
        title: "Билет 24",
        vocab: [
            { word: "휴식", value: "демалыс/отдых", example: "휴식을 해요." },
            { word: "집", value: "үй/дом", example: "집에 있어요." },
            { word: "음악", value: "музыка/музыка", example: "음악을 들어요." },
            { word: "텔레비전", value: "теледидар/телевизор", example: "텔레비전을 봐요." },
            { word: "시간", value: "уақыт/время", example: "시간이 충분해요." }
        ],
        grammar: {
            title: "–에 (시간)",
            desc: "Уақыт.",
            example: "주말에 집에 있어요.",
            task: "Составьте предложение с '–에 (시간)'."
        },
        reading: {
            text: "주말에 집에 있어요. 음악을 듣고 텔레비전을 봐요. 몸이 편해요.",
            questions: [
                { q: "언제 집에 있어요?", a: "주말에 집에 있어요" },
                { q: "무엇을 해요?", a: "음악을 듣고 텔레비전을 봐요" },
                { q: "왜 좋아요?", a: "몸이 편해요" }
            ]
        }
    },
    {
        id: 25,
        title: "Билет 25",
        vocab: [
            { word: "약속", value: "уәде/обещание", example: "약속이 있어요." },
            { word: "시간", value: "уақыт/время", example: "시간이 있어요." },
            { word: "장소", value: "орын/место", example: "장소는 카페예요." },
            { word: "준비", value: "дайындық/подготовка", example: "준비해요." },
            { word: "친구", value: "дос/друг", example: "친구를 만나요." }
        ],
        grammar: {
            title: "–에 (시간)",
            desc: "Уақыт.",
            example: "오후에 만나요.",
            task: "Составьте предложение с '–에 (시간)'."
        },
        reading: {
            text: "오후에 만나요. 장소는 카페예요. 이야기를 해요.",
            questions: [
                { q: "언제 만나요?", a: "오후에 만나요" },
                { q: "장소는 어디예요?", a: "카페예요" },
                { q: "무엇을 해요?", a: "이야기를 해요" }
            ]
        }
    },
    {
        id: 26,
        title: "Билет 26",
        vocab: [
            { word: "쇼핑", value: "сауда/шопинг", example: "쇼핑을 해요." },
            { word: "옷", value: "киім/одежда", example: "옷을 봐요." },
            { word: "가격", value: "баға/цена", example: "가격을 비교해요." },
            { word: "가게", value: "дүкен/магазин", example: "가게에 가요." },
            { word: "시간", value: "уақыт/время", example: "시간이 걸려요." }
        ],
        grammar: {
            title: "–을/를",
            desc: "Тура толықтауыш.",
            example: "옷을 사요.",
            task: "Составьте предложение с '–을/를'."
        },
        reading: {
            text: "옷을 봐요. 가게에 사람이 많아요. 기분은 좋아요.",
            questions: [
                { q: "무엇을 봐요?", a: "옷을 봐요" },
                { q: "어디에 사람이 많아요?", a: "가게에 사람이 많아요" },
                { q: "기분은 어때요?", a: "좋아요" }
            ]
        }
    },
    {
        id: 27,
        title: "Билет 27",
        vocab: [
            { word: "음악", value: "музыка/музыка", example: "음악을 들어요." },
            { word: "노래", value: "ән/песня", example: "노래를 들어요." },
            { word: "가수", value: "әнші/певец", example: "가수가 좋아요." },
            { word: "시간", value: "уақыт/время", example: "시간이 있을 때 들어요." },
            { word: "기분", value: "көңіл-күй/настроение", example: "기분이 좋아져요." }
        ],
        grammar: {
            title: "–을/를",
            desc: "Тура толықтауыш.",
            example: "음악을 들어요.",
            task: "Составьте предложение с '–을/를'."
        },
        reading: {
            text: "음악을 들어요. 시간이 있을 때 들어요. 기분이 좋아져요.",
            questions: [
                { q: "무엇을 들어요?", a: "음악을 들어요" },
                { q: "언제 들어요?", a: "시간이 있을 때 들어요" },
                { q: "기분은 어때요?", a: "좋아져요" }
            ]
        }
    },
    {
        id: 28,
        title: "Билет 28",
        vocab: [
            { word: "병원", value: "аурухана/больница", example: "병원에 가요." },
            { word: "의사", value: "дәрігер/врач", example: "의사가 있어요." },
            { word: "사람", value: "адам/человек", example: "사람이 많아요." },
            { word: "약", value: "дәрі/лекарство", example: "약을 받아요." },
            { word: "시간", value: "уақыт/время", example: "시간이 걸려요." }
        ],
        grammar: {
            title: "–에 (장소)",
            desc: "Бару орны.",
            example: "병원에 가요.",
            task: "Составьте предложение с '–에 (장소)'."
        },
        reading: {
            text: "저는 병원에 가요. 약을 받아요. 지금은 괜찮아요.",
            questions: [
                { q: "어디에 가요?", a: "병원에 가요" },
                { q: "무엇을 받아요?", a: "약을 받아요" },
                { q: "지금은 어때요?", a: "괜찮아요" }
            ]
        }
    },
    {
        id: 29,
        title: "Билет 29",
        vocab: [
            { word: "공항", value: "әуежай/аэропорт", example: "공항에 가요." },
            { word: "비행기", value: "ұшақ/самолет", example: "비행기를 타요." },
            { word: "사람", value: "адам/человек", example: "사람이 많아요." },
            { word: "시간", value: "уақыт/время", example: "시간이 남아요." },
            { word: "출발", value: "шығу/отправление", example: "출발을 기다려요." }
        ],
        grammar: {
            title: "–에 (장소)",
            desc: "Бару орны.",
            example: "공항에 가요.",
            task: "Составьте предложение с '–에 (장소)'."
        },
        reading: {
            text: "저는 공항에 가요. 비행기를 타요. 출발을 기다려요.",
            questions: [
                { q: "어디에 가요?", a: "공항에 가요" },
                { q: "무엇을 타요?", a: "비행기를 타요" },
                { q: "무엇을 기다려요?", a: "출발을 기다려요" }
            ]
        }
    },
    {
        id: 30,
        title: "Билет 30",
        vocab: [
            { word: "주말", value: "демалыс/выходные", example: "주말이에요." },
            { word: "가족", value: "отбасы/семья", example: "가족하고 있어요." },
            { word: "집", value: "үй/дом", example: "집에 있어요." },
            { word: "식사", value: "тамақ/еда", example: "식사를 해요." },
            { word: "시간", value: "уақыт/время", example: "시간이 많아요." }
        ],
        grammar: {
            title: "–하고",
            desc: "Бірге.",
            example: "가족하고 식사해요.",
            task: "Составьте предложение с '–하고'."
        },
        reading: {
            text: "가족하고 있어요. 같이 식사하고 이야기를 해요. 행복해요.",
            questions: [
                { q: "누구하고 있어요?", a: "가족하고 있어요" },
                { q: "무엇을 해요?", a: "같이 식사하고 이야기를 해요" },
                { q: "기분은 어때요?", a: "행복해요" }
            ]
        }
    }
];

const app = document.getElementById('app');
let currentTicketId = null;

// State/Stats
let stats = {
    ticketsDone: [], // IDs of completed tickets
    wordsLearned: 0,
    streak: 1 // Artificial streak for motivation
};

// Load Stats
function loadStats() {
    const saved = localStorage.getItem('koreaStats');
    if (saved) {
        stats = JSON.parse(saved);
        updateStatsUI();
    }

    // Theme
    if (localStorage.getItem('koreaTheme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerText = '☀️';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('koreaTheme', isDark ? 'dark' : 'light');
    document.getElementById('theme-toggle').innerText = isDark ? '☀️' : '🌙';
}

function saveStats() {
    localStorage.setItem('koreaStats', JSON.stringify(stats));
    updateStatsUI();
}

function updateStatsUI() {
    document.getElementById('stat-tickets').innerText = stats.ticketsDone.length;
    document.getElementById('stat-words').innerText = stats.wordsLearned;
    document.getElementById('stat-streak').innerText = stats.streak;
}

// Navigation
function goHome() {
    currentTicketId = null;
    renderHome();
}

// Renders
function renderHome() {
    app.innerHTML = `
        <header>
            <div class="logo">Korean Exam</div>
            <div class="subtitle">Подготовка к экзамену</div>
            <input type="text" placeholder="Поиск билета..." onkeyup="filterTickets(this.value)" 
                style="max-width: 300px; margin-top: 20px; text-align: center;">
        </header>
        <div class="ticket-grid" id="ticket-grid">
            ${TICKETS.map(ticket => `
                <div class="ticket-card" onclick="openTicket(${ticket.id})">
                    <div class="ticket-number">${ticket.id}</div>
                    <div class="ticket-label">Билет</div>
                    ${stats.ticketsDone.includes(ticket.id) ? '✅' : ''}
                </div>
            `).join('')}
        </div>
    `;
}

function filterTickets(query) {
    const grid = document.getElementById('ticket-grid');
    grid.innerHTML = TICKETS
        .filter(t => t.id.toString().includes(query) || t.title.toLowerCase().includes(query.toLowerCase()))
        .map(ticket => `
            <div class="ticket-card" onclick="openTicket(${ticket.id})">
                <div class="ticket-number">${ticket.id}</div>
                <div class="ticket-label">Билет</div>
                    ${stats.ticketsDone.includes(ticket.id) ? '✅' : ''}
            </div>
        `).join('');
}

function openTicket(id) {
    currentTicketId = id;
    const ticket = TICKETS.find(t => t.id === id);
    if (!ticket) return;

    app.innerHTML = `
        <div class="ticket-view active">
            <div class="nav-back" onclick="goHome()">← Назад к списку</div>
            <h1 style="text-align:center; margin-bottom:20px;">${ticket.title}</h1>
            
            <div class="tabs">
                <div class="tab active" onclick="switchTab('vocab')">Словарь</div>
                <div class="tab" onclick="switchTab('grammar')">Грамматика</div>
                <div class="tab" onclick="switchTab('reading')">Чтение</div>
            </div>

            <!-- VOCAB SECTION -->
            <div id="tab-vocab" class="exercise-card active">
                <h2>Словарь</h2>
                <div style="margin-bottom: 20px; color: #888;">Введите перевод</div>
                <div id="vocab-container">
                    ${ticket.vocab.map((v, idx) => `
                        <div class="vocab-item" id="vocab-${idx}" style="padding: 20px; border-bottom: 1px solid #111;">
                            <div class="word-display">${v.word}</div>
                            <div class="input-group">
                                <input type="text" id="vocab-input-${idx}" placeholder="Перевод...">
                            </div>
                            <button class="btn-check" onclick="checkVocab(${idx}, '${v.value}')">Проверить</button>
                            <div class="feedback" id="vocab-feedback-${idx}"></div>
                            <div class="example hidden" id="vocab-example-${idx}" style="margin-top:10px; font-style:italic; color:#666;">
                                Пример: ${v.example}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- GRAMMAR SECTION -->
            <div id="tab-grammar" class="exercise-card">
                <h2>Грамматика</h2>
                <div class="grammar-display">
                    <div class="grammar-rule">${ticket.grammar.title}</div>
                    <div class="grammar-desc">${ticket.grammar.desc}</div>
                </div>
                <div style="text-align:left; margin-bottom:10px; font-weight:600;">Задание:</div>
                <p style="margin-bottom:15px;">${ticket.grammar.task}</p>
                <textarea id="grammar-input" rows="3" placeholder="Напишите ваше предложение здесь..."></textarea>
                <button class="btn-check" style="margin-top:15px;" onclick="checkGrammar()">Проверить</button>
                <div class="feedback" id="grammar-feedback">
                    <strong>Правильный пример:</strong><br>
                    ${ticket.grammar.example}
                </div>
            </div>

            <!-- READING SECTION -->
            <div id="tab-reading" class="exercise-card">
                <h2>Чтение</h2>
                <div class="reading-text">${ticket.reading.text}</div>
                <div id="reading-questions">
                    ${ticket.reading.questions.map((q, idx) => `
                        <div class="question-block">
                            <span class="question-text">${idx + 1}. ${q.q}</span>
                            <input type="text" id="reading-input-${idx}" placeholder="Ответ на корейском...">
                            <div class="feedback" id="reading-feedback-${idx}"></div>
                        </div>
                    `).join('')}
                </div>
                <button class="btn-check" onclick="checkReading()">Проверить все</button>
            </div>
        </div>
    `;
}

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exercise-card').forEach(c => c.classList.remove('active')); // Actually hide

    // Simple implementation: manual mapping
    const tabIndex = ['vocab', 'grammar', 'reading'].indexOf(tabName);
    document.querySelectorAll('.tab')[tabIndex].classList.add('active');

    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Logic / Checks
// Logic / Checks
function checkVocab(idx, correctVal) {
    const input = document.getElementById(`vocab-input-${idx}`);
    const feedback = document.getElementById(`vocab-feedback-${idx}`);
    const example = document.getElementById(`vocab-example-${idx}`);

    const userVal = input.value.trim().toLowerCase();
    const correctOptions = correctVal.split('/').map(s => s.trim().toLowerCase());

    // Check if user's input matches any of the correct options or is contained within them if they are phrases
    const isCorrect = correctOptions.some(opt => opt === userVal || (opt.length > 3 && opt.includes(userVal)) || (userVal.length > 3 && opt.includes(userVal)));

    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.innerText = 'Верно! Отличная работа.';
        example.classList.remove('hidden');

        // Update stats
        stats.wordsLearned++;
        saveStats();
    } else {
        feedback.className = 'feedback wrong';
        feedback.innerText = `Неверно. Правильно: ${correctVal}`;
    }
}

function checkGrammar() {
    const feedback = document.getElementById('grammar-feedback');
    feedback.className = 'feedback correct'; // Always show as positive reinforcement or just info
    feedback.style.display = 'block';
    // Just showing the example as requested
}

function checkReading() {
    const ticket = TICKETS.find(t => t.id === currentTicketId);
    let allCorrect = true;

    ticket.reading.questions.forEach((q, idx) => {
        const input = document.getElementById(`reading-input-${idx}`);
        const feedback = document.getElementById(`reading-feedback-${idx}`);
        const userVal = input.value.trim();

        // Check if answer matches (basic inclusion check for key phrase)
        if (userVal.includes(q.a) || userVal === q.a) {
            feedback.className = 'feedback correct';
            feedback.innerText = 'Верно';
        } else {
            feedback.className = 'feedback wrong';
            feedback.innerText = `Подсказка: ${q.a}`;
            allCorrect = false;
        }
    });

    if (allCorrect) {
        if (!stats.ticketsDone.includes(currentTicketId)) {
            stats.ticketsDone.push(currentTicketId);
            saveStats();
        }
    }
}

// Boot
window.onload = function () {
    loadStats();
    renderHome();
};
