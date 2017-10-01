package stepdefinition;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 
public class LoginTest {
	WebDriver driver = null;
	
	
	 @Given("^User is on login page$") 
	 public void user_is_on_loginpage(){
		 
		 driver = new FirefoxDriver();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 driver.navigate().to("https://uk.yahoo.com/");
		 driver.findElement(By.xpath(".//*[@id='uh-signin']")).click();
				 
		 
	 }
	 
	 
	 @When ("User enters Username and Password$")
	 public void user_enters_Username_and_Password(){
		 driver.findElement(By.xpath(".//*[@id='login-username']")).clear();
		 driver.findElement(By.xpath(".//*[@id='login-username']")).sendKeys("abdulsalam12000@yahoo.com");
		 driver.findElement(By.xpath(".//*[@id='login-signin']")).click();
		 driver.findElement(By.xpath(".//*[@id='login-username-form']/p[2]/span[1]/label")).clear();
		 driver.findElement(By.xpath(".//*[@id='login-username-form']/p[2]/span[1]/label")).click();
		 driver.findElement(By.xpath(".//*[@id='login-passwd']")).clear();
		 driver.findElement(By.xpath(".//*[@id='login-passwd']")).sendKeys("NormalNormal12000");
		 	
		 
	 }
	 
	 @And ("^Click login$")
	 public void click_login(){
		 driver.findElement(By.name("verifyPassword")).click();
		 
	 }
	 
	 @Then ("^User should see his messages$")
	 public void user_should_see_his_messages(){
		 
		 
	 }
	

}
