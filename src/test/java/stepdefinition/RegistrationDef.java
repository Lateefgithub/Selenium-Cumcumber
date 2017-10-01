package stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.equalTo;

public class RegistrationDef {
	WebDriver driver = null;
	
	@Before public void setUp(){
		String chromeDriverLocation = "src/main/resources/drivers/chromedriver.exe"; 
		System.setProperty("webdriver.chrome.driver", chromeDriverLocation);
		driver = new ChromeDriver();
	}
	
	@Given("^User is on the PhpTravels home page$")
	public void goToPhpHomePage(){
		//driver.get("http://www.phptravels.net/");	
		driver.navigate().to("http://www.phptravels.net");			
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
		driver.findElement(By.xpath(".//*[@id='li_myaccount']/a")).click();
	}
	
	@When("^User goes to Signup page$")
	public void User_navigates_to_signup_page() throws Throwable{
		Thread.sleep(10000);
		//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		//new WebDriverWait(driver, 10).until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("/html/body/div[3]/div/div/div[2]/ul/ul/ul/li/a")));
		//driver.findElement(By.xpath("//*[text()='My Account']")).click();
		
		//Choosing English Language
		//driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/ul/ul/ul/li/a")).click();
		//driver.findElement(By.xpath(".//*[@id='en']")).click();
		
		//choosing Sign Up link from MyAccount
		//driver.findElement(By.xpath(".//*[@id='li_myaccount']/a")).click();
		driver.findElement(By.xpath(".//*[@id='li_myaccount']/ul/li[2]/a")).click();
		
		//driver.findElement(By.linkText("Sign Up")).click();
		//driver.findElement(By.xpath("/html/body/div[2]/div/div/div[2]/ul/li[2]/ul/li[2]/a")).click();
	/*	Thread.sleep(2000);
		String actualTitle = driver.getTitle();
		String expectedTitle ="Register";
		if (actualTitle==expectedTitle){
			System.out.println("User is on "+ actualTitle + " page");
			} else {
				System.out.println("User is not on Registration page "+ actualTitle);
			}
	
		*/
//		assertThat(expectedTitle,actualTitle);
	}
	
	@When ("^User enters valid data on the page$")
	public void user_enters_data(DataTable table){
		//Initialise data table
		List<List<String>> data = table.raw();
		System.out.println(data.get(1).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[3]/input")).sendKeys(data.get(1).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[4]/input")).sendKeys(data.get(2).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[5]/input")).sendKeys(data.get(3).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[6]/input")).sendKeys(data.get(4).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[7]/input")).sendKeys(data.get(5).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[8]/input")).sendKeys(data.get(6).get(1));
		driver.findElement(By.xpath(".//*[@id='headersignupform']/div[9]/button")).click();
				
		
		
	}
	
	@Then ("User registration should be succesfull$")
	public void is_reg_successful(){
		//Boolean bookings_page_is_displayed;
		String bookings_page_text= driver.findElement(By.xpath(".//*[@id='bookings']/h4/strong")).getText();
		if (bookings_page_text == "Nothing Booked Yet"){
			System.out.println("PASS");
		}else
		{
			System.out.println("FAIL");
		}

		//driver.close();	
	}
	
	@After public void cleanUp(){
		//driver.close();
	}
	
	
	

	
	
	
}
