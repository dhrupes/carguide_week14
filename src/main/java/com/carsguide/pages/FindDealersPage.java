package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class FindDealersPage extends Utility {

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Find a Car Dealership Near You')]")
    WebElement text;


    @CacheLookup
    @FindBy(className = "dealerListing--name")
    List<WebElement> dealersName;


    public String navigateDealerText() {
        String headingText = getTextFromElement(text);
        return headingText;
    }

    public void CarDealersList(Boolean carDelList) {
        for (WebElement selectText : dealersName) {
            if (selectText.isDisplayed()) {
                break;

            } else {
                System.out.println("Dealers Name Not in the list");
            }
        }
    }
}
