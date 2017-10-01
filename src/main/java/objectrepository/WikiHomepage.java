package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class WikiHomepage {
	
	WebDriver driver;
	
	public WikiHomepage(WebDriver driver) {
		this.driver=driver;
	}
	
	By searchInputfield = By.xpath((".//*[@id='searchInput']"));
	
	
	
	public WebElement enter_input(){
		return driver.findElement(searchInputfield);
	}
	
	/*driver.findElement(By.xpath(".//*[@id='searchInput']")).sendKeys(arg);
	Select oSelect = new Select (driver.findElement(By.xpath(".//*[@id='searchLanguage']")));
	oSelect.selectByVisibleText("English");
	Thread.sleep(2000);
	driver.findElement(By.xpath(".//*[@id='search-form']/fieldset/button")).click();
*/
}
