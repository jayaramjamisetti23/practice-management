// App-wide config data
const url = 'https://practicedevapi.dosystemsinc.com/';//dev

export const APP_CONFIG = {
    apiUrl: `${url}api/`,
    imgUrl: `${url}images/attachment/`,
    profileUrl: `${url}images/users/`,
    patientImageUrl: `${url}images/attachment/`,
    sampleFileUrl: `${url}images/`,
    previousImageUrl: `${url}images/`,

    entityType: 'users',
    defaultScreen: '/employees',
    defaultComment: 'This is a default comment.',
    maxLength: 500,
    enableEditing: true,

    //regex patterns
    emailRegex: /^(?=.{1,50}$)[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
    passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
    aadharcardNumberRegex: /^([0-9]){12}$/,
    pancardNumberRegex: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
    phoneNumberRegex: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
    phoneNumberLength: 10,
    zipCodeLength: 5,
};
