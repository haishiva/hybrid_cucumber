package com.step_definition;

import com.base_class.Library;
import com.pages.OrangeHRMLoginPage;
import com.selenium_reusableFunctions.SeleniumUtility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OrangeHRMLoginSteps extends Library {

	OrangeHRMLoginPage page1;
	SeleniumUtility seleniumutility;
	
	@Given("To launch the browser and Navigate to the Url")
	public void to_launch_the_browser_and_Navigate_to_the_Url() {
		browserSetUp();
     logger.info("browser launched");		
	   
	}

	@When("To Enter Username and Password")
	public void to_Enter_Username_and_Password() {
		page1=new OrangeHRMLoginPage(driver);
	   page1.LoginUser(properties.getProperty("username"),properties.getProperty("password"));
       logger.info("username and password entered");	
	}

	@Then("To Click the Submit button")
	public void to_Click_the_Submit_button() {
		
	   page1.submit();
	   logger.info("Login buuton clicked");
	}

	@Then("To Take the Screenshot and the Title")
	public void to_Take_the_Screenshot_and_the_Title() {
	  
		seleniumutility=new SeleniumUtility(driver);
		seleniumutility.to_take_screenshot("loginpage");
		seleniumutility.getTitle();
		logger.info("Scrrenshot taken");
		logger.info("title displayed");
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
	 
	
		logger.info("Closed the browser");
	}

}
