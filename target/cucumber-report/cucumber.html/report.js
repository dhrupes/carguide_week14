$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "\r\nAs user I want to check buy search page",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "NSW - Far West",
        "$40,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "Mid North Coast, NSW",
        "$40,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Ford",
        "Couriers",
        "New England, NSW",
        "$25,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "Accords",
        "Newcastle, NSW",
        "$20,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "Illawarra, NSW",
        "$30,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Hyundai",
        "Getz",
        "NT",
        "$35,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15152142101,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - Far West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 212093200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 10515841300,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-C81MEGU\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e80d5372ec1c4eff7a6a1b1e75c1dd9c, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@782bf610]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhrup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57731}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57731/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e80d5372ec1c4eff7a6a1b1e75c1dd9c\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:230)\r\n\tat com.carsguide.pages.HomePage.clickOnBuyAndSell(HomePage.java:37)\r\n\tat com.carsguide.steps.BuySteps.iMouseHoverOnTab(BuySteps.java:17)\r\n\tat ???.When I mouse hover on \"buy+sell\" tab(src/test/java/resources/featurefile/buy.feature:7)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-C81MEGU\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\t\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:230)\r\n\t\tat com.carsguide.pages.HomePage.clickOnBuyAndSell(HomePage.java:37)\r\n\t\tat com.carsguide.steps.BuySteps.iMouseHoverOnTab(BuySteps.java:17)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:230)\r\n\tat com.carsguide.pages.HomePage.clickOnBuyAndSell(HomePage.java:37)\r\n\tat com.carsguide.steps.BuySteps.iMouseHoverOnTab(BuySteps.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-C81MEGU\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e80d5372ec1c4eff7a6a1b1e75c1dd9c, findElement {using\u003dxpath, value\u003d//a[@href\u003d\u0027/buy-a-car/all-new-and-used\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhrup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57731}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57731/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e80d5372ec1c4eff7a6a1b1e75c1dd9c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:201)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:152)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 96 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Far West",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10425257099,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-C81MEGU\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e80d5372ec1c4eff7a6a1b1e75c1dd9c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhrup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57731}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57731/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e80d5372ec1c4eff7a6a1b1e75c1dd9c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 9094257299,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"Mid North Coast, NSW\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 70201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 209390900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 187927100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 46001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 4570215799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 1196578599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mid North Coast, NSW",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
