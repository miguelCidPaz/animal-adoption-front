export default function useHandleCurrentPet() {

    const getCurrentPetData = (petId, allPets) => {
        if (allPets.length > 0) {
            const petData = allPets.filter((pet) => pet.id === petId);
            return petData[0];
        }
    }

    const getAdoptionStatus = (petId, activeAdoptions) => {
<<<<<<< HEAD
        ;        
        if (activeAdoptions.length > 0) {
            const petAdoptionStatus = activeAdoptions.filter((adoption) => adoption.idPet === petId);           
=======
        if (activeAdoptions.length > 0) {
            const petAdoptionStatus = activeAdoptions.filter((adoption) => adoption.idPet === petId);
>>>>>>> dff42044050231bf8089b69032af8bcc8dcced83
            return petAdoptionStatus[0];
        }
    }

    return {getCurrentPetData, getAdoptionStatus};
}