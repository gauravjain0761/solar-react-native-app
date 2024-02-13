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
    getUserData: '/customer/getData',
    updateCustomerData: '/customer/updateCustomerData',


    addSolarEnquiry: '/solarEnquiry/addSolarEnquiry',
    addMaintenanceEnquiry: '/maintenanceEnquiry/addMaintenanceEnquiry'

}

export const POST = "POST";
export const GET = "GET";
export const PATCH = "PATCH";
export const DELETE = "DELETE";