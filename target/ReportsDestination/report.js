$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/featurefiles/registration.feature");
formatter.feature({
  "line": 2,
  "name": "Registration on PHPTravels",
  "description": "",
  "id": "registration-on-phptravels",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.before({
  "duration": 5417735566,
  "status": "passed"
});
formatter.before({
  "duration": 3026712483,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# registration through MyAccount on www.phptravels.net"
    }
  ],
  "line": 6,
  "name": "User is register successfully with valid details (Happy Path)",
  "description": "",
  "id": "registration-on-phptravels;user-is-register-successfully-with-valid-details-(happy-path)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on the PhpTravels home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User goes to Signup page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters valid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 11
    },
    {
      "cells": [
        "First Name",
        "Lateef"
      ],
      "line": 12
    },
    {
      "cells": [
        "Last Name",
        "Abdulsalam"
      ],
      "line": 13
    },
    {
      "cells": [
        "Mobile Number",
        "07886415505"
      ],
      "line": 14
    },
    {
      "cells": [
        "Email",
        "abdulsalam1111@yahoo.com"
      ],
      "line": 15
    },
    {
      "cells": [
        "Password",
        "Pompkin2"
      ],
      "line": 16
    },
    {
      "cells": [
        "Confirm Password",
        "Pompkin2"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User registration should be succesfull",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationDef.goToPhpHomePage()"
});
formatter.result({
  "duration": 8712833134,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 33 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-UPPEUJHV\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Lateef\\AppData\\Local\\Temp\\scoped_dir5544_4479}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 19290c125d76edfdc1d352338591af13\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.RegistrationDef.goToPhpHomePage(RegistrationDef.java:39)\r\n\tat ✽.Given User is on the PhpTravels home page(src/test/java/featurefiles/registration.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationDef.User_navigates_to_signup_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegistrationDef.user_enters_data(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegistrationDef.is_reg_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19041,
  "status": "passed"
});
formatter.after({
  "duration": 136924265,
  "status": "passed"
});
});