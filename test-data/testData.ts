import {TestDataUtil} from "./testDataUtils";

export class TestData {
    public static readonly MIS_ADMIN_USER_NAME = "misadmin@yopmail.com";
    public static readonly MIS_ADMIN_USER_PASSWORD = "Testing@1234";
    public static readonly INVALID_LOGIN_CREDENTIALS_ERROR_MESSAGE = "User login attempt failed. Kindly check your credentials or please contact your administrator.";
    public static readonly EMPTY_EMAIL_LOGIN_FIELD_ERROR_MESSAGE = "Email or phone number is required";
    public static readonly EMPTY_PASSWORD_LOGIN_FIELD_ERROR_MESSAGE = "Password is required";
    public static readonly CHARS_FOR_STRING_GENERATION = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    public static readonly INVALID_PASSWORD = TestDataUtil.generateRandomString(20)+"A@1234";
    public static readonly INVALID_EMAIL_PHONE_NUMBER_ERROR_MESSAGE ="Invalid email address or phone number";
    public static readonly SPECIAL_CHARACTERS = "!@#$%^&*()";
    public static readonly INVALID_EMAIL = TestDataUtil.generateValidEmail();
}