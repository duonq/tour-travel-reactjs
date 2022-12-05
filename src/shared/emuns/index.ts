enum KeyStorage {
    profile = "profile",
    token = "token",
    typeScreen = "typeScreen",
    role = "role",
    typeAdmin = "typeAdmin",
}

enum TypeInputCustom {
    checkbox = "checkbox",
    date = "date",
    image = "image",
    text = "text",
    radio = "radio",
    select = "select",
    textarea = "textarea",
    number = "number",
    password = "password"
}

enum TypeNotification {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning"
}

enum KeyTypeScreenLogin {
    admin = "admin",
    contact = "contact",
    career = "career",
    adminFqa = "admin-fqa",
    provider = "provider",
    agency = "agency"
}

enum StatusCode {
    ok = 200,
    created = 201,
    bad_request = 400,
    expired_token = 401,
    not_found = 404,
    method_not_allowed = 405,
    not_accept = 406,
    error_server = 500
}

const ListKeyCodeNumber: any[] = [
    undefined,
    8,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105
]

enum ListNamePopup {
    popupCreateContractorAdmin = "popupCreateContractorAdmin",
    popupDeleteContractorAdmin = "popupDeleteContractorAdmin",
    popupSettingServiceContractorAdmin = "popupSettingServiceContractorAdmin",
    popupLogout = "popupLogout",
    popupEmailContractor = "popupEmailContractor"
}

const urlify = (text: string) => {
    var urlRegex =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    return text.replace(urlRegex, url => {
        let link = `<a style='color: #1890ff'  href="http://${url}" target="_blank">${url}</a>`
        if (url.includes("http" || "https")) {
            link = `<a style='color: #1890ff'  href="${url}" target="_blank">${url}</a>`
            return link
        }
        return link
    })
}

enum filterContractorTop {
    all = 0,
    trial = 1,
    paidMonthly = 2,
    paidAnnually = 3
}

enum RouterName {
    home = "/",
    login = "/login",
    topPage = "/top-page",
    createContractor = "/contractor_create",
    detailContractor = "/contractor/:contractor_id",
    sendUrl = "/send-url",
    resetPassword = "/password/reset"
}

enum AdminType {
    regular = 0,
    super
}

enum DateFormat {
    YYYYMMDD = "YYYY/MM/DD"
}

enum TypeRole {
    admin = "admin",
    contractor = "contractor"
}

enum TypeSort {
    ASC = "ASC",
    DESC = "DESC"
}

export {
    KeyStorage,
    KeyTypeScreenLogin,
    ListKeyCodeNumber,
    ListNamePopup,
    StatusCode,
    TypeInputCustom,
    TypeNotification,
    RouterName,
    urlify,
    filterContractorTop,
    AdminType,
    DateFormat,
    TypeRole,
    TypeSort
}
