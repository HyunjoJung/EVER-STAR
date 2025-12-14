// MSW handlers for EVER-STAR API mocking
import { http, HttpResponse } from 'msw';
import {
  mockUser,
  mockPets,
  mockPetDetails,
  mockMemorialBooks,
  mockLetters,
  mockCheeringMessages,
  mockRandomPets,
} from './mockData';

// Support both local and production API URLs
const API_BASE_URLS = [
  'http://localhost:8080',
  'https://everstar-backend.azurewebsites.net',
];

// Create handlers for all API endpoints
const createHandlers = () => {
  const allHandlers: any[] = [];

  API_BASE_URLS.forEach((API_BASE_URL) => {
    allHandlers.push(
      // OAuth2 Kakao Login Redirect (for mock)
      http.get(`${API_BASE_URL}/oauth2/authorization/kakao`, () => {
        // Mock callback - 실제로는 리다이렉트 대신 바로 토큰 반환
        return HttpResponse.json({
          accessToken: 'mock-jwt-token-12345',
          userInfo: mockUser,
        });
      }),

      // Auth APIs
      http.post(`${API_BASE_URL}/api/auth/users/send-code`, () => {
        return HttpResponse.json({
          success: true,
          message: '인증번호가 발송되었습니다.',
        });
      }),

      http.post(`${API_BASE_URL}/api/auth/users/check-code`, () => {
        return HttpResponse.json({
          success: true,
          message: '인증이 완료되었습니다.',
        });
      }),

      http.put(`${API_BASE_URL}/api/auth/oauth/join`, () => {
        return new HttpResponse(JSON.stringify(mockUser), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer mock-jwt-token-12345',
          },
        });
      }),

      http.get(`${API_BASE_URL}/api/accounts/users`, () => {
        return HttpResponse.json({
          data: mockUser,
        });
      }),

      // Pet APIs
      http.get(`${API_BASE_URL}/api/pets`, () => {
        return HttpResponse.json({
          data: mockPets,
        });
      }),

      http.get(`${API_BASE_URL}/api/pets/:petId`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockPetDetails;
        const petDetail = mockPetDetails[petId];

        if (!petDetail) {
          return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json({
          data: petDetail,
        });
      }),

      http.post(`${API_BASE_URL}/api/pets`, async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        const newPet = {
          id: mockPets.length + 1,
          profileImageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400',
          name: name || '새로운 반려동물',
        };

        return HttpResponse.json(newPet);
      }),

      http.post(`${API_BASE_URL}/api/pets/:petId/profile-image`, () => {
        return new HttpResponse(null, { status: 200 });
      }),

      http.put(`${API_BASE_URL}/api/pets/:petId/profile-image`, () => {
        return new HttpResponse(null, { status: 200 });
      }),

      http.put(`${API_BASE_URL}/api/pets/:petId`, () => {
        return HttpResponse.json({
          success: true,
          message: '소개가 업데이트되었습니다.',
        });
      }),

      // Memorial Book APIs
      http.get(`${API_BASE_URL}/api/pets/:petId/memorialbooks`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockMemorialBooks;
        const memorialBook = mockMemorialBooks[petId];

        if (!memorialBook) {
          return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json({
          data: memorialBook,
        });
      }),

      http.get(`${API_BASE_URL}/api/pets/:petId/memorialbooks/:memorialBookId`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockMemorialBooks;
        const memorialBook = mockMemorialBooks[petId];

        if (!memorialBook) {
          return new HttpResponse(null, { status: 404 });
        }

        const petDetail = mockPetDetails[petId as unknown as keyof typeof mockPetDetails];

        return HttpResponse.json({
          data: {
            memorialBook,
            pet: petDetail,
            sentimentAnalysis: memorialBook.data.sentimentAnalysis,
            quests: memorialBook.data.quests,
            questAnswers: memorialBook.data.questAnswers,
            aiAnswers: memorialBook.data.aiAnswers,
            diaries: memorialBook.data.diaries,
          },
        });
      }),

      http.patch(`${API_BASE_URL}/api/pets/:petId/memorialbooks/:memorialBookId/is-open`, () => {
        return new HttpResponse(null, { status: 200 });
      }),

      http.post(`${API_BASE_URL}/api/pets/:petId/memorialbooks/:memorialBookId/diaries`, () => {
        return new HttpResponse(null, { status: 201 });
      }),

      http.patch(
        `${API_BASE_URL}/api/pets/:petId/memorialbooks/:memorialBookId/psychological-test`,
        () => {
          return HttpResponse.json({
            psychologicalTestResult: '수용 단계',
          });
        }
      ),

      // Letter APIs
      http.get(`${API_BASE_URL}/api/pets/:petId/letters`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockLetters;
        const letters = mockLetters[petId] || [];

        return HttpResponse.json({
          data: letters,
        });
      }),

      http.get(`${API_BASE_URL}/api/pets/:petId/letters/:letterId`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockLetters;
        const letterId = Number(params.letterId);
        const letters = mockLetters[petId] || [];
        const letter = letters.find((l) => l.id === letterId);

        if (!letter) {
          return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json({
          data: letter,
        });
      }),

      http.post(`${API_BASE_URL}/api/pets/:petId/letters`, () => {
        return HttpResponse.json({
          data: {
            id: Math.floor(Math.random() * 1000),
            success: true,
            message: '편지가 전송되었습니다.',
          },
        });
      }),

      http.post(`${API_BASE_URL}/api/pets/:petId/letters/:letterId`, () => {
        return HttpResponse.json({
          data: {
            success: true,
            message: '답장이 전송되었습니다.',
          },
        });
      }),

      // EverStar APIs (Pet Search & Cheering)
      http.get(`${API_BASE_URL}/api/everstar/pets/search`, () => {
        return HttpResponse.json({
          content: mockPets,
          totalElements: mockPets.length,
          totalPages: 1,
        });
      }),

      http.get(`${API_BASE_URL}/api/everstar/pets/:petId`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockPetDetails;
        const petDetail = mockPetDetails[petId];

        if (!petDetail) {
          return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json({
          data: petDetail,
        });
      }),

      http.get(`${API_BASE_URL}/api/everstar/pets/random`, () => {
        return HttpResponse.json({
          data: mockRandomPets,
        });
      }),

      http.get(`${API_BASE_URL}/api/pets/:petId/cheeringMessages`, ({ params }) => {
        const petId = Number(params.petId) as unknown as keyof typeof mockCheeringMessages;
        const messages = mockCheeringMessages[petId];

        if (!messages) {
          return HttpResponse.json({
            content: [],
            totalElements: 0,
            totalPages: 0,
          });
        }

        return HttpResponse.json(messages);
      }),

      http.post(`${API_BASE_URL}/api/pets/:petId/find/:targetPetId/cheeringMessages`, () => {
        return HttpResponse.json({
          data: {
            id: Math.floor(Math.random() * 1000),
            success: true,
            message: '응원 메시지가 전송되었습니다.',
          },
        });
      }),

      http.delete(`${API_BASE_URL}/api/pets/:petId/cheeringMessages/:messageId`, () => {
        return new HttpResponse(null, { status: 204 });
      }),

      // Notification API
      http.post(`${API_BASE_URL}/api/notifications`, () => {
        return HttpResponse.json({
          success: true,
          message: '알림이 등록되었습니다.',
        });
      })
    );
  });

  return allHandlers;
};

export const handlers = createHandlers();
