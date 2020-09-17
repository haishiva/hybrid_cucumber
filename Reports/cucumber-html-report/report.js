$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TestCase.feature");
formatter.feature({
  "name": "To Test the OrangeHrm Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Test the Admin Functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Open Admin functionlity of OrangeHrm",
  "keyword": "Given "
});
formatter.step({
  "name": "To Enter \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Select \"\u003cUserRole\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "UserRole"
      ]
    },
    {
      "cells": [
        "Akhil",
        "Admin"
      ]
    },
    {
      "cells": [
        "shiva",
        "All"
      ]
    }
  ]
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-9HUOTQA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\SHIVAK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59601}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a66d3e2a3643366cda373c6b1e6a561e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.base_class.Library.browserSetUp(Library.java:84)\r\n\tat com.step_definition.OrangeHRMLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url(OrangeHRMLoginSteps.java:18)\r\n\tat ✽.To launch the browser and Navigate to the Url(file:///C:/Users/shiva%20kumar/eclipse-workspace/hybrid_cucumber/src/test/resources/features/TestCase.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To Test the Admin Functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Open Admin functionlity of OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.to_Open_Admin_functionlity_of_OrangeHrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Enter \"Akhil\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.to_Enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select \"Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.select(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.select_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-9HUOTQA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\SHIVAK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: eb295681c039eb387463f1ec7c10f981\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.base_class.Library.browserSetUp(Library.java:84)\r\n\tat com.step_definition.OrangeHRMLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url(OrangeHRMLoginSteps.java:18)\r\n\tat ✽.To launch the browser and Navigate to the Url(file:///C:/Users/shiva%20kumar/eclipse-workspace/hybrid_cucumber/src/test/resources/features/TestCase.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To Test the Admin Functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Open Admin functionlity of OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.to_Open_Admin_functionlity_of_OrangeHrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Enter \"shiva\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.to_Enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select \"All\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.select(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.select_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHRMAdminSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});