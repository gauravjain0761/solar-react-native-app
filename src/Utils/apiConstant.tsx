export const api = {
    // BASE_URL: "https://app.saffo.com.br/api/v1/",
    // IMAGE_BASE_URL: "https://app.saffo.com.br",
    BASE_URL: "https://solar-app-adminpanel.vercel.app/api/v1",
    IMAGE_BASE_URL: "https://solar-app-adminpanel.vercel.app",

    // customer auth
    // login: "user/login",
    customerSignUp: "/customer/customerSignUp",
    sendVerificationCode: '/customer/sendVerificationCode',
    verifyVerificationCode: '/customer/verifyVerificationCode',
    forgetpassword: "user/send-restPassword-mail",
    referralCode: 'user/add-referral-code',
    checkUserSignupStatus: 'user/check-user-signUp-status',

}

export const POST = "POST";
export const GET = "GET";
export const PATCH = "PATCH";
export const DELETE = "DELETE";