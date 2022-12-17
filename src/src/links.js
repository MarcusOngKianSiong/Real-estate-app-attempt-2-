const baseLink = "https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/";
const loginLink = 'https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/login/'


const getProfile = `${baseLink}profile/getprofile`;
const editProfile = `${baseLink}profile/editprofiledata`
const imagekitAuthentication = `${baseLink}profile/imagekitauthentication`
const deleteImage = `${baseLink}profile/deleteprofilepicture`
const changeProfilePicture = `${baseLink}profile/changeprofilepicture`

module.exports = {baseLink,loginLink,getProfile,editProfile,imagekitAuthentication,deleteImage, changeProfilePicture}


