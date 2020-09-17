package com.step_definition;

import com.base_class.Library;
import com.pages.OrangeHRMAdminPage;
import com.pages.OrangeHRMLoginPage;
import com.selenium_reusableFunctions.SeleniumUtility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OrangeHRMAdminSteps extends Library {
	
	OrangeHRMAdminPage page1;
	
	SeleniumUtility seleniumutility;
	
	@Given("To Open Admin functionlity of OrangeHrm")
	public void to_Open_Admin_functionlity_of_OrangeHrm() {
	
	   page1=new OrangeHRMAdminPage(driver);
	   page1.admin();
	   logger.info("admin button clicked");
	}

	
	@When("To Enter {string}")
	public void to_Enter(String userName) {
		 page1=new OrangeHRMAdminPage(driver);
		 page1.enterUserName(userName);
		 logger.info("username entered");
	   
	}

	@Then("Select {string}")
	public void select(String userRole) {
		page1=new OrangeHRMAdminPage(driver);
		 page1.enterUserRole(userRole);
	   
	}


	@Then("To Enter EmployeeName")
	public void to_Enter_EmployeeName() {
		 page1=new OrangeHRMAdminPage(driver);
		 page1.enterEmployeeName("shiva");
	}

	@Then("Select Status")
	public void select_Status() {
		 page1=new OrangeHRMAdminPage(driver);
		 page1.status("Enabled");
	}

	@Then("Click Search Button")
	public void click_Search_Button() {
		 page1=new OrangeHRMAdminPage(driver);
		 page1.search();
	}

	@Then("Take the Screenshot and the Title")
	public void take_the_Screenshot_and_the_Title() {
		seleniumutility=new SeleniumUtility(driver);
		seleniumutility.to_take_screenshot("adminpage");
		seleniumutility.getTitle();
		logger.info("Scrrenshot taken");
		logger.info("title displayed");
	}

	@Then("Close the browser")
	public void close_the_browser() {
		seleniumutility.quit();
		logger.info("Closed the browser");
	}



}
