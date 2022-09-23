package com.carsguide.steps;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.SearchPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuySteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }
    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String arg0) {
        new HomePage().clickOnBuyAndSell();
    }

    @And("^I click 'Search Cars' link$")
    public void iClickSearchCarsLink() {

        new HomePage().clickOnSearchCarsLink();

    }
    @Then("^I navigate to 'new and used car search' page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        //  String message1 = new SearchPage().getCarSearchText();
        //Assert.assertEquals(text,message1,"New & Used Car Search - carsguide");
    }


    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) throws InterruptedException {

        new SearchPage().setSelectMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String models) throws InterruptedException {
        new SearchPage().setSelectmodels(models); }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String locations) throws InterruptedException {
        new SearchPage().setSelectLocations(locations);
    }
    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {
        new SearchPage().setSelectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new SearchPage().setClickOnFindMyNextCar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String arg0) {
    }


    @And("^I click 'Used' link$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedSearchCarLink();
    }

    @Then("^I navigate to 'Used Cars For Sale' page$")
    public void iNavigateToUsedCarsForSalePage() {
        new SearchPage().setClickOnFindMyNextCar();
    }
}
