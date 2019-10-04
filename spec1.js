
// describe("Angular Application Testing",function(){

//     it('Addition of 2 numbers',function(){

//         browser.get('http://juliemr.github.io/protractor-demo/');
//         browser.driver.sleep(2000);
//         element(by.model('first')).sendKeys(1);
//         browser.driver.sleep(2000);
//         element(by.model('second')).sendKeys(2);
//         browser.driver.sleep(2000);
//         element(by.id('gobutton')).click();
//         browser.driver.sleep(2000);
//         expect(element(by.className("ng-binding")).getText()).toEqual('3');

//     });

// });




//Writing Multiple Scenarios
describe('Writing Multiple Scenarios',function(){

    //Global Variables
    var firstNum = element(by.model('first'));
    var secondNum = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result =  element(by.className("ng-binding"));

    //@Before method of testNG
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
     });

     //Test Case 1
     it('Verify Page Title',function(){

        expect(browser.getTitle()).toEqual('Super Calculator');

     });

     //Test Case 2
     it('Addition of 1 and 2',function(){

        browser.driver.sleep(2000);
        firstNum.sendKeys(1);
        browser.driver.sleep(2000);
        secondNum.sendKeys(2);
        browser.driver.sleep(2000);
        goButton.click();
        browser.driver.sleep(2000);

        expect(result.getText()).toEqual('3');
     });

     //Test Case 3
     it('Addition of 4 and 6',function(){

        browser.driver.sleep(2000);
        firstNum.sendKeys(4);
        browser.driver.sleep(2000);
        secondNum.sendKeys(6);
        browser.driver.sleep(2000);
        goButton.click();
        browser.driver.sleep(2000);

        expect(result.getText()).toEqual('10');
     });

});
