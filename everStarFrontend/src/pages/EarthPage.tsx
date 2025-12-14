import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EarthMain } from 'components/templates/EarthMain';
import { LetterBoxTemplate } from 'components/templates/LetterBoxTemplate';
import {
  LetterColor,
  LetterState,
} from 'components/molecules/cards/LetterCard/LetterCard';
import { LetterDetailTemplate } from 'components/templates/LetterDetailTemplate';
import { LetterWriteTemplate } from 'components/templates/LetterWriteTemplate';
import { QuestRouter } from 'components/templates/QuestRouter';
import { QuestOpenviduTemplate } from 'components/templates/QuestOpenviduTemplate';

import { RootState } from 'store/Store';
import { useSelector } from 'react-redux';
import { QuestPuzzle } from 'components/templates/QuestPuzzle';
import { PrivateRoute, PetDetailsRoute } from 'ProtectedRoutes';

interface PetProfile {
  name: string;
  age: number;
  description: string;
  date: string;
  tagList: string[];
  avatarUrl: string;
  questIndex: number;
}

/**
 * 지구별 페이지
 * EarthLayout에서 배경 이미지와 Footer 처리
 * Suspense가 로딩 처리
 */
export const EarthPage: React.FC = () => {
  const petDetails = useSelector((state: RootState) => state.pet.petDetails);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (!petDetails) {
    return <div>No Pet Details</div>;
  }

  const petProfile: PetProfile = {
    name: petDetails.name,
    age: petDetails.age,
    description: petDetails.introduction || '',
    date: petDetails.memorialDate,
    tagList: petDetails.personalities,
    avatarUrl: petDetails.profileImageUrl,
    questIndex: petDetails.questIndex || 0,
  };

  const generateLargeLetterData = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      type: 'default' as const,
      color: (index % 2 === 0 ? 'white' : 'bgorange') as LetterColor,
      state: (index % 2 === 0 ? 'notReceived' : 'received') as LetterState,
      name: `Sender ${index + 1}`,
      sendMessage: `Message content ${index + 1}`,
      dateTime: `2024-08-${(index % 31) + 1}`,
    }));
  };

  const totalPages = Math.ceil(generateLargeLetterData(50).length / 9);

  return (
    <div className="flex-grow w-full">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PetDetailsRoute>
                <EarthMain
                  title={petDetails.name}
                  fill={petProfile.questIndex}
                  profileImageUrl={petProfile.avatarUrl}
                  buttonSize="large"
                  buttonDisabled={false}
                  buttonText="영원별로 이동"
                  buttonIcon="SmallStarImg"
                  onButtonClick={() => console.log('영원별 이동')}
                />
              </PetDetailsRoute>
            </PrivateRoute>
          }
        />

        <Route
          path="letterbox"
          element={
            <PrivateRoute>
              <PetDetailsRoute>
                <LetterBoxTemplate
                  letterData={generateLargeLetterData(50)}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  headerText="편지함"
                />
              </PetDetailsRoute>
            </PrivateRoute>
          }
        />

        <Route
          path="letter"
          element={
            <PrivateRoute>
              <PetDetailsRoute>
                <LetterWriteTemplate />
              </PetDetailsRoute>
            </PrivateRoute>
          }
        />

        <Route
          path="letter/:id"
          element={
            <PrivateRoute>
              <PetDetailsRoute>
                <LetterDetailTemplate />
              </PetDetailsRoute>
            </PrivateRoute>
          }
        />

        <Route
          path="quest/:questid"
          element={
            <PrivateRoute>
              <PetDetailsRoute>
                <QuestRouter />
              </PetDetailsRoute>
            </PrivateRoute>
          }
        />

        {/* 보호되지 않은 경로들 */}
        <Route path="openvidu/:questid" element={<QuestOpenviduTemplate />} />
        <Route path="puzzle" element={<QuestPuzzle />} />
      </Routes>
    </div>
  );
};
