package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage  extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@href='/buy-a-car/all-new-and-used']")
    WebElement buySell;

    @CacheLookup
    @FindBy(xpath = "//a[@href='/buy-a-car/new-and-used-car-search']")
    WebElement searchCarsLink;

    @CacheLookup
    @FindBy(xpath = "//a[@href='//www.carsguide.com.au/buy-a-car/used-car-search']")
    WebElement usedCarSearchLink;

    @CacheLookup
    @FindBy(xpath = "//a[@href='//www.carsguide.com.au/car-dealers']")
    WebElement findADealersLink;


    public void clickOnBuyAndSell() {
        mouseHoverToElement(buySell);

    }

    public void clickOnSearchCarsLink() {
        clickOnElement(searchCarsLink);

    }

    public void clickOnUsedSearchCarLink(){
        clickOnElement(usedCarSearchLink);
    }


    public void clickOnFindADealersLink(){
        clickOnElement(findADealersLink);
    }
}
