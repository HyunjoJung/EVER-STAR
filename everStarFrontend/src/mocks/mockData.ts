// Mock data for EVER-STAR API responses

export const mockUser = {
  email: 'demo@everstar.com',
  userName: '김철수',
  phoneNumber: '010-1234-5678',
  birthDate: '1990-01-01',
  gender: 'MALE',
  questReceptionTime: '09:00',
};

export const mockPets = [
  {
    id: 1,
    profileImageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400',
    name: '초코',
  },
  {
    id: 2,
    profileImageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
    name: '루루',
  },
  {
    id: 3,
    profileImageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400',
    name: '뭉치',
  },
];

export const mockPetDetails = {
  1: {
    id: 1,
    userId: 1,
    name: '초코',
    age: 5,
    memorialDate: '2024-01-15',
    species: '강아지',
    gender: 'MALE',
    relationship: '가족',
    profileImageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400',
    introduction: '우리 집 사랑스러운 초코입니다. 함께한 시간이 너무 그립습니다.',
    questIndex: 25,
    lastAccessTime: '2024-12-13T10:00:00',
    petPersonalities: ['활발함', '장난기많음', '친근함'],
  },
  2: {
    id: 2,
    userId: 1,
    name: '루루',
    age: 3,
    memorialDate: '2024-06-20',
    species: '고양이',
    gender: 'FEMALE',
    relationship: '가족',
    profileImageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
    introduction: '조용하지만 사랑스러운 우리 루루',
    questIndex: 15,
    lastAccessTime: '2024-12-12T14:30:00',
    petPersonalities: ['조용함', '독립적', '온순함'],
  },
  3: {
    id: 3,
    userId: 1,
    name: '뭉치',
    age: 7,
    memorialDate: '2023-12-01',
    species: '강아지',
    gender: 'MALE',
    relationship: '친구',
    profileImageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400',
    introduction: '언제나 충실했던 나의 친구',
    questIndex: 50,
    lastAccessTime: '2024-12-10T09:00:00',
    petPersonalities: ['충직함', '온순함', '애교많음'],
  },
};

export const mockMemorialBooks = {
  1: {
    id: 1,
    psychologicalTestResult: '수용 단계',
    isOpen: true,
    isActive: false,
    data: {
      pet: {
        name: '초코',
      },
      sentimentAnalysis: {
        week1Result: 30,
        week2Result: 35,
        week3Result: 42,
        week4Result: 50,
        week5Result: 58,
        week6Result: 65,
        week7Result: 72,
        totalResult: '긍정적 회복 중',
      },
      quests: [
        {
          id: 1,
          content: '가장 기억에 남는 순간을 떠올려보세요',
          type: 'TEXT',
        },
        {
          id: 2,
          content: '함께 찍은 사진 중 가장 좋아하는 사진을 공유해주세요',
          type: 'IMAGE',
        },
      ],
      questAnswers: [
        {
          questId: 1,
          content: '처음 만난 날이 가장 기억에 남아요. 작고 귀여운 모습이었죠.',
          imageUrl: '',
          type: 'TEXT',
        },
        {
          questId: 2,
          content: '공원에서 함께 뛰어놀던 사진입니다.',
          imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
          type: 'IMAGE',
        },
      ],
      aiAnswers: [
        {
          questId: 1,
          content: '그 순간이 정말 특별했겠어요. 첫 만남의 설렘은 영원히 기억될 거예요.',
          imageUrl: '',
          type: 'TEXT',
        },
        {
          questId: 2,
          content: '함께한 행복한 순간들이 아름다운 추억으로 남았네요.',
          imageUrl: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600',
          type: 'IMAGE',
        },
      ],
      diaries: [
        {
          title: '오늘의 기억',
          content: '초코와 함께 했던 날들을 회상하며...',
          imageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600',
        },
      ],
    },
  },
  3: {
    id: 3,
    psychologicalTestResult: '수용 단계',
    isOpen: true,
    isActive: true,
    data: {
      pet: {
        name: '뭉치',
      },
      sentimentAnalysis: {
        week1Result: 25,
        week2Result: 32,
        week3Result: 45,
        week4Result: 55,
        week5Result: 62,
        week6Result: 70,
        week7Result: 78,
        totalResult: '긍정적 회복 완료',
      },
      quests: [],
      questAnswers: [],
      aiAnswers: [],
      diaries: [],
    },
  },
};

export const mockLetters = {
  1: [
    {
      id: 1,
      petId: 1,
      userId: 1,
      content: '초코야, 너무 보고싶어. 잘 지내고 있니?',
      imageUrl: '',
      isFromUser: true,
      createdTime: '2024-12-01T10:00:00',
      isRead: true,
    },
    {
      id: 2,
      petId: 1,
      userId: 1,
      content: '나도 보고싶어! 여기는 너무 좋아. 걱정하지 마!',
      imageUrl: '',
      isFromUser: false,
      createdTime: '2024-12-08T15:30:00',
      isRead: true,
    },
  ],
  2: [
    {
      id: 3,
      petId: 2,
      userId: 1,
      content: '루루야, 오늘도 네 생각이 났어.',
      imageUrl: 'https://images.unsplash.com/photo-1516750905505-7f82a54954e7?w=600',
      isFromUser: true,
      createdTime: '2024-12-05T14:00:00',
      isRead: true,
    },
  ],
};

export const mockCheeringMessages = {
  1: {
    content: [
      {
        id: 1,
        petId: 2,
        name: '루루',
        content: '초코야 힘내!',
        color: '#FFB6C1',
        isAnonymous: false,
        cheeringMessageId: 1,
        relationShip: '친구',
      },
      {
        id: 2,
        petId: 3,
        name: '뭉치',
        content: '항상 응원할게!',
        color: '#87CEEB',
        isAnonymous: false,
        cheeringMessageId: 2,
        relationShip: '친구',
      },
    ],
    totalElements: 2,
    totalPages: 1,
  },
};

export const mockRandomPets = {
  content: [
    {
      id: 4,
      name: '별이',
      profileImageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
      introduction: '반짝이는 별처럼 빛나던 아이',
    },
    {
      id: 5,
      name: '구름이',
      profileImageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
      introduction: '하늘을 나는 듯 자유로웠던 친구',
    },
  ],
};
