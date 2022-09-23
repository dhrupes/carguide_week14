package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchPage.class.getName());

    public SearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='New & Used Car Search - carsguide']")
    WebElement carSearchText;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement selectMake;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement selectModels;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement selectLocations;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement selectPrice;

    @CacheLookup
    @FindBy(xpath ="//input[@id='search-submit']")
    WebElement ClickOnFindMyNextCar;


    public String getCarSearchText() {
        String message = getTextFromElement(carSearchText);
        return message;
    }

    public void setSelectMake(String make) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(selectMake, make);
    }

    public void setSelectmodels(String model) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(selectModels, model);
    }

    public void setSelectLocations(String locations) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(selectLocations, locations);
    }
    public void setSelectPrice(String price) throws InterruptedException {
        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(selectPrice, price);
    }
    public void setClickOnFindMyNextCar(){
        clickOnElement(ClickOnFindMyNextCar);
    }
}
