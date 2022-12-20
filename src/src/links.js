const baseLink = "https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/";
const loginLink = 'https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/login/'


const getProfile = `${baseLink}profile/getprofile`;
const editProfile = `${baseLink}profile/editprofiledata`
const imagekitAuthentication = `${baseLink}profile/imagekitauthentication`
const deleteImage = `${baseLink}profile/deleteprofilepicture`
const changeProfilePicture = `${baseLink}profile/changeprofilepicture`
//https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/yourhomes/get-coordinates?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmltYXJ5S2V5IjoxLCJpYXQiOjE2NzEyOTQ5NzJ9.GM1KXZtk-kmDVpVhuiZxxwGDXonq1etja5vj-kVtWdg
//https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/yourhomes/get-coordinates
const gettingCoordinates = `https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/yourhomes/get-coordinates`
const gettingPropertyImages = `https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/yourhomes/get-property-image`
module.exports = {baseLink,loginLink,getProfile,editProfile,imagekitAuthentication,deleteImage, changeProfilePicture, gettingCoordinates,gettingPropertyImages}


