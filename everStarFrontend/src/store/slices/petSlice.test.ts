import petReducer, {
  addPet,
  setPets,
  updatePet,
  removePet,
  setPetDetails,
  setSelectedPetId
} from './petSlice';

describe('petSlice', () => {
  const initialState = {
    pets: [],
    petDetails: null,
    selectedPetId: null,
  };

  it('should handle initial state', () => {
    expect(petReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setPets', () => {
    const pets = [
      { id: 1, name: 'Pet1', profileImageUrl: 'url1' },
      { id: 2, name: 'Pet2', profileImageUrl: 'url2' },
    ];
    const actual = petReducer(initialState, setPets(pets));
    expect(actual.pets).toEqual(pets);
  });

  it('should handle addPet', () => {
    const newPet = { id: 1, name: 'Pet1', profileImageUrl: 'url1' };
    const actual = petReducer(initialState, addPet(newPet));
    expect(actual.pets).toEqual([newPet]);
  });

  it('should handle updatePet', () => {
    const startState = {
      ...initialState,
      pets: [{ id: 1, name: 'Pet1', profileImageUrl: 'url1' }],
    };
    const updatedPet = { id: 1, name: 'Updated Pet', profileImageUrl: 'newUrl' };
    const actual = petReducer(startState, updatePet(updatedPet));
    expect(actual.pets[0]).toEqual(updatedPet);
  });

  it('should handle removePet', () => {
    const startState = {
      ...initialState,
      pets: [{ id: 1, name: 'Pet1', profileImageUrl: 'url1' }],
    };
    const actual = petReducer(startState, removePet(1));
    expect(actual.pets).toEqual([]);
  });

  it('should handle setPetDetails', () => {
    const details = {
      id: 1,
      userId: 1,
      name: 'Pet1',
      age: 5,
      memorialDate: '2023-01-01',
      species: 'Dog',
      gender: 'M',
      relationship: 'Friend',
      profileImageUrl: 'url1',
      personalities: ['Friendly'],
    };
    const actual = petReducer(initialState, setPetDetails(details));
    expect(actual.petDetails).toEqual(details);
  });
});
