import React, { useMemo, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { EverStarMain } from 'components/templates/EverStarMain';
import { EverStarCheerMessage } from 'components/templates/EverStarCheerMessage';
import { EverStarSearchStar } from 'components/templates/EverStarSearchStar';
import { useSelector } from 'react-redux';
import { RootState } from 'store/Store';

import {
  useFetchOtherPetDetails,
  useFetchCheeringPet,
} from 'hooks/useEverStar';
import { useFetchMemorialBooksWithQuest } from 'hooks/useMemorialBooks';
import { MemorialBook } from 'components/templates/MemorialBook';

interface PetProfile {
  name: string;
  age: number;
  description: string;
  date: string;
  tagList: string[];
  avatarUrl: string;
  questIndex: number;
}

export const EverstarPage: React.FC = () => {
  console.log('[DEBUG] EverstarPage mounted');
  const params = useParams<{ pet?: string }>();
  const navigate = useNavigate();
  const currentPetId = useSelector(
    (state: RootState) => state.pet.petDetails?.id
  );

  const petId = useMemo(
    () =>
      params.pet
        ? parseInt(params.pet, 10)
        : currentPetId ||
          parseInt(sessionStorage.getItem('defaultPetId') || '0', 10),
    [params.pet, currentPetId]
  );

  // Suspense가 로딩 처리하므로 data는 항상 존재
  const { data: petDetails } = useFetchOtherPetDetails(petId);
  console.log('[DEBUG] EverstarPage petDetails:', petDetails);
  const questIndex = petDetails?.questIndex || 0;
  const { data: memorialBooks } = useFetchMemorialBooksWithQuest(petId, questIndex);
  const { data: cheerData } = useFetchCheeringPet();

  const isOwner = currentPetId === petId;

  useEffect(() => {
    if (!params.pet && petId && !sessionStorage.getItem('initialNavigation')) {
      sessionStorage.setItem('defaultPetId', petId.toString());
      sessionStorage.setItem('initialNavigation', 'true');
      navigate(`/everstar/${petId}`);
    }
  }, [params.pet, petId, navigate]);

  if (!petDetails) {
    return <div>Loading...</div>;
  }

  const petProfile: PetProfile = {
    name: petDetails?.name || '',
    age: petDetails?.age || 0,
    description: petDetails?.introduction || '',
    date: petDetails?.memorialDate,
    tagList: petDetails?.petPersonalities || [],
    avatarUrl: petDetails?.profileImageUrl || '',
    questIndex: petDetails?.questIndex || 0,
  };
  const postItCards =
    cheerData?.data?.content?.map(
      (item: {
        content: string;
        petName: string;
        color: string;
        cheeringMessageId: number;
        petId: number;
      }) => ({
        contents: item.content || '',
        name: item.petName || '',
        color: item.color.toLowerCase() || '',
        cheeringMessageId: item.cheeringMessageId,
        petId: item.petId,
      })
    ) || [];

  const totalPages = Math.ceil(postItCards.length / 10);

  return (
    <div className="flex justify-center w-full">
      <Routes>
        <Route
          path="/"
          element={
            <EverStarMain
              petProfile={petProfile}
              buttonDisabled={
                !memorialBooks?.data.isActive || !memorialBooks?.data.isOpen
              }
              memorialBookProfile={memorialBooks?.data ?? null}
              petId={petId ?? 0}
              isOwner={isOwner}
            />
          }
        />
        <Route
          path="message"
          element={
            <EverStarCheerMessage
              profile={petProfile}
              postItCards={postItCards}
              totalPages={totalPages}
            />
          }
        />
        <Route path="explore" element={<EverStarSearchStar />} />
        <Route
          path="memorialbook/:memorialBookId"
          element={
            <MemorialBook avatarUrl={petProfile.avatarUrl} isOwner={isOwner} />
          }
        />
      </Routes>
    </div>
  );
};
