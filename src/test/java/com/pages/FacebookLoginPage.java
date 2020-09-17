package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base_class.Library;

public class FacebookLoginPage extends Library {
	
	public FacebookLoginPage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="email")
	WebElement emailId;
	
	@FindBy(id="pass")
	WebElement password1;
	
	@FindBy(name="login")
	WebElement login;
	
	public void LoginUser(String username, String password)
	{
		emailId.sendKeys(username);
		password1.sendKeys(password);
		login.click();
	}
	

}
