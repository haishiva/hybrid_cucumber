package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.base_class.Library;

public class OrangeHRMAdminPage extends Library {
	
	public OrangeHRMAdminPage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//*[@id=\"menu_admin_viewAdminModule\"]/b")
	WebElement adminButton;
	
	@FindBy(id="searchSystemUser_userName")
    WebElement usernameText;
	
	@FindBy(id="searchSystemUser_userType")
    WebElement userTypeText;
	
	@FindBy(id="searchSystemUser_employeeName_empName")
    WebElement employeeName;
	
	@FindBy(id="searchSystemUser_status")
    WebElement status;
	
	@FindBy(id="searchBtn")
    WebElement searchButton;
	
	public void admin()
	{
		adminButton.click();
	}
	
	public void enterUserName(String name)
	{
		usernameText.sendKeys(name);
	}
	
	public void enterUserRole(String userRole)
	{
		Select select = new Select(userTypeText);
		select.selectByVisibleText(userRole);
	}

	public void enterEmployeeName(String name)
	{
		employeeName.sendKeys(name);
	}
	
	
	public void status(String userStatus)
	{
		Select select = new Select(status);
		select.selectByVisibleText(userStatus);
	}

	public void search()
	{
		searchButton.click();
	}

}
