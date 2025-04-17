import {test} from '../../testFixtures/testFixtures';

test.describe('Account Creation', () => {
    test('should create an account with valid details', async ({createAccountPage}) => {
        await createAccountPage.navigateToCreateAccountPage()
        await createAccountPage.fillFirstName("Rahma")
        await createAccountPage.fillMiddleName("Abdulaziz");
        await createAccountPage.fillLastName("Alhajri");
        await createAccountPage.fillEmail("rahman@gmail.com");
        await createAccountPage.fillPhoneNumber("0599668783");
        await createAccountPage.page.pause();
    });


});