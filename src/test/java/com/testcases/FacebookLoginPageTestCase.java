package com.testcases;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.base_class.Library;
import com.pages.FacebookLoginPage;
import com.pages.OrangeHRMLoginPage;
import com.selenium_reusableFunctions.SeleniumUtility;

public class FacebookLoginPageTestCase extends Library {
	
	SeleniumUtility seleniumutility;
	FacebookLoginPage page1;
	
	@BeforeTest
	public void launchApp()
	{
		browserSetUp();
		logger.info("Browser Launched");
	}
	
	@Test
	public void login()
	{
		page1=new FacebookLoginPage(driver);
		page1.LoginUser(properties.getProperty("username"),properties.getProperty("password"));
		logger.info("Browser Login successfully");
		
	}
	
	@AfterTest
	public void close()
	{
		seleniumutility =new SeleniumUtility(driver);
		seleniumutility.getTitle();
		seleniumutility.to_take_screenshot("loginpage");
		tearDown();
		logger.info("Closing Browser");
		
	}

}
