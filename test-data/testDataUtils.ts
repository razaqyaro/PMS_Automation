import {TestData} from "./testData";

export class TestDataUtil {

    static getRandomIntInclusive(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static generateValidEmail(): string {
        return this.generateEmailUsingLength(255);
    }

    static generateInvalidEmail(): string {
        let emailUserNameWithDomain = `${this.generateEmailUsername(10)}@${this.generateEmailDomainPart(10)}`;
        const invalidEmailPatterns = [
            () => this.generateEmailUsername(10),
            () =>
                `@${this.generateEmailDomainPart(5)}.${this.generateEmailTldPart(10)}`,
            () => `${emailUserNameWithDomain}.`,
            () => `${emailUserNameWithDomain}@${this.generateEmailTldPart(7)}`,
            () => `${emailUserNameWithDomain}.${this.generateEmailTldPart(7)}!#$%^&*`,
            () =>
                `${this.generateEmailUsername(10)}.${this.generateEmailDomainPart(10)}.${this.generateEmailTldPart(10)}`,
        ];
        return invalidEmailPatterns[
            Math.floor(Math.random() * invalidEmailPatterns.length)
            ]();
    }

    static generateMobilePhoneNumber(): string {
        const allPrefixes = {
            prefixes10Digits: [
                "024",
                "059",
                "055",
                "050",
                "026",
                "027",
            ],

        };
        const usePrefix10Digits = Math.random() < 0.5;

        const selectedPrefix = usePrefix10Digits
            ? allPrefixes.prefixes10Digits[
                Math.floor(Math.random() * allPrefixes.prefixes10Digits.length)
                ]
            : allPrefixes.prefixes10Digits[
                Math.floor(Math.random() * allPrefixes.prefixes10Digits.length)
                ];

        const numberLength = usePrefix10Digits ? 11 : 10;
        const numberSuffixLength = numberLength - selectedPrefix.length;
        const numberSuffix = Math.floor(
            Math.random() * Math.pow(10, numberSuffixLength),
        )
            .toString()
            .padStart(numberSuffixLength, "0");

        const countryCode = Math.random() < 0.5 ? "+49" : "0";

        return `${countryCode}${selectedPrefix}${numberSuffix}`;
    }


    static generateInvalidMobileNumber() {
        return `${this.generateMobilePhoneNumber().slice(0, 3)} +49 ${this.generateMobilePhoneNumber().slice(3)}`;
    }

    static generateRandomString(length: number): string {
        return this.generateRandomStringWithBoundary(length, length);
    }

    private static generateRandomStringWithBoundary(
        minLength: number,
        maxLength: number,
        possibleChars: string = TestData.CHARS_FOR_STRING_GENERATION,
    ): string {
        const length = this.getRandomIntInclusive(minLength, maxLength);
        let result = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * possibleChars.length);
            result += possibleChars[randomIndex];
        }
        return result;
    }

    private static generateEmailUsername(length: number): string {
        return this.generateRandomStringWithBoundary(
            1,
            length,
            TestData.CHARS_FOR_STRING_GENERATION + "_!#$%&'*+/=?`{|}~^-",
        );
    }

    private static generateEmailDomainPart(length: number): string {
        return this.generateRandomStringWithBoundary(
            1,
            length,
            TestData.CHARS_FOR_STRING_GENERATION + "-",
        );
    }

    private static generateEmailTldPart(length: number): string {
        return this.generateRandomStringWithBoundary(2, length);
    }

    private static generateEmailUsingLength(length: number): string {
        const remainingLength = length - 2;
        const usernameLength = Math.max(1, Math.floor(remainingLength * 0.5));
        const domainPartLength = Math.max(1, remainingLength - usernameLength - 1);
        const tldPartLength = Math.max(
            1,
            remainingLength - usernameLength - domainPartLength,
        );
        const username = this.generateEmailUsername(usernameLength);
        const domainPart = this.generateEmailDomainPart(domainPartLength);
        const tldPart = this.generateEmailTldPart(tldPartLength);
        return `${username}@${domainPart}.${tldPart}`;
    }
}
