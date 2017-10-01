package stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/featurefiles/registration.feature",
				glue={"stepdefinition"}, 
				plugin = {"html:target/ReportsDestination", "pretty", "junit:target/junitrep"})

public class runTest {

}
