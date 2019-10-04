

describe("Enter name feature",function(){

it('should enter name as Akshay', function(){

    browser.get('https://angularjs.org/');
    element(by.model('yourName')).sendKeys('Akshay');

    let text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
    //console.log(text.getText());

    expect(text.getText()).toEqual('Hello Akshay!');

});
});



describe('Angular Title Test',function(){

    it('Get Title Test',function(){

        browser.get('https://angularjs.org/');
        expect(browser.getTitle()).toContain('Angular');
        browser.driver.sleep(2000);

    });

});



/*element.all(by.repeater('')): - it will return element array 
 For Ex: - var history = element.all(by.repeater('result in memory'));
This belongs to ng-repeat attribute of angular js
*/

